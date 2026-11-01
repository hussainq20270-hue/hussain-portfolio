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
  whatsappNumber: '923706074588',
  whatsappDisplay: '0370 6074588',
  whatsappMessage: "Hi Hussain, I found your portfolio and I'd like to discuss a project.",
  email: 'hussainq20270@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61593445231493', // leave '' to hide
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
  name: 'Hussain Qamar',
  title: 'Web Designer & Software Developer',
  brand: 'HQ', // short logo text used in the navbar and favicon
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
  name: 'Hussain Qamar',
  tagline: 'Web Designer & Software Developer',
  intro:
    'I design and build fast, modern websites and custom software that help businesses look professional online and run smoother offline.',
  // Hero photo (in /public). Set photo to null to show no photo.
  photo: '/hussain-qamar-640.webp',
  photoMedium: '/hussain-qamar-480.webp',
  photoSmall: '/hussain-qamar-160.webp',
  photoBadges: ['Umrah & booking systems', 'Websites & Software'],
  primaryCta: 'Chat on WhatsApp',
  secondaryCta: 'See my work',
  // Small highlight numbers under the hero. Edit or remove.
  stats: [
    { value: '7+', label: 'Projects delivered' },
    { value: '100%', label: 'Responsive builds' },
    { value: '24h', label: 'Reply time' },
  ],
}

// ── Projects ──────────────────────────────────────────────────
// image:    put a screenshot in /public/projects/ and set e.g.
//           image: '/projects/luxury-store.webp'. Leave null for the placeholder.
// liveUrl:  website link. Leave '' to show "Live link coming soon".
// videoUrl: demo video (e.g. a Facebook reel). Leave '' to hide "Watch demo".
// features: 2-3 short bullet points. Leave [] to hide.
// mockup:   illustrated preview shown when image is null:
//           'travel' | 'invoice' | 'ac' | 'store' | 'taxi' | 'ledger' | 'arabic'
export const projects = [
  {
    title: 'Umrah & Travel Services',
    category: 'Travel · Booking system',
    description:
      'A complete website for Umrah and travel agencies: customers pick packages online and the agency runs everything from one admin panel.',
    features: ['Online package booking', 'Admin panel to manage bookings', 'Professional invoices in one click'],
    tech: ['React', 'Tailwind CSS', 'Admin Panel'],
    liveUrl: '',
    videoUrl: 'https://www.facebook.com/reel/1073621265622772/',
    mockup: 'travel',
    image: null,
  },
  {
    title: 'Hotel Booking & Invoice System',
    category: 'Software',
    description:
      'A smart system for travel businesses that handles hotel bookings and payments and creates invoices automatically, so there is no more manual paperwork.',
    features: ['Hotel booking records', 'Payment tracking', 'Automatic invoice generation'],
    tech: ['JavaScript', 'Database', 'PDF Invoices'],
    liveUrl: '',
    videoUrl: 'https://www.facebook.com/reel/1551642539344113/',
    mockup: 'invoice',
    image: null,
  },
  {
    title: 'Premium AC Services Website',
    category: 'Services',
    description:
      'A premium, modern website for an AC installation and repair business, designed to look trustworthy and turn visitors into service calls.',
    features: ['Premium, modern design', 'Service showcase', 'WhatsApp inquiry buttons'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '',
    videoUrl: 'https://www.facebook.com/reel/1604544121008514/',
    mockup: 'ac',
    image: null,
  },
  {
    title: 'Luxury Store',
    category: 'E-commerce',
    description:
      'An elegant online store with a premium look, smooth product browsing and a simple checkout flow.',
    features: [],
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'store',
    image: null,
  },
  {
    title: 'Elite Taxi Reservation',
    category: 'Booking',
    description:
      'A clean booking inquiry form that lets customers request a ride in seconds and sends details straight to the owner.',
    features: [],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://physicaltodigital.dev',
    videoUrl: '',
    mockup: 'taxi',
    image: null,
  },
  {
    title: 'Mobi Ledger',
    category: 'Software',
    description:
      'Management software for mobile shops: track stock, sales, repairs and customer balances in one place.',
    features: [],
    tech: ['JavaScript', 'Node.js', 'Database'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'ledger',
    image: null,
  },
  {
    title: 'Arabic Home Services',
    category: 'Services · RTL',
    description:
      'A right-to-left Arabic website for a home services company, built for easy booking on mobile.',
    features: [],
    tech: ['HTML', 'CSS', 'JavaScript', 'RTL'],
    liveUrl: '',
    videoUrl: '',
    mockup: 'arabic',
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
  // Photo in /public. Set to null to show a placeholder.
  photo: '/hussain-qamar-640.webp',
  photoSmall: '/hussain-qamar-400.webp',
  heading: 'I turn local businesses into brands people find, trust and buy from',
  paragraphs: [
    "I'm Hussain Qamar, a web designer and software developer from Pakistan. I build modern, mobile-first websites for shops, online stores, travel and Umrah agencies, taxi services and home-service companies, including Arabic (right-to-left) sites for clients in the Gulf.",
    'Every site I make has one job: bring you more customers. That means fast loading, a clean design that builds trust, and a clear WhatsApp or booking button on every page so visitors become inquiries.',
    "I also build custom software that makes day-to-day work easier. Mobi Ledger, for example, helps mobile shop owners manage stock, sales, repairs and customer balances in one place. You get honest fixed pricing, regular updates while I work, and support after launch.",
  ],
  highlights: [
    'Mobile-first, fast-loading websites',
    'English & Arabic (RTL) sites',
    'WhatsApp & booking integration',
    'Custom business software',
    'Honest, fixed pricing',
    'Support after launch',
  ],
}

// ── Contact section ───────────────────────────────────────────
export const contactSection = {
  heading: "Let's build something great",
  text: 'Tell me about your project. The quickest way to reach me is WhatsApp. I usually reply within a few hours.',
}
