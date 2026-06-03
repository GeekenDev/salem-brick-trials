import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink, FileText, ShieldAlert, type LucideIcon } from "lucide-react"
import { BLOG_POSTS, SOURCE_PDF_URL } from "@/lib/blog-data"
import { SITE } from "@/lib/hub-data"

export const metadata: Metadata = {
  title: "Blog | Salem Brick Trials",
  description: "A blog-style reading of the BAM Franchising 2026 FDD red flags and disclosures.",
}

const severityStyles: Record<string, string> = {
  Major: "border-red-500/30 bg-red-500/10 text-red-200",
  Significant: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  Notable: "border-sky-500/30 bg-sky-500/10 text-sky-200",
}

const sectionStyles: Record<string, string> = {
  Major: "from-red-500/15 to-transparent",
  Significant: "from-amber-500/15 to-transparent",
  Notable: "from-sky-500/15 to-transparent",
}

const sectionIcons: Record<string, LucideIcon> = {
  AlertTriangle: ShieldAlert,
  AlertCircle: FileText,
  Info: FileText,
}

export default function BlogPage() {
  const post = BLOG_POSTS[0]

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.88))]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:px-5 lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-2 rounded-full bg-red-400" />
              Blog archive
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Featured entry
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {post.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {post.summary}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur sm:p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Summary
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {post.overview.map((item, index) => (
                  <p
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="hidden size-1.5 rounded-full bg-muted-foreground/50 sm:inline-block" />
              <span>{SITE.name}</span>
              <span className="hidden size-1.5 rounded-full bg-muted-foreground/50 sm:inline-block" />
              <a
                href={SOURCE_PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground"
              >
                Source document
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              On this page
            </p>
            <nav className="mt-4 grid gap-2">
              {post.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-secondary/40 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <span>{section.label}</span>
                  <ArrowRight className="size-4" />
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-5 lg:py-16">
        <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-12">
            {post.sections.map((section) => {
              const Icon = sectionIcons[section.icon] ?? FileText
              return (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className={`mb-5 rounded-2xl border border-border bg-gradient-to-r ${sectionStyles[section.label] ?? "from-secondary/50 to-transparent"} p-5`}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-background/70 text-muted-foreground">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {section.label} findings
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {section.flags.map((flag) => (
                      <article
                        key={flag.title}
                        className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                      >
                        <div className="flex flex-wrap items-start gap-3">
                          <span
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${severityStyles[flag.severity]}`}
                          >
                            {flag.severity}
                          </span>
                          <h3 className="max-w-3xl text-lg font-semibold leading-snug text-balance">
                            {flag.title}
                          </h3>
                        </div>
                        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {flag.body}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {flag.sources.map((source) => (
                            <a
                              key={source.label}
                              href={`${SOURCE_PDF_URL}#page=${source.page}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {source.label}
                            </a>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Entry details
              </p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  Title: <span className="text-foreground">{post.title}</span>
                </p>
                <p>
                  Published: <span className="text-foreground">{post.date}</span>
                </p>
                <p>{post.sourceNote}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Related
              </p>
              <div className="mt-4 grid gap-3 text-sm">
                <Link
                  href="/"
                  className="rounded-lg border border-border px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Back to home
                </Link>
                <a
                  href="https://drive.proton.me/urls/7S5XSPWJF4#rQxnVZe5sUVc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-border px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Open source folder
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </aside>
        </article>
      </section>
    </main>
  )
}
