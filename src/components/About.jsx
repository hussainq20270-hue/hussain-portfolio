import { CheckCircle2, User } from 'lucide-react'
import { about, site } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section overflow-x-clip">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="mx-auto w-full max-w-[18rem] sm:max-w-sm">
          {about.photo ? (
            <div className="relative mx-auto aspect-square w-full">
              {/* Amber + navy rings */}
              <div aria-hidden="true" className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-400/40" />
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-amber-400 via-amber-500/40 to-navy-600 p-1">
              <img
                src={about.photo}
                srcSet={`${about.photoSmall} 400w, ${about.photo} 640w`}
                sizes="(min-width: 640px) 384px, 288px"
                alt={`Portrait of ${site.name}`}
                width="640"
                height="640"
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-full border-4 border-navy-950 object-cover shadow-2xl shadow-amber-500/10"
              />
              </div>
              <span className="absolute bottom-3 right-2 rounded-full border border-amber-400/40 bg-navy-900/90 px-3 py-1.5 text-xs font-semibold text-amber-300 shadow-lg backdrop-blur sm:bottom-6 sm:right-4">
                {site.title.split(' & ')[0]}
              </span>
            </div>
          ) : (
            <div className="card relative grid aspect-[4/5] place-items-center bg-gradient-to-br from-navy-700 to-navy-900">
              <div className="flex flex-col items-center gap-3 text-slate-400">
                <User className="h-16 w-16" aria-hidden="true" />
                <span className="font-display text-lg font-semibold text-white">{site.name}</span>
              </div>
            </div>
          )}
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              About me
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{about.heading}</h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <p className="mt-5 leading-relaxed text-slate-400">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
