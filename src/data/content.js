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
// image: put a screenshot in /public/projects/ and set e.g.
//        image: '/projects/luxury-store.webp'
//        Leave as null to show the styled placeholder.
// liveUrl: leave as '' to show "Link coming soon".
export const projects = [
  {
    title: 'Luxury Store',
    category: 'E-commerce',
    description:
      'An elegant online store with a premium look, smooth product browsing and a simple checkout flow.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '',
    image: null,
  },
  {
    title: 'Elite Taxi Reservation',
    category: 'Booking',
    description:
      'A clean booking inquiry form that lets customers request a ride in seconds and sends details straight to the owner.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://physicaltodigital.dev',
    image: null,
  },
  {
    title: 'Mobi Ledger',
    category: 'Software',
    description:
      'Management software for mobile shops: track stock, sales, repairs and customer balances in one place.',
    tech: ['JavaScript', 'Node.js', 'Database'],
    liveUrl: '',
    image: null,
  },
  {
    title: 'Umrah & Travel Services',
    category: 'Travel',
    description:
      'A trustworthy website for an Umrah and travel agency, showcasing packages and turning visitors into inquiries.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: '',
    image: null,
  },
  {
    title: 'Arabic Home Services',
    category: 'Services · RTL',
    description:
      'A right-to-left Arabic website for a home services company, built for easy booking on mobile.',
    tech: ['HTML', 'CSS', 'JavaScript', 'RTL'],
    liveUrl: '',
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
// Placeholder bio: replace with your own words.
export const about = {
  heading: 'A developer who cares about how it looks and how it works',
  paragraphs: [
    "I'm Hussain Qamar, a web designer and software developer. I help small businesses, shops, restaurants and travel agencies get online with websites that look great and load fast.",
    'Beyond websites, I build custom software, like shop management and booking tools, that saves my clients time every single day. Clear communication, honest pricing and on-time delivery are how I work.',
  ],
  highlights: ['Clean, modern design', 'Fast & mobile-first', 'Honest, fixed pricing', 'Support after launch'],
}

// ── Contact section ───────────────────────────────────────────
export const contactSection = {
  heading: "Let's build something great",
  text: 'Tell me about your project. The quickest way to reach me is WhatsApp. I usually reply within a few hours.',
}
