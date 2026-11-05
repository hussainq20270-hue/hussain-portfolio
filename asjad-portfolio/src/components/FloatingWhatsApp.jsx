import { m } from 'framer-motion'
import { whatsappLink } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

// Always-visible WhatsApp button, bottom-right on every screen size.
export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact">
    <m.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Asjad on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-navy-950 opacity-0 shadow transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </m.a>
    </aside>
  )
}
