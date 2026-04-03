// sections/Skills.jsx — Grouped skills with animated progress bars and tech cards
import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaDocker,
  FaGitAlt, FaGithub, FaAws, FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript, SiTailwindcss, SiSpringboot, SiMysql,
  SiMongodb, SiPostman, SiVercel,
} from 'react-icons/si'
import { HiCode, HiServer, HiDatabase, HiCog, HiAcademicCap } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: HiCode,
    color: 'from-cyan-400 to-blue-500',
    textColor: 'text-cyan-400',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJsSquare, level: 80, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 65, color: '#3178C6' },
      { name: 'React.js', icon: FaReact, level: 80, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 82, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend',
    icon: HiServer,
    color: 'from-violet-500 to-purple-700',
    textColor: 'text-violet-400',
    skills: [
      { name: 'Java', icon: FaJava, level: 88, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, level: 82, color: '#6DB33F' },
      { name: 'REST APIs', icon: HiServer, level: 85, color: '#00d4ff' },
    ],
  },
  {
    category: 'Database',
    icon: HiDatabase,
    color: 'from-amber-400 to-orange-500',
    textColor: 'text-amber-400',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47A248' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: HiCog,
    color: 'from-emerald-400 to-teal-600',
    textColor: 'text-emerald-400',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 82, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, level: 82, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, level: 78, color: '#FF6C37' },
      { name: 'Docker', icon: FaDocker, level: 55, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, level: 50, color: '#FF9900' },
      { name: 'Vercel / Netlify', icon: SiVercel, level: 72, color: '#ffffff' },
    ],
  },
  {
    category: 'CS Fundamentals',
    icon: HiAcademicCap,
    color: 'from-rose-400 to-pink-600',
    textColor: 'text-rose-400',
    skills: [
      { name: 'DSA', icon: HiAcademicCap, level: 75, color: '#f43f5e' },
      { name: 'OOP', icon: HiCode, level: 88, color: '#8b5cf6' },
    ],
  },
]

/* ── Skill Progress Bar ───────────────────────────────────────────────── */
function SkillBar({ name, level, color, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon size={14} style={{ color }} className="flex-shrink-0" />
          <span className="font-body text-sm font-medium dark:text-gray-300 text-gray-700">
            {name}
          </span>
        </div>
        <span className="font-display font-bold text-xs dark:text-gray-500 text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full dark:bg-dark-border bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </motion.div>
  )
}

/* ── Skill Group Card ─────────────────────────────────────────────────── */
function SkillGroup({ category, icon: CatIcon, color, textColor, skills }, i) {
  return (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="p-6 rounded-2xl
        dark:bg-dark-card bg-white
        dark:border-dark-border border-light-border border
        hover:border-cyan-500/30 dark:hover:border-cyan-500/30
        transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/20"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color}
          flex items-center justify-center text-white shadow-sm`}>
          <CatIcon size={16} />
        </div>
        <h3 className={`font-display font-bold text-sm uppercase tracking-wider ${textColor}`}>
          {category}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {skills.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden
        dark:bg-dark-bg bg-light-bg"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-section px-6">
        <SectionHeading
          label="My Arsenal"
          title="Skills & Technologies"
          subtitle="A curated toolkit of languages, frameworks, and platforms I use to build great software."
        />

        {/* Masonry-style responsive grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => SkillGroup(group, i))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'MongoDB',
            'Docker', 'AWS', 'Git', 'REST APIs', 'Tailwind CSS', 'Postman', 'DSA', 'OOP'].map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.07, y: -2 }}
              className="px-3 py-1 rounded-full text-xs font-body font-medium
                dark:bg-dark-surface bg-gray-100
                dark:text-gray-400 text-gray-600
                dark:border-dark-border border-gray-200 border
                hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400
                transition-all duration-200 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
