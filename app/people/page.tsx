import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PEOPLE } from "@/lib/hub-data"

export const metadata = {
  title: "People | Salem Brick Trials",
  description: "Key people and organizations referenced throughout Salem Brick Trials.",
}

function getInitials(name: string) {
  const cleaned = name.replace(/\(.*?\)/g, "").trim()
  const words = cleaned.split(/[\s&]+/).filter(Boolean)
  if (words.length === 0) return "?"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export default function PeoplePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Key people
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            People & Companies Involved
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            The individuals and organizations referenced throughout the documents, summaries, and
            timeline of events.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h2 className="font-semibold leading-tight">{person.name}</h2>
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
    </main>
  )
}
