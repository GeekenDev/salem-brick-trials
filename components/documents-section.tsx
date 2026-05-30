import { FileText, ExternalLink, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DOCUMENTS, SITE } from "@/lib/hub-data"

export function DocumentsSection() {
  return (
    <section id="documents" className="border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Documents & Files</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Primary source materials. Links open the shared Proton Drive folder where each file lives.
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
              <FolderOpen className="size-4" />
              Open full folder
            </a>
          </Button>
        </div>

        <div className="mt-8 space-y-10">
          {DOCUMENTS.map((cat) => (
            <div key={cat.category}>
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {cat.category}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {cat.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                        <FileText className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate font-medium">{item.name}</span>
                          {item.type && (
                            <span className="shrink-0 rounded border border-border px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
                              {item.type}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
