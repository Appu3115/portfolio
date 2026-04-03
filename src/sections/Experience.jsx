// sections/Experience.jsx — Timeline-based experience section
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiBriefcase, HiStar } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'

const EXPERIENCES = [
  {
    id: 1,
    type: 'education',
    icon: HiAcademicCap,
    title: 'Bachelor of Technology / Engineering',
    org: 'University / College Name',
    period: '2020 – 2024',
    location: 'India',
    accent: 'from-cyan-400 to-blue-500',
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-400',
    desc: 'Pursued a degree in Computer Science / Information Technology with a focus on software engineering, data structures, and web development. Consistently maintained strong academic performance while building practical skills through projects.',
    tags: ['Data Structures', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  },
  {
    id: 2,
    type: 'project',
    icon: HiCode,
    title: 'Full Stack Developer — Project Intern',
    org: 'Self-Initiated / Academic Project',
    period: 'Jan 2024 – Apr 2024',
    location: 'Remote',
    accent: 'from-violet-500 to-purple-700',
    accentText: 'text-violet-400',
    accentBorder: 'border-violet-400',
    desc: 'Designed and developed FlexBid — a full-stack marketplace application with bidding functionality. Independently architected the backend REST APIs using Spring Boot, built a React frontend, and deployed the solution end-to-end.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'REST APIs'],
  },
  {
    id: 3,
    type: 'project',
    icon: HiBriefcase,
    title: 'Backend Developer — Freelance / Internship',
    org: 'Startup / Personal Client',
    period: 'Jun 2023 – Sep 2023',
    location: 'Remote',
    accent: 'from-amber-400 to-orange-500',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-400',
    desc: 'Worked on backend development for a small e-commerce platform. Responsibilities included designing RESTful APIs, implementing authentication with Spring Security + JWT, database schema design with MySQL, and writing unit tests.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'JUnit', 'Postman'],
  },
  {
    id: 4,
    type: 'achievement',
    icon: HiStar,
    title: 'Open Source Contributor & DSA Practitioner',
    org: 'GitHub / LeetCode / HackerRank',
    period: '2022 – Present',
    location: 'Online',
    accent: 'from-emerald-400 to-teal-600',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-400',
    desc: 'Actively solving Data Structures & Algorithms problems on LeetCode and HackerRank. Contributing to open-source repositories and maintaining personal projects on GitHub with clean commit histories and documentation.',
    tags: ['DSA', 'LeetCode', 'Open Source', 'Problem Solving', 'Git'],
  },
]

/* ── Timeline Item ───────────────────────────────────────────────────── */
function TimelineItem({ exp, i, isLast }) {
  const Icon = exp.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.55 }}
      className={`relative flex gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row'}`}
    >
      {/* ── Timeline line & dot ── */}
      <div className="flex flex-col items-center">
        {/* Icon dot */}
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.accent}
          flex items-center justify-center text-white shadow-lg flex-shrink-0 z-10`}>
          <Icon size={16} />
        </div>
        {/* Connector line */}
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 timeline-line opacity-30 rounded-full min-h-[40px]" />
        )}
      </div>

      {/* ── Card ── */}
      <div className={`flex-1 pb-10 ${isLast ? 'pb-0' : ''}`}>
        <motion.div
          whileHover={{ y: -3 }}
          className={`p-5 rounded-2xl
            dark:bg-dark-card bg-white
            dark:border-dark-border border-light-border border
            hover:border-cyan-500/30 dark:hover:border-cyan-500/30
            transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/20`}
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-[11px] font-bold uppercase tracking-widest ${exp.accentText}`}>
              {exp.type === 'education' ? '🎓 Education' :
               exp.type === 'project' ? '💻 Experience' : '⭐ Achievement'}
            </span>
            <span className="text-[11px] dark:text-gray-500 text-gray-400">•</span>
            <span className="text-[11px] font-body dark:text-gray-500 text-gray-400">
              {exp.period}
            </span>
            <span className="text-[11px] dark:text-gray-500 text-gray-400">•</span>
            <span className="text-[11px] font-body dark:text-gray-500 text-gray-400">
              {exp.location}
            </span>
          </div>

          <h3 className="font-display font-bold text-base dark:text-white text-gray-900 mb-0.5">
            {exp.title}
          </h3>
          <p className={`font-body text-sm font-medium ${exp.accentText} mb-3`}>
            {exp.org}
          </p>
          <p className="font-body text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4">
            {exp.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium
                  dark:bg-dark-surface bg-gray-100
                  dark:text-gray-400 text-gray-600
                  dark:border-dark-border border-gray-200 border"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden
        dark:bg-dark-bg bg-light-bg"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-section px-6">
        <SectionHeading
          label="My Journey"
          title="Experience & Education"
          subtitle="From classrooms to real-world projects — here's how I've grown as a developer."
        />

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              i={i}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>

        {/* Fresher note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-2xl mx-auto p-5 rounded-2xl text-center
            bg-gradient-to-br from-cyan-500/5 to-violet-500/5
            dark:border-dark-border border-light-border border"
        >
          <p className="font-body text-sm dark:text-gray-400 text-gray-600">
            🚀 <strong className="dark:text-white text-gray-900">Fresher / Entry-Level</strong> — I'm at the exciting start of my professional journey,
            bringing strong fundamentals, real project experience, and an eagerness to grow fast in a collaborative team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
