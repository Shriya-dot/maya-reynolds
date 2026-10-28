import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Office', href: '#office' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-medium text-foreground">Maya Reynolds</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Clinical Psychology
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              Therapy for adults navigating anxiety, trauma, and burnout&mdash;in Santa Monica and across California
              via telehealth.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground">Explore</p>
            <ul className="mt-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground">Contact</p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>123th Street 45 W, Santa Monica, CA 90401</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:hello@mayareynoldspsyd.com" className="transition-colors hover:text-primary">
                  hello@mayareynoldspsyd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="tel:+13105551200" className="transition-colors hover:text-primary">
                  (310) 555-1200
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>Licensed Clinical Psychologist &middot; State of California</p>
            <a
              href="#top"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border px-4 font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span>Back to top</span>
              <ArrowUp className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
