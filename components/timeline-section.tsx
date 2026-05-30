import { TIMELINE } from "@/lib/hub-data"

export function TimelineSection() {
  return (
    <section id="timeline" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Timeline of Events</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A chronological record of key developments. Refer to the documents section for source material.
        </p>

        <ol className="mt-8 max-w-3xl">
          {TIMELINE.map((entry, i) => (
            <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1 flex size-3 shrink-0 rounded-full bg-primary ring-4 ring-accent" />
                {i < TIMELINE.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <div className="-mt-1 pb-2">
                <span className="font-mono text-xs uppercase tracking-wide text-accent-foreground">
                  {entry.date}
                </span>
                <h3 className="mt-1 text-base font-semibold tracking-tight">{entry.title}</h3>
                <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
