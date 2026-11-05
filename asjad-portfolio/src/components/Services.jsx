import { m } from 'framer-motion'
import { Check, Code2, LayoutTemplate, Rocket } from 'lucide-react'
import { services, whatsappLink } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import WhatsAppIcon from './WhatsAppIcon'

const icons = { layout: LayoutTemplate, code: Code2, rocket: Rocket }

export default function Services() {
  return (
    <section id="services" className="section relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Services & pricing"
          title="Simple, honest pricing"
          text="Clear starting prices with no hidden costs. Message me for an exact quote."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Code2
            return (
              <Reveal key={s.name} delay={i * 0.15}>
                <m.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`card relative flex h-full flex-col p-8 transition-colors hover:border-amber-400/40 ${
                    s.highlighted ? 'border-amber-400/40 bg-gradient-to-b from-navy-800 to-navy-900' : ''
                  }`}
                >
                  {s.highlighted && (
                    <span className="absolute -top-3 right-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-navy-950">
                      Most requested
                    </span>
                  )}
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500/15 text-amber-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.description}</p>

                  <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-sm text-slate-400">{s.pricePrefix}</span>
                    <span className="font-display text-4xl font-bold text-white">{s.price}</span>
                  </p>
                  <p className="mt-1 text-sm font-medium text-amber-300">{s.note}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 ${s.highlighted ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Get a quote
                  </a>
                </m.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
