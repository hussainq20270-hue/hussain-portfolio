import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  MonitorSmartphone,
  Palette,
  PenTool,
  Search,
  Server,
  Sparkles,
  Wind,
} from 'lucide-react'
import { skills } from '../data/content'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

// Optional icon per skill (matched by lowercase keyword). Unknown skills get a sparkle.
const iconMap = [
  ['html', FileCode2],
  ['css', Layers],
  ['tailwind', Wind],
  ['javascript', Braces],
  ['react', Code2],
  ['node', Server],
  ['wordpress', Globe],
  ['figma', PenTool],
  ['responsive', MonitorSmartphone],
  ['ui', Palette],
  ['seo', Search],
  ['git', GitBranch],
]
const iconFor = (name) => iconMap.find(([k]) => name.toLowerCase().includes(k))?.[1] ?? Sparkles

export default function Skills() {
  const grid = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // fromTo with explicit end values: the tiles have CSS hover transitions
        gsap.fromTo('[data-skill]', { opacity: 0, y: 40, scale: 0.85 }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          clearProps: 'transform,opacity',
          ease: 'back.out(1.6)',
          stagger: { each: 0.06, grid: 'auto', from: 'start' },
          scrollTrigger: { trigger: grid.current, start: 'top 85%', once: true },
        })
      })
    }, grid)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="section bg-navy-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          text="The languages, frameworks and design tools I use to bring projects to life."
        />
        <ul ref={grid} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((name) => {
            const Icon = iconFor(name)
            return (
              <li
                key={name}
                data-skill
                className="card group flex items-center gap-3 p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-navy-800 sm:p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-800 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-navy-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 text-sm font-medium text-slate-200 sm:text-base">{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
