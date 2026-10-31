import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown, MapPin } from 'lucide-react'
import { contact, hero, whatsappLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Full entrance animation
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('[data-hero="badge"]', { y: 20, opacity: 0, duration: 0.6 })
          .from('[data-hero="char"]', { yPercent: 110, opacity: 0, stagger: 0.035, duration: 0.8 }, '-=0.3')
          .from('[data-hero="tagline"]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
          .from('[data-hero="intro"]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
          .fromTo(
            '[data-hero="cta"] > *',
            { y: 20, opacity: 0 },
            // explicit end values: the buttons have CSS transitions that would confuse a plain .from()
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, clearProps: 'transform,opacity' },
            '-=0.4',
          )
          .from('[data-hero="stat"]', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
          .from('[data-hero="visual"]', { x: 60, opacity: 0, rotate: 4, duration: 1 }, 0.4)
          .from('[data-hero="line"]', { scaleX: 0, transformOrigin: 'left', stagger: 0.07, duration: 0.5 }, 0.9)

        gsap.to('[data-hero="blob"]', {
          y: 30,
          x: 20,
          duration: 6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 1.5,
        })
      })

      // Reduced motion: a single quick fade, nothing moves
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('[data-hero="content"]', { opacity: 0, duration: 0.3 })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Split the name into words → letters, keeping words together on wrap
  const words = hero.name.split(' ')

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div data-hero="blob" className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div data-hero="blob" className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl" />
      </div>

      <div data-hero="content" className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            data-hero="badge"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Available for new projects
          </p>

          <p className="font-display text-lg text-slate-400">{hero.greeting}</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="sr-only">{hero.name}</span>
            <span aria-hidden="true">
              {words.map((word, wi) => (
                <span key={wi} className="mr-[0.25em] inline-block overflow-hidden whitespace-nowrap pb-1 last:mr-0">
                  {word.split('').map((ch, ci) => (
                    <span
                      key={ci}
                      data-hero="char"
                      className={`inline-block ${wi === words.length - 1 ? 'text-amber-400' : ''}`}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <p data-hero="tagline" className="mt-4 font-display text-xl font-medium text-slate-200 sm:text-2xl">
            {hero.tagline}
          </p>
          <p data-hero="intro" className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {hero.intro}
          </p>

          <div data-hero="cta" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              <WhatsAppIcon /> {hero.primaryCta}
            </a>
            <a href="#projects" className="btn-ghost">
              {hero.secondaryCta} <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {hero.stats.map((s) => (
              <div key={s.label} data-hero="stat">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
                <dd className="text-xs text-slate-400 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-amber-400" /> {contact.location}
          </p>
        </div>

        {/* Decorative code window (desktop only) */}
        <div data-hero="visual" aria-hidden="true" className="relative hidden lg:block">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 to-navy-600/20 blur-2xl" />
          <div className="card relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-slate-500">your-business.com</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm">
              {[
                ['w-3/4', 'bg-amber-400/70'],
                ['w-1/2', 'bg-slate-500/50'],
                ['w-5/6', 'bg-navy-600'],
                ['w-2/3', 'bg-slate-500/50'],
                ['w-1/3', 'bg-amber-400/40'],
                ['w-4/5', 'bg-navy-600'],
              ].map(([w, c], i) => (
                <div key={i} data-hero="line" className={`h-3 rounded-full ${w} ${c}`} />
              ))}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-20 rounded-xl border border-white/10 bg-navy-800" />
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <span className="rounded-full bg-amber-500 px-4 py-1.5 text-xs font-semibold text-navy-950">
                  Book now →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
