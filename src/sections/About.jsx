// sections/About.jsx — Professional summary and strength cards
import { motion } from 'framer-motion'
import {
  HiCode, HiChip, HiLightBulb, HiGlobeAlt,
} from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'
import resume from "../assets/Appu_M_Java_FullStack.pdf"
const STRENGTHS = [
  {
    icon: HiChip,
    title: 'Spring Boot Backend',
    desc: 'Building robust RESTful APIs and microservices with Java & Spring Boot. Focus on security, scalability, and clean architecture.',
    color: 'from-cyan-400 to-cyan-600',
    glow: 'hover:shadow-[0_4px_24px_rgba(0,212,255,0.25)]',
  },
  {
    icon: HiCode,
    title: 'React Frontend',
    desc: 'Crafting responsive, interactive UIs with React, Tailwind CSS, and modern JavaScript. Pixel-perfect implementation from design to code.',
    color: 'from-violet-500 to-purple-700',
    glow: 'hover:shadow-[0_4px_24px_rgba(139,92,246,0.25)]',
  },
  {
    icon: HiLightBulb,
    title: 'Problem Solving',
    desc: 'Strong foundation in Data Structures & Algorithms. Approaching every challenge with structured thinking and optimal solutions.',
    color: 'from-amber-400 to-orange-500',
    glow: 'hover:shadow-[0_4px_24px_rgba(255,149,0,0.25)]',
  },
  {
    icon: HiGlobeAlt,
    title: 'Real-World Applications',
    desc: 'Delivering end-to-end solutions — from database design to deployment — that solve genuine business problems at scale.',
    color: 'from-emerald-400 to-teal-600',
    glow: 'hover:shadow-[0_4px_24px_rgba(52,211,153,0.25)]',
  },
]

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '1+', label: 'Years Learning' },
  { value: '∞', label: 'Coffee Consumed' },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden
        dark:bg-dark-surface bg-white"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-section px-6">
        <SectionHeading
          label="Who I Am"
          title="About Me"
          subtitle="Passionate Java Full Stack Developer crafting digital experiences that matter."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-5">
              A developer who loves building{' '}
              <span className="text-gradient-cyan">meaningful products</span>
            </h3>
            <div className="space-y-4 font-body text-base dark:text-gray-400 text-gray-600 leading-relaxed">
              <p>
                I'm <strong className="dark:text-white text-gray-900 font-semibold">Appu M</strong>, a passionate Java Full Stack Developer with hands-on experience
                building real-world web applications. I love turning complex requirements into elegant,
                performant solutions that genuinely help users.
              </p>
              <p>
                My stack centers around <span className="dark:text-cyan-400 text-cyan-600 font-medium">Java & Spring Boot</span> for
                backend systems and <span className="dark:text-violet-400 text-violet-600 font-medium">React</span> for building
                modern, responsive frontends. I believe great software is born at the intersection of
                clean architecture and thoughtful user experience.
              </p>
              <p>
                When I'm not coding, I'm sharpening my DSA skills, exploring system design patterns,
                and staying current with the ever-evolving tech landscape. I'm actively seeking
                opportunities where I can grow, contribute, and help build something remarkable.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Status', value: 'Open to Work ✅' },
                { label: 'Focus', value: 'Java Full Stack Developer' },
                { label: 'Degree', value: 'Master of Computer Application(MCA)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-widest dark:text-gray-500 text-gray-400 mb-0.5">
                    {label}
                  </span>
                  <span className="text-sm font-medium dark:text-white text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href={resume}
              download="Appu_M_Java_FullStack.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-7 px-6 py-2.5 rounded-full text-sm font-semibold font-body
                border dark:border-gray-600 border-gray-300
                dark:text-white text-gray-800
                dark:hover:border-cyan-400 hover:border-cyan-500
                dark:hover:text-cyan-400 hover:text-cyan-500
                transition-all duration-200"
            >
              Download Resume ↓
            </motion.a>
          </motion.div>

          {/* ── Right: Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="p-6 rounded-2xl text-center
                  dark:bg-dark-card bg-light-card
                  dark:border-dark-border border-light-border border
                  hover:border-cyan-500/40 dark:hover:border-cyan-500/40
                  transition-all duration-300 group"
              >
                <div className="font-display font-bold text-4xl mb-1
                  text-gradient-cyan group-hover:scale-105 transition-transform duration-200">
                  {value}
                </div>
                <div className="text-xs font-body dark:text-gray-400 text-gray-500 uppercase tracking-wider">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Strengths Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRENGTHS.map(({ icon: Icon, title, desc, color, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`p-5 rounded-2xl skill-card
                dark:bg-dark-card bg-light-card
                dark:border-dark-border border-light-border border
                ${glow} transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color}
                flex items-center justify-center text-white mb-4 shadow-sm`}>
                <Icon size={20} />
              </div>
              <h4 className="font-display font-bold text-sm dark:text-white text-gray-900 mb-2">
                {title}
              </h4>
              <p className="font-body text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
