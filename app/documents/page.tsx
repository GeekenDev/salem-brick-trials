import { ExternalLink, FileText, FolderOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DOCUMENTS, SITE } from "@/lib/hub-data"

export const metadata = {
  title: "Documents | Salem Brick Trials",
  description: "Primary documents and files related to Salem Brick Trials.",
}

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Source files
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                Documents
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Primary source materials are grouped by category below.
              </p>
            </div>

            {/* <Button asChild variant="outline" size="sm" className="w-fit">
              <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                <FolderOpen className="size-4" />
                Open full folder
                <ExternalLink className="size-4" />
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-14">
        {DOCUMENTS.map((category) => (
          <div key={category.category} className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{category.category}</h2>
              {category.category === "Court Cases" && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Credit: Thank you <a href="https://reddit.com/u/Enough-Possible-7807" target="_blank" rel="noreferrer">u/Enough-Possible-7807</a> for purchasing these records from the courts.
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <a
                  key={`${item.entity}-${item.title}-${item.date}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-accent"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                    <FileText className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{item.entity}</span>
                      {item.type && (
                        <span className="shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
                          {item.type}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.date}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground">{item.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
