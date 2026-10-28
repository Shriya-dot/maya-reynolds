'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Office', href: '#office' },
  { label: 'FAQs', href: '#faqs' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="group flex flex-col leading-none" aria-label="Dr. Maya Reynolds — home">
          <span className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-[28px]">
            Maya Reynolds
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-[11px]">
            Clinical Psychology
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-foreground/40 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden">
          <nav className="flex flex-col gap-3 px-6 py-8" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center border-b border-border py-4 text-lg font-medium uppercase tracking-[0.12em] text-foreground/90 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-14 items-center justify-center rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
