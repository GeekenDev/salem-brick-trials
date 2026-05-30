import { readFile } from "node:fs/promises"
import path from "node:path"

export type BamTimelineTone = "bam" | "response" | "video" | "note" | "neutral"

export type BamTimelineBullet = {
  text: string
  tone: BamTimelineTone
  label: string
}

export type BamTimelineEntry = {
  date: string
  title: string
  bullets: BamTimelineBullet[]
}

export type BamTimelineData = {
  intro: string
  entries: BamTimelineEntry[]
}

const TIMELINE_FILE = path.join(process.cwd(), "bam_timeline.md")

function splitParagraphs(section: string) {
  return section
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function classifyBullet(text: string): { tone: BamTimelineTone; label: string } {
  const normalized = text.replace(/\s+/g, " ").trim()

  if (/^Approximate dates inferred/i.test(normalized)) {
    return { tone: "note", label: "Timing note" }
  }

  if (/Reckless Ben’s video|Reckless Ben's video/i.test(normalized)) {
    return { tone: "video", label: "Video reference" }
  }

  if (
    /^Chrystal and Benjamin’s account/i.test(normalized) ||
    /^Chrystal and Benjamin's account/i.test(normalized) ||
    /^Chrystal and Benjamin/i.test(normalized)
  ) {
    return { tone: "response", label: "Chrystal and Benjamin" }
  }

  if (/^BAM\b/i.test(normalized) || /^According to BAM/i.test(normalized)) {
    return { tone: "bam", label: "BAM claim" }
  }

  return { tone: "neutral", label: "Context" }
}

function createTitle(paragraphs: string[]) {
  const source =
    paragraphs.find(
      (paragraph) =>
        !/^Approximate dates inferred/i.test(paragraph) &&
        !/^Chrystal and Benjamin’s account/i.test(paragraph) &&
        !/^Chrystal and Benjamin's account/i.test(paragraph) &&
        !/^Reckless Ben’s video/i.test(paragraph) &&
        !/^Reckless Ben's video/i.test(paragraph),
    ) ?? paragraphs[0] ?? "Timeline entry"

  const withoutLead = source
    .replace(/^According to BAM,\s*/i, "")
    .replace(/^BAM alleges that\s*/i, "")
    .replace(/^BAM alleges\s*/i, "")
    .replace(/^BAM claims that\s*/i, "")
    .replace(/^BAM claims\s*/i, "")
    .replace(/^BAM states that\s*/i, "")
    .replace(/^BAM states\s*/i, "")
    .replace(/^Chrystal and Benjamin’s account:\s*/i, "")
    .replace(/^Chrystal and Benjamin's account:\s*/i, "")
    .replace(/^Chrystal and Benjamin's account:\s*/i, "")

  const sentence = withoutLead.match(/^[^.!?]+[.!?]?/)?.[0] ?? withoutLead
  const cleaned = sentence.replace(/\s+/g, " ").trim()

  if (cleaned.length <= 92) {
    return cleaned
  }

  return `${cleaned.slice(0, 89).trimEnd()}...`
}

export async function getBamTimelineData(): Promise<BamTimelineData> {
  const raw = await readFile(TIMELINE_FILE, "utf8")
  const sections = raw.split(/\n---\n/g).map((section) => section.trim()).filter(Boolean)

  const intro = sections[0] ?? ""
  const entries = sections.slice(1).flatMap((section) => {
    const lines = section.split(/\n/).map((line) => line.trim()).filter(Boolean)
    if (lines.length === 0) {
      return []
    }

    const [dateLine, ...bodyLines] = lines
    const body = bodyLines.join("\n")
    const paragraphs = splitParagraphs(body)

    return [
      {
        date: dateLine.replace(/:$/, ""),
        title: createTitle(paragraphs),
        bullets: paragraphs.map((paragraph) => {
          const { tone, label } = classifyBullet(paragraph)
          return {
            text: paragraph,
            tone,
            label,
          }
        }),
      },
    ]
  })

  return { intro, entries }
}
