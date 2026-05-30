import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PEOPLE, CONTACT, SITE } from "@/lib/hub-data"

function getInitials(name: string) {
  const cleaned = name.replace(/\(.*?\)/g, "").trim()
  const words = cleaned.split(/[\s&]+/).filter(Boolean)
  if (words.length === 0) return "?"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function PeopleContact() {
  return (
    <>
      <section id="people" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Key People Involved</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The individuals and organizations referenced throughout these documents.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PEOPLE.map((person, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    {person.image ? (
                      <AvatarImage src={person.image || "/placeholder.svg"} alt={`Photo of ${person.name}`} />
                    ) : null}
                    <AvatarFallback className="bg-secondary text-xs font-medium text-muted-foreground">
                      {getInitials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold leading-tight">{person.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-accent-foreground">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-xl border border-border bg-background p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">{CONTACT.heading}</h2>
            <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {CONTACT.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="size-4" />
                  {CONTACT.email}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                  <FolderOpen className="size-4" />
                  Open document folder
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
