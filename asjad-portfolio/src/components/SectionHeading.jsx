import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-400">{text}</p>}
    </Reveal>
  )
}
