import { ExternalLink, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VIDEO_SECTIONS } from "@/lib/hub-data"

export const metadata = {
  title: "Videos | Salem Brick Trials",
  description: "A curated list of the public videos relating to the investigation.",
}

function parseTimestamp(value: string | null): number | null {
  if (!value) return null

  if (/^\d+$/.test(value)) {
    return Number(value)
  }

  const match = value.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/i)
  if (!match) return null

  const hours = Number(match[1] ?? 0)
  const minutes = Number(match[2] ?? 0)
  const seconds = Number(match[3] ?? 0)

  const total = hours * 3600 + minutes * 60 + seconds
  return total > 0 ? total : null
}

function getEmbedSrc(url: string, youtubeId?: string) {
  if (!youtubeId) {
    return null
  }

  try {
    const parsed = new URL(url)
    const timestamp =
      parseTimestamp(parsed.searchParams.get("t")) ??
      parseTimestamp(parsed.searchParams.get("start")) ??
      parseTimestamp(parsed.searchParams.get("time_continue")) ??
      parseTimestamp(parsed.hash.startsWith("#t=") ? parsed.hash.slice(3) : null)

    const base = `https://www.youtube.com/embed/${youtubeId}`
    return timestamp ? `${base}?start=${timestamp}` : base
  } catch {
    return `https://www.youtube.com/embed/${youtubeId}`
  }
}

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.96_0.02_27.3/0.55),transparent_36%),radial-gradient(circle_at_bottom_right,oklch(0.54_0.21_27.3/0.12),transparent_32%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-6">
          <div className="mt-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Public video references
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Video Catalog
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Community compiled list of videos relevant to the investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6 py-14">
        {VIDEO_SECTIONS.map((section) => (
          <div key={section.heading} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {section.videos.length > 0
                  ? ""
                  : "No entries have been added in this category yet."}
              </p>
            </div>

            {section.videos.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.videos.map((video) => (
                  <article
                    key={video.url}
                    className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                  >
                    <div className="bg-black">
                      {video.youtubeId ? (
                        <div className="aspect-video">
                          <iframe
                            title={video.title}
                            className="h-full w-full"
                            src={getEmbedSrc(video.url, video.youtubeId) ?? undefined}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,oklch(0.2_0.01_285),oklch(0.32_0.03_285),oklch(0.18_0.01_285))] p-8 text-center">
                          <div className="max-w-sm">
                            <PlayCircle className="mx-auto size-14 text-primary" />
                            <p className="mt-4 text-sm leading-relaxed text-zinc-200">
                              This reference is cited in the BAM timeline but is linked here as a YouTube
                              search because the exact upload ID is not listed in the local source material.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-4 p-5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          {video.tag}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {video.date}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-balance">
                          {video.title}
                        </h3>
                        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {video.description}
                        </p>
                      </div>

                      {/* <div className="pt-1">
                        <Button asChild className="w-full">
                          <a href={video.url} target="_blank" rel="noreferrer">
                            Open on YouTube
                            <ExternalLink className="size-4" />
                          </a>
                        </Button>
                      </div> */}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6 text-sm text-muted-foreground">
                This category is reserved for future additions.
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
