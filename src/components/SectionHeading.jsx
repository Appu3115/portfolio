// components/SectionHeading.jsx — Reusable section title component
import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      {/* ── Overline Label ── */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block font-display text-xs font-semibold tracking-[0.25em] uppercase
          text-cyan-500 dark:text-cyan-400 mb-3"
      >
        {label}
      </motion.span>

      {/* ── Main Title ── */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl
          dark:text-white text-gray-900 leading-tight"
      >
        {title}
      </motion.h2>

      {/* ── Decorative Line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-4 mb-5 h-1 w-16 rounded-full
          bg-gradient-to-r from-cyan-400 to-violet-500"
      />

      {/* ── Subtitle ── */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-xl mx-auto font-body text-base dark:text-gray-400 text-gray-500 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
