import { HubHeader } from "@/components/hub-header"
import { HeroSummary } from "@/components/hero-summary"
import { TimelineSection } from "@/components/timeline-section"
import { DocumentsSection } from "@/components/documents-section"
import { LinksSection } from "@/components/links-section"
import { PeopleContact } from "@/components/people-contact"
import { SITE } from "@/lib/hub-data"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HubHeader />
      <HeroSummary />
      <TimelineSection />
      {/* <DocumentsSection /> */}
      <LinksSection />
      <PeopleContact />

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>{SITE.title}</p>
          <p>Independent public record · Updated {SITE.lastUpdated}</p>
        </div>
      </footer>
    </main>
  )
}
