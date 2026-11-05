import { m } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { contact, contactSection, whatsappLink } from '../data/content'
import Reveal from './Reveal'
import FacebookIcon from './FacebookIcon'
import WhatsAppIcon from './WhatsAppIcon'

export default function Contact() {
  const methods = [
    {
      label: 'WhatsApp',
      value: contact.whatsappDisplay,
      href: whatsappLink,
      Icon: WhatsAppIcon,
      external: true,
      hint: 'Fastest reply',
    },
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      Icon: Mail,
      external: false,
      hint: 'For detailed briefs',
    },
    contact.facebook && {
      label: 'Facebook',
      value: contact.facebookLabel,
      href: contact.facebook,
      Icon: FacebookIcon,
      external: true,
      hint: 'See my latest work',
    },
  ].filter(Boolean)

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-5 py-14 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Contact</p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">{contactSection.heading}</h2>
            <p className="mt-4 text-slate-400">{contactSection.text}</p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {methods.map(({ label, value, href, Icon, external, hint }) => (
              <m.a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                whileHover={{ y: -4 }}
                className="card group flex min-w-0 items-center gap-3 p-4 transition-colors hover:border-amber-400/50 sm:gap-4 sm:p-5 lg:gap-3 lg:p-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-500 text-navy-950 lg:h-11 lg:w-11">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    {label}
                    <span className="hidden sm:inline lg:hidden"> · {hint}</span>
                  </span>
                  <span className="block truncate text-sm font-semibold text-white group-hover:text-amber-300 sm:text-base">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 sm:block lg:hidden text-slate-400 transition group-hover:text-amber-400" />
              </m.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
