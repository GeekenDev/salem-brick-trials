import { ExternalLink, FileText, FolderOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DOCUMENTS, SITE } from "@/lib/hub-data"
import Link from "next/link"

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
              </p><br/>
              <p>
                Credit: <Link href="https://www.reddit.com/r/RecklessBen/comments/1tpl2l7/compilation_of_all_resources/" target="_blank"> Compilation of all resources
</Link> 
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

            <div className="grid gap-4">
              {category.items.map((item) => (
                <a
                  key={`${item.entity}-${item.title}-${item.date}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <FileText className="size-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-foreground">{item.entity}</span>
                        {item.type && (
                          <span className="shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
                            {item.type}
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {item.date}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-balance">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
