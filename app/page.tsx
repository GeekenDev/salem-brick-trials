import { HeroSummary } from "@/components/hero-summary"
import { TimelineSection } from "@/components/timeline-section"
import { LinksSection } from "@/components/links-section"
import { PeopleContact } from "@/components/people-contact"
import { SITE } from "@/lib/hub-data"
import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSummary />
      <TimelineSection />
      {/* <DocumentsSection /> */}
      <LinksSection />
      <PeopleContact />

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>{SITE.title}</p>
          <p>Created by <Link href="https://x.com/geeken" style={{ color: "lightblue" }}>@Geeken</Link></p>
        </div>
      </footer>
    </main>
  )
}
