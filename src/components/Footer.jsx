import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <a href="#top" className="transition hover:text-amber-300">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
