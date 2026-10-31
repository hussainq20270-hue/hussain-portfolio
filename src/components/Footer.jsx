import { contact, site } from '../data/content'
import FacebookIcon from './FacebookIcon'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        {contact.facebook && (
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 transition hover:text-amber-300"
          >
            <FacebookIcon className="h-4 w-4" /> Facebook
          </a>
        )}
        <a href="#top" className="inline-flex min-h-11 items-center transition hover:text-amber-300">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
