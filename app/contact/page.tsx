import { FolderOpen, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CONTACT, SITE } from "@/lib/hub-data"

export const metadata = {
  title: "Contact | Salem Brick Trials",
  description: "How to submit information or get in touch with Salem Brick Trials.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Submit information
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            If you have additional documentation, corrections, or context to share, use the contact
            details below.
          </p>
        </div>
      </section>

      <section className="bg-card">
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
              {/* <Button asChild variant="outline">
                <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                  <FolderOpen className="size-4" />
                  Open document folder
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
