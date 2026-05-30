import { ArrowLeft, BookOpen, ExternalLink, ShieldAlert } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/hub-data"
import { getBamTimelineData } from "@/lib/bam-timeline"

export const metadata = {
  title: "BAM Timeline | Salem Brick Trials",
  description: "A visual timeline built from court filings with grouped claims, responses, and source references.",
}

const toneClasses: Record<string, string> = {
  bam: "border-primary/20 bg-primary/5 text-primary",
  response: "border-sky-500/20 bg-sky-500/5 text-sky-600 dark:text-sky-400",
  video: "border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-300",
  note: "border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300",
  neutral: "border-border bg-secondary text-muted-foreground",
}

export default async function BamTimelinePage() {
  const { intro, entries } = await getBamTimelineData()

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.96_0.02_27.3/0.45),transparent_35%),radial-gradient(circle_at_bottom_left,oklch(0.54_0.21_27.3/0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/">
                <ArrowLeft className="size-4" />
                Back home
              </Link>
            </Button>

            <Button asChild size="sm" className="w-fit">
              <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                <BookOpen className="size-4" />
                Open source folder
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Based on BAM's Legal Filings
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Bricks and Minifgs Side of The Story
            </h1>
            {/* <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              This page keeps the same chronological structure as the homepage timeline, but breaks
              each date into source-specific bullets so the claims, responses, and video references
              are easier to scan side by side.
            </p> */}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
            {/* <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
              <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>
            </div> */}

            <div className="rounded-2xl border border-border bg-secondary/60 p-5">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                <div>
                  <h2 className="font-semibold tracking-tight">Reading guide</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <li>BAM claims are labeled in red-tinted chips.</li>
                    <li>Chrystal and Benjamin responses are grouped separately.</li>
                    <li>Video references keep the source citations visible inline.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8">
            {entries.map((entry, index) => (
              <article key={`${entry.date}-${index}`} className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
                <div className="relative">
                  <div className="sticky top-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="font-mono text-xs uppercase tracking-[0.28em] text-accent-foreground">
                      {entry.date}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Entry {index + 1}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-5 top-6 hidden h-full w-px bg-border md:block" />
                  <div className="absolute -left-[1.46rem] top-6 hidden size-3 rounded-full bg-primary ring-4 ring-accent md:block" />

                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
                    <h2 className="text-xl font-semibold tracking-tight text-balance">
                      {entry.title}
                    </h2>

                    <ul className="mt-5 space-y-3">
                      {entry.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${entry.date}-${bulletIndex}`}
                          className="rounded-2xl border border-border/80 bg-background/80 p-4"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${toneClasses[bullet.tone]}`}
                            >
                              {bullet.label}
                            </span>
                          </div>
                          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                            {bullet.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
