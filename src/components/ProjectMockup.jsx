// Illustrated UI previews drawn with plain HTML/CSS (no image files, almost zero bytes).
// Used when a project has no real screenshot. Pick one with `mockup` in content.js:
// 'travel' | 'invoice' | 'ac' | 'store' | 'taxi' | 'ledger' | 'arabic'

const Bar = ({ w = 'w-full', c = 'bg-white/15', h = 'h-1.5' }) => <div className={`${h} ${w} rounded-full ${c}`} />

function Browser({ url, children, tint = 'from-navy-700 to-navy-900' }) {
  return (
    <div className={`flex h-full w-full flex-col bg-gradient-to-br ${tint}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 truncate rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/50">{url}</span>
      </div>
      <div className="relative flex-1 overflow-hidden p-3">{children}</div>
    </div>
  )
}

function Travel() {
  return (
    <Browser url="umrah-travel.com" tint="from-emerald-900/80 to-navy-900">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-amber-300">☾ Umrah Travel</span>
        <div className="flex gap-2"><Bar w="w-6" /><Bar w="w-6" /><Bar w="w-6" /></div>
      </div>
      <p className="mt-3 font-display text-sm font-bold leading-tight text-white">Book your Umrah<br />package online</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['Economy', 'Standard', 'Premium'].map((t, i) => (
          <div key={t} className={`rounded-md border p-1.5 ${i === 1 ? 'border-amber-400/70 bg-amber-400/10' : 'border-white/10 bg-white/5'}`}>
            <p className="text-[8px] text-white/70">{t}</p>
            <p className="text-[9px] font-bold text-white">{14 + i * 7} days</p>
            <div className="mt-1 rounded bg-amber-500 py-0.5 text-center text-[7px] font-bold text-navy-950">Book</div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

function Invoice() {
  return (
    <Browser url="admin · invoices" tint="from-sky-900/70 to-navy-900">
      <div className="flex h-full gap-2">
        <div className="w-1/4 space-y-2 rounded-md bg-black/20 p-2">
          <Bar c="bg-amber-400/80" /><Bar w="w-3/4" /><Bar w="w-2/3" /><Bar w="w-3/4" />
        </div>
        <div className="flex-1 rounded-md bg-white p-2 text-navy-950">
          <div className="flex justify-between">
            <span className="text-[9px] font-bold">INVOICE #1042</span>
            <span className="rounded bg-emerald-500 px-1 text-[7px] font-bold text-white">PAID</span>
          </div>
          {['Hotel: Makkah, 5 nights', 'Hotel: Madinah, 4 nights', 'Transport'].map((r) => (
            <div key={r} className="mt-1.5 flex justify-between border-b border-slate-200 pb-1 text-[7px]">
              <span>{r}</span><span className="h-1.5 w-6 rounded bg-slate-300" />
            </div>
          ))}
          <div className="mt-2 flex justify-between text-[8px] font-bold"><span>Total</span><span>SAR ••••</span></div>
        </div>
      </div>
    </Browser>
  )
}

function Ac() {
  return (
    <Browser url="premium-ac.com" tint="from-cyan-900/70 to-navy-900">
      <div className="grid h-full grid-cols-2 items-center gap-3">
        <div>
          <span className="text-[8px] font-semibold uppercase tracking-wider text-cyan-300">AC Installation & Repair</span>
          <p className="mt-1 font-display text-sm font-bold leading-tight text-white">Stay cool all summer</p>
          <div className="mt-2 space-y-1"><Bar w="w-5/6" /><Bar w="w-2/3" /></div>
          <div className="mt-3 inline-block rounded-full bg-amber-500 px-2 py-1 text-[8px] font-bold text-navy-950">Book a service</div>
        </div>
        <div className="relative mx-auto w-full max-w-[110px]">
          <div className="rounded-lg border border-white/30 bg-white/90 p-2 shadow-lg">
            <div className="h-5 rounded bg-slate-200" />
            <div className="mt-1.5 flex gap-0.5">{[...Array(8)].map((_, i) => <div key={i} className="h-1 flex-1 rounded bg-slate-400" />)}</div>
          </div>
          <div className="mt-2 flex justify-center gap-2 text-cyan-300">
            <span className="text-xs">❄</span><span className="text-xs">❄</span><span className="text-xs">❄</span>
          </div>
        </div>
      </div>
    </Browser>
  )
}

function Store() {
  return (
    <Browser url="luxury-store.com" tint="from-amber-900/50 to-navy-950">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-bold tracking-[0.25em] text-amber-300">LUXE</span>
        <span className="rounded-full bg-white/10 px-1.5 text-[8px] text-white/70">🛒 2</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['from-amber-300/40', 'from-rose-300/30', 'from-slate-200/30'].map((g, i) => (
          <div key={i} className="rounded-md bg-white/5 p-1">
            <div className={`aspect-square rounded bg-gradient-to-br ${g} to-transparent`} />
            <div className="mt-1 space-y-1"><Bar w="w-3/4" /><Bar w="w-1/3" c="bg-amber-400/70" /></div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

function Taxi() {
  return (
    <Browser url="physicaltodigital.dev" tint="from-yellow-900/40 to-navy-900">
      <div className="mx-auto max-w-[75%] rounded-lg border border-white/10 bg-navy-950/70 p-2.5">
        <p className="text-[10px] font-bold text-white">🚖 Book your ride</p>
        {['Pickup location', 'Drop-off location', 'Date & time'].map((f) => (
          <div key={f} className="mt-1.5 rounded border border-white/15 bg-white/5 px-1.5 py-1 text-[7px] text-white/50">{f}</div>
        ))}
        <div className="mt-2 rounded bg-amber-500 py-1 text-center text-[8px] font-bold text-navy-950">Send inquiry</div>
      </div>
    </Browser>
  )
}

function Ledger() {
  const bars = [40, 65, 50, 80, 60, 90, 75]
  return (
    <Browser url="Mobi Ledger · Dashboard" tint="from-indigo-900/60 to-navy-900">
      <div className="grid grid-cols-3 gap-2">
        {[['Sales', 'text-emerald-300'], ['Stock', 'text-amber-300'], ['Repairs', 'text-sky-300']].map(([l, c]) => (
          <div key={l} className="rounded-md bg-white/5 p-1.5">
            <p className="text-[7px] text-white/60">{l}</p>
            <p className={`text-[10px] font-bold ${c}`}>●●●</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-14 items-end gap-1.5 rounded-md bg-white/5 p-2">
        {bars.map((h, i) => <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-gradient-to-t from-amber-500 to-amber-300" />)}
      </div>
    </Browser>
  )
}

function Arabic() {
  return (
    <Browser url="home-services.sa" tint="from-teal-900/60 to-navy-900">
      <div dir="rtl" className="text-right">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-amber-300">خدمات منزلية</span>
          <div className="flex gap-2"><Bar w="w-6" /><Bar w="w-6" /></div>
        </div>
        <p className="mt-2 text-sm font-bold text-white">خدمات منزلية احترافية</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {['تكييف', 'سباكة', 'كهرباء', 'تنظيف'].map((s) => (
            <div key={s} className="rounded-md bg-white/10 py-1.5 text-center text-[8px] text-white">{s}</div>
          ))}
        </div>
        <div className="mt-2 inline-block rounded-full bg-amber-500 px-2 py-1 text-[8px] font-bold text-navy-950">احجز الآن</div>
      </div>
    </Browser>
  )
}

const variants = { travel: Travel, invoice: Invoice, ac: Ac, store: Store, taxi: Taxi, ledger: Ledger, arabic: Arabic }

export default function ProjectMockup({ type }) {
  const V = variants[type]
  if (!V) return null
  return (
    <div aria-hidden="true" className="h-full w-full select-none transition duration-500 group-hover:scale-105">
      <V />
    </div>
  )
}
