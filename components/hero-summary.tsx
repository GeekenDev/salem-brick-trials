import { FolderOpen, ExternalLink, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE, SUMMARY } from "@/lib/hub-data"

export function HeroSummary() {
  return (
    <section id="top" className="border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Public Record · Updated {SITE.lastUpdated}
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {SITE.title}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {SITE.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
              <FolderOpen className="size-4" />
              Open the full document folder
              <ExternalLink className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#documents">Browse documents below</a>
          </Button>
        </div>
      </div>

      <div id="summary" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">{SUMMARY.heading}</h2>
          <div className="mt-5 max-w-3xl space-y-4">
            {SUMMARY.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-border bg-secondary p-4">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
            <p className="text-sm leading-relaxed text-muted-foreground">{SUMMARY.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
