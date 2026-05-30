import { FolderOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/hub-data"

const NAV = [
  { label: "Summary", href: "#summary" },
  { label: "Timeline", href: "#timeline" },
  // { label: "Documents", href: "#documents" },
  { label: "People", href: "#people" },
  { label: "Contact", href: "#contact" },
]

export function HubHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FolderOpen className="size-4" />
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Section navigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm">
          <a href="https://www.youtube.com/watch?v=wscQpkcwgNU" target="_blank" rel="noreferrer">
            Watch Part 1
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </header>
  )
}
