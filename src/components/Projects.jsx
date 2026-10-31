import { m } from 'framer-motion'
import { ArrowUpRight, Check, ImageIcon, PlayCircle } from 'lucide-react'
import { projects } from '../data/content'
import ProjectMockup from './ProjectMockup'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Screenshot({ project, index }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        width="800"
        height="500"
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
    )
  }
  // Illustrated UI preview when no real screenshot exists
  if (project.mockup) return <ProjectMockup type={project.mockup} />
  // Plain placeholder as a last resort
  const hues = ['from-amber-500/30', 'from-sky-500/25', 'from-emerald-500/25', 'from-amber-400/25', 'from-indigo-500/25']
  return (
    <div
      className={`flex h-full w-full flex-col bg-gradient-to-br ${hues[index % hues.length]} to-navy-800 transition duration-500 group-hover:scale-105`}
    >
      <div className="flex gap-1.5 p-3">
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 text-white/60">
        <ImageIcon className="h-8 w-8" aria-hidden="true" />
        <span className="font-display text-sm">Screenshot coming soon</span>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built"
          text="Websites and software for real businesses: stores, bookings, travel and shop management."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <m.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                  <Screenshot project={p} index={i} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  {p.features?.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex-1" />
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-amber-400 transition hover:gap-2.5 hover:text-amber-300"
                      >
                        View live <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">: {p.title}</span>
                      </a>
                    )}
                    {p.videoUrl && (
                      <a
                        href={p.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-slate-200 transition hover:text-amber-300"
                      >
                        <PlayCircle className="h-4 w-4" /> Watch demo
                        <span className="sr-only">: {p.title}</span>
                      </a>
                    )}
                    {!p.liveUrl && !p.videoUrl && (
                      <span className="text-sm text-slate-400">Live link coming soon</span>
                    )}
                  </div>
                </div>
              </m.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
