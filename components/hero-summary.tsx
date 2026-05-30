import { FolderOpen, ExternalLink, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE, SUMMARY } from "@/lib/hub-data"
import Image from "next/image"
import Link from "next/link"

export function HeroSummary() {
  return (
    <section id="top" className="relative border-b border-border bg-card overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Ben holding lego"
          src="https://img.youtube.com/vi/wscQpkcwgNU/maxresdefault.jpg"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content MUST be above background */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-20">
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
            <Link href="/bam-timeline">Read the BAM timeline</Link>
          </Button>
        </div>
      </div>

      {/* Summary stays normal flow */}
      <div id="summary" className="relative z-10 border-t border-border">
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
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SUMMARY.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
