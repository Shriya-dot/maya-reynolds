'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
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
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const bodyOverflow = document.body.style.overflow
    const documentOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = bodyOverflow
      document.documentElement.style.overflow = documentOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) menuButtonRef.current?.focus()
      wasOpen.current = false
      return
    }

    wasOpen.current = true
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-[999] transition-colors duration-300 ${
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
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            id="mobile-navigation"
            hidden={!open}
            className="fixed inset-0 z-[1000] overflow-y-auto bg-background lg:hidden"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="fixed top-4 right-5 z-[1001] inline-flex items-center justify-center rounded-md p-2 text-foreground sm:right-8 lg:right-12"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>
            <nav className="flex flex-col gap-3 px-6 pt-[104px] pb-8" aria-label="Mobile navigation">
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
          </div>,
          document.body,
        )}
    </header>
  )
}
