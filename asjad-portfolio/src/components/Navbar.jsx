import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, site, whatsappLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Section to scroll to once the mobile menu has finished closing.
  // (Scrolling while the menu animates shut cancels smooth scrolling on phones.)
  const pendingTarget = useRef(null)

  const goTo = (e, href) => {
    e.preventDefault()
    pendingTarget.current = href
    setOpen(false)
  }

  const scrollToPending = () => {
    const href = pendingTarget.current
    pendingTarget.current = null
    const el = href && document.querySelector(href)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', href)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-navy-950/85 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-500 text-sm text-navy-950">
            {site.brand}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-amber-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-amber-400 md:inline-flex md:items-center md:gap-2"
        >
          <WhatsAppIcon className="h-4 w-4" /> Let's talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence onExitComplete={scrollToPending}>
        {open && (
          <m.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-x overflow-hidden md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => goTo(e, l.href)}
                  className="block border-t border-white/5 py-3 font-medium text-slate-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </li>
          </m.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
