/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  Edit everything on the website from this one file.
 *  You never need to touch the components to change text,
 *  projects, prices, skills or contact details.
 * ─────────────────────────────────────────────────────────────
 */

// ── Contact details ───────────────────────────────────────────
// `whatsappNumber` must be in international format, digits only
// (Pakistan = 92, then the number without the leading 0).
export const contact = {
  whatsappNumber: '923026009977',
  whatsappDisplay: '0302 6009977',
  whatsappMessage: "Hi Asjad, I found your portfolio and I'd like to discuss a project.",
  email: 'asjadrehman977@gmail.com',
  facebook: '', // paste your Facebook page link here to show it, leave '' to hide
  facebookLabel: 'Web Development services',
  location: 'Pakistan · Available worldwide (remote)', // placeholder, edit me
}

// Built automatically from the values above. No need to edit.
export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`

// ── Site / SEO ────────────────────────────────────────────────
// (The <title> and meta tags in index.html should match these.)
export const site = {
  name: 'Asjad Rehman',
  title: 'Website & Software Developer',
  brand: 'AR', // short logo text used in the navbar and favicon
}

// ── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm",
  name: 'Asjad Rehman',
  tagline: 'Website & Software Developer',
  intro:
    'I design and build fast, modern websites and custom software that help businesses look professional online and run smoother offline.',
  // Hero photo (in /public). TEMPORARY placeholder images: replace the
  // asjad-rehman-*.webp files with your real photo. Set photo to null to hide.
  photo: '/asjad-rehman-640.webp',
  photoMedium: '/asjad-rehman-480.webp',
  photoSmall: '/asjad-rehman-160.webp',
  photoBadges: ['Business websites', 'Custom software'],
  primaryCta: 'Chat on WhatsApp',
  secondaryCta: 'See my work',
  // Small highlight numbers under the hero. Edit or remove.
  stats: [
    { value: '5+', label: 'Projects delivered' },
    { value: '100%', label: 'Responsive builds' },
    { value: '24h', label: 'Reply time' },
  ],
}

// ── Projects ──────────────────────────────────────────────────
// TEMPORARY sample projects: replace them with your own work.
// image:    put a screenshot in /public/projects/ and set e.g.
//           image: '/projects/my-store.webp'. Leave null for the illustrated preview.
// liveUrl:  website link. Leave '' to show "Live link coming soon".
// videoUrl: demo video (e.g. a Facebook reel or YouTube link). Leave '' to hide "Watch demo".
// features: 2-3 short bullet points. Leave [] to hide.
// mockup:   illustrated preview shown when image is null:
//           'travel' | 'invoice' | 'ac' | 'store' | 'taxi' | 'ledger' | 'arabic'
export const projects = [
  {
    title: 'Online Store Website',
    category: 'E-commerce',
    description:
      'A modern online store with product pages, a smooth shopping cart and WhatsApp ordering, built to look great on every phone.',
    features: ['Product catalogue & cart', 'WhatsApp order button', 'Fast, mobile-first design'],
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'store',
    image: null,
  },
  {
    title: 'Billing & Invoice Software',
    category: 'Software',
    description:
      'Software for small businesses to create invoices, record payments and see daily sales reports without any paperwork.',
    features: ['One-click invoices', 'Payment records', 'Daily & monthly reports'],
    tech: ['JavaScript', 'Node.js', 'Database'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'invoice',
    image: null,
  },
  {
    title: 'Travel Agency Website',
    category: 'Travel · Booking',
    description:
      'A booking website for a travel agency where customers browse packages and send inquiries straight to the owner.',
    features: ['Package listings', 'Online inquiry form', 'Admin panel'],
    tech: ['React', 'Tailwind CSS', 'Admin Panel'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'travel',
    image: null,
  },
  {
    title: 'Home Services Website',
    category: 'Services',
    description:
      'A clean, trustworthy website for a repair and maintenance business that turns visitors into service calls.',
    features: [],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'ac',
    image: null,
  },
  {
    title: 'Shop Management System',
    category: 'Software',
    description:
      'Stock, sales and customer balance management for retail shops, all in one simple dashboard.',
    features: [],
    tech: ['JavaScript', 'Node.js', 'Database'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'ledger',
    image: null,
  },
]

// ── Services & pricing ────────────────────────────────────────
export const services = [
  {
    name: 'Landing Page Website',
    icon: 'layout', // one of: layout, code, rocket (see Services.jsx)
    price: 'PKR 25,000',
    pricePrefix: 'From',
    note: 'Up to 4 pages',
    description: 'A modern, mobile-friendly website that presents your business and brings in customers.',
    features: [
      'Up to 4 pages (e.g. Home, About, Services, Contact)',
      'Responsive design for phones, tablets and desktops',
      'WhatsApp & contact form integration',
      'Basic SEO setup and fast loading',
    ],
    highlighted: false,
  },
  {
    name: 'Custom Software',
    icon: 'code',
    price: 'PKR 50,000',
    pricePrefix: 'From',
    note: 'Final price depends on the software',
    description: 'Software built around how your business actually works: inventory, billing, bookings and more.',
    features: [
      'Requirements discussion & planning',
      'Custom dashboard and reports',
      'Inventory, sales or booking management',
      'Training and support after delivery',
    ],
    highlighted: true,
  },
]

// ── Skills ────────────────────────────────────────────────────
// Placeholder skills: add, remove or rename freely.
export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'WordPress',
  'Figma',
  'Responsive Design',
  'UI / UX',
  'SEO Basics',
  'Git & GitHub',
]

// ── About ─────────────────────────────────────────────────────
export const about = {
  // Photo in /public (TEMPORARY placeholder). Set to null to show an icon instead.
  photo: '/asjad-rehman-640.webp',
  photoSmall: '/asjad-rehman-400.webp',
  heading: 'I build websites and software that help businesses grow',
  paragraphs: [
    "I'm Asjad Rehman, a website and software developer from Pakistan. I build modern, mobile-first websites for shops, online stores, service companies and startups.",
    'Every website I make is fast, clean and easy to use, with a clear WhatsApp or contact button so visitors turn into real customers.',
    'I also build custom software that makes daily work easier: billing, inventory, bookings and reports. You get honest pricing, regular updates while I work, and support after launch.',
  ],
  highlights: [
    'Mobile-first, fast-loading websites',
    'Custom business software',
    'WhatsApp & contact integration',
    'Clean, modern design',
    'Honest, fixed pricing',
    'Support after launch',
  ],
}

// ── Contact section ───────────────────────────────────────────
export const contactSection = {
  heading: "Let's build something great",
  text: 'Tell me about your project. The quickest way to reach me is WhatsApp. I usually reply within a few hours.',
}
