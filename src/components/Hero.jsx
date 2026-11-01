import { Fragment, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown, Code2, MapPin, Rocket } from 'lucide-react'
import { contact, hero, whatsappLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

// 1x1 transparent GIF used as the <img> fallback so hidden pictures cost nothing
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Full entrance animation
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Short, overlapping timeline so the text is readable quickly (good for LCP).
        // The intro paragraph only slides (no fade) so the browser counts it as painted immediately.
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('[data-hero="badge"]', { y: 16, opacity: 0, duration: 0.5 })
          .from('[data-hero="char"]', { yPercent: 110, opacity: 0, stagger: 0.025, duration: 0.6 }, 0.1)
          .from('[data-hero="tagline"]', { y: 20, opacity: 0, duration: 0.6 }, 0.3)
          .from('[data-hero="intro"]', { y: 20, duration: 0.6 }, 0.35)
          .fromTo(
            '[data-hero="cta"] > *',
            { y: 20, opacity: 0 },
            // explicit end values: the buttons have CSS transitions that would confuse a plain .from()
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, clearProps: 'transform,opacity' },
            0.45,
          )
          .from('[data-hero="stat"]', { y: 16, opacity: 0, stagger: 0.08, duration: 0.5 }, 0.6)
          .from('[data-hero="visual"]', { x: 40, scale: 0.92, duration: 0.9 }, 0.2) // no fade: the photo is the LCP image
          .from('[data-hero="chip"]', { y: 16, opacity: 0, stagger: 0.12, duration: 0.5 }, 0.7)

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
        <div className="hero-blob absolute -left-32 top-10 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="hero-blob absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl [animation-delay:-3s]" />
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

          <p className="flex items-center gap-3 font-display text-lg text-slate-400">
            {hero.photo && (
              // <picture> + media query: phones download the small avatar, desktops download nothing
              <picture className="lg:hidden">
                <source media="(max-width: 1023px)" srcSet={hero.photoSmall} />
                <img
                  src={BLANK}
                  alt=""
                  width="56"
                  height="56"
                  decoding="async"
                  className="h-14 w-14 rounded-full border-2 border-amber-400 object-cover shadow-lg shadow-amber-500/20"
                />
              </picture>
            )}
            {hero.greeting}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="sr-only">{hero.name}</span>
            <span aria-hidden="true">
              {words.map((word, wi) => (
                <Fragment key={wi}>
                {/* a real space between words so copied/indexed text reads "Hussain Qamar" */}
                {wi > 0 && ' '}
                <span className="inline-block overflow-hidden whitespace-nowrap pb-1">
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
                </Fragment>
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
              <div key={s.label} data-hero="stat" className="flex flex-col-reverse">
                {/* label first in the markup (read once by screen readers), shown under the value */}
                <dt className="text-xs text-slate-400 sm:text-sm">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-amber-400" /> {contact.location}
          </p>
        </div>

        {/* Photo (desktop). On phones a small avatar sits next to the greeting instead. */}
        {hero.photo && (
          <div data-hero="visual" className="relative hidden lg:block">
            <div aria-hidden="true" className="absolute inset-6 rounded-full bg-gradient-to-br from-amber-500/30 to-navy-600/40 blur-3xl" />
            <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
              <div aria-hidden="true" className="hero-spin absolute -inset-4 rounded-full border-2 border-dashed border-amber-400/35" />
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-amber-400 via-amber-500/40 to-navy-600 p-1">
                {/* Only desktops (where this block is visible) download the large photo */}
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${hero.photoMedium} 480w, ${hero.photo} 640w`}
                    sizes="416px"
                  />
                <img
                  src={BLANK}
                  alt={`${hero.name}, ${hero.tagline}`}
                  width="640"
                  height="640"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full rounded-full border-4 border-navy-950 object-cover"
                />
                </picture>
              </div>
              {hero.photoBadges?.[0] && (
                <div data-hero="chip" className="hero-blob absolute -left-12 bottom-24 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-500 text-navy-950">
                    <Rocket className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white">{hero.photoBadges[0]}</span>
                </div>
              )}
              {hero.photoBadges?.[1] && (
                <div data-hero="chip" className="hero-blob absolute -right-2 -bottom-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-3s]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-700 text-amber-400">
                    <Code2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white">{hero.photoBadges[1]}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
