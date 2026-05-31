"use client"

import { FolderOpen, ExternalLink, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/hub-data"
import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV = [
  { label: "Summary", href: "/#summary" },
  { label: "Timeline", href: "/#timeline" },
  { label: "BAM Timeline", href: "/bam-timeline" },
  { label: "Videos", href: "/videos" },
  // { label: "Documents", href: "#documents" },
  { label: "People", href: "/#people" },
  { label: "Contact", href: "/#contact" },
]

export function HubHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FolderOpen className="size-4" />
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Section navigation">
          {NAV.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button asChild size="sm">
              <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                Open source folder
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[86vw] max-w-sm px-0">
                <SheetHeader className="border-b border-border px-6 pb-4 pt-6">
                  <SheetTitle className="flex items-center gap-2 font-mono text-sm">
                    <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <FolderOpen className="size-4" />
                    </span>
                    {SITE.name}
                  </SheetTitle>
                  <SheetDescription className="text-left">
                    Quick access to the main sections and video pages.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-1 flex-col gap-6 px-6 py-6">
                  <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                    {NAV.map((item) =>
                      item.href.startsWith("/") ? (
                        <SheetClose key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ) : (
                        <SheetClose key={item.href} asChild>
                          <a
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      ),
                    )}
                  </nav>

                  <div className="mt-auto grid gap-3 border-t border-border pt-6">
                    <Button asChild className="w-full">
                      <a href={SITE.driveUrl} target="_blank" rel="noreferrer">
                        <FolderOpen className="size-4" />
                        Open source folder
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
