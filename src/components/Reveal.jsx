import { m } from 'framer-motion'

// Fades + slides children in when they scroll into view.
// MotionConfig reducedMotion="user" (main.jsx) removes the movement when the OS asks for it.
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
