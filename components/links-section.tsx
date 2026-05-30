import { ExternalLink, Heart, ListIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LINKS } from "@/lib/hub-data"

export function LinksSection() {
  return (
    <section id="links" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Ways to Help</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Support links related to the situation. Each opens in a new tab.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {LINKS.map((link) => (
            <div
              key={link.url}
              className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6"
            >
              {/* <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                {}
                <Heart className="size-5" />
              </span> */}
              <div className="flex-1">
                <h3 className="font-semibold leading-snug text-balance">{link.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{link.description}</p>
              </div>
              <Button asChild className="w-full sm:w-fit">
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.cta}
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
