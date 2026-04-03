// sections/Projects.jsx — Project cards with live demo & GitHub links
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiTag } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'

const PROJECTS = [
  {
    id: 1,
    title: 'FlexBid',
    tagline: 'Multi-platform marketplace — buy products & bid for services',
    description:
      'FlexBid is a unified platform that eliminates the need for multiple apps by combining e-commerce product purchasing with a dynamic service-request marketplace. Users can list products, request services, and engage in real-time bidding — all in one place.',
    category: 'Full Stack',
    accent: 'from-cyan-400 to-violet-600',
    features: [
      'Dual-mode marketplace: product listing + service requests',
      'Real-time bidding system with live auction updates',
      'Role-based auth: buyers, sellers & service providers',
      'Smart bid ranking & automated winner selection',
      'Order tracking and in-app notification system',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'WebSocket', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
    highlight: true,
  },
  {
    id: 2,
    title: 'DevCollab',
    tagline: 'Real-time collaborative project management for dev teams',
    description:
      'A full-stack project management tool built for software development teams. DevCollab features Kanban boards, sprint planning, GitHub PR integration, and real-time collaboration via WebSockets — bringing clarity to every sprint.',
    category: 'Full Stack',
    accent: 'from-violet-500 to-pink-600',
    features: [
      'Drag-and-drop Kanban boards with custom lanes',
      'Sprint planner with velocity tracking',
      'GitHub PR integration via Webhooks',
      'Real-time updates using WebSocket / STOMP',
      'Team analytics dashboard with burndown charts',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MongoDB', 'WebSocket', 'REST API', 'Docker'],
    github: 'https://github.com',
    live: '#',
    highlight: false,
  },
  {
    id: 3,
    title: 'ShopNest',
    tagline: 'Scalable e-commerce platform with microservices architecture',
    description:
      'ShopNest is a production-ready e-commerce backend built on microservices. It handles product catalog, inventory, orders, and payments independently — communicating through REST and async messaging for high resilience and scale.',
    category: 'Full Stack',
    accent: 'from-amber-400 to-orange-600',
    features: [
      'Microservices: catalog, inventory, orders, payments',
      'JWT + Spring Security for authentication',
      'Razorpay / Stripe payment gateway integration',
      'Redis caching for lightning-fast product queries',
      'Admin dashboard with sales analytics & reports',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Redis', 'Docker', 'AWS S3'],
    github: 'https://github.com',
    live: '#',
    highlight: false,
  },
]

/* ── Tech Badge ──────────────────────────────────────────────────────── */
function TechBadge({ name }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-body font-medium
      dark:bg-dark-surface bg-gray-100
      dark:text-gray-400 text-gray-600
      dark:border-dark-border border-gray-200 border">
      {name}
    </span>
  )
}

/* ── Project Card ────────────────────────────────────────────────────── */
function ProjectCard({ project, i }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12, duration: 0.55 }}
      className={`relative rounded-3xl overflow-hidden
        dark:bg-dark-card bg-white
        dark:border-dark-border border-light-border border
        transition-all duration-300
        hover:shadow-xl dark:hover:shadow-black/30
        ${project.highlight ? 'ring-1 ring-cyan-500/30' : ''}`}
    >
      {/* ── Gradient top bar ── */}
      <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

      {/* ── Highlight badge ── */}
      {project.highlight && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
          bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-sm">
          ★ Featured
        </div>
      )}

      <div className="p-6 md:p-7">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accent}
            flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0`}>
            {project.title[0]}
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest dark:text-gray-500 text-gray-400">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="font-body text-sm text-cyan-500 dark:text-cyan-400 font-medium mb-3">
          {project.tagline}
        </p>

        <p className="font-body text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features toggle */}
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 space-y-1.5 overflow-hidden"
            >
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs font-body dark:text-gray-400 text-gray-500">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(p => !p)}
          className="text-xs font-body text-cyan-500 dark:text-cyan-400 hover:underline mb-4 block"
        >
          {expanded ? '− Hide features' : '+ View features'}
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => <TechBadge key={t} name={t} />)}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold font-body text-white
              bg-gradient-to-r ${project.accent}
              hover:opacity-90 hover:shadow-lg
              transition-all duration-200`}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold font-body
              dark:bg-dark-surface bg-gray-100
              dark:border-dark-border border-gray-200 border
              dark:text-white text-gray-800
              hover:border-cyan-400/40 dark:hover:border-cyan-400/40
              hover:text-cyan-500 dark:hover:text-cyan-400
              transition-all duration-200"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden
        dark:bg-dark-surface bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-section px-6">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="Real-world applications built with modern stacks — from idea to deployment."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sm dark:text-gray-400 text-gray-500 mb-4">
            Want to see more? All my work is open source.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-body
              dark:bg-dark-card bg-gray-100
              dark:border-dark-border border-gray-200 border
              dark:text-white text-gray-800
              hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-400
              transition-all duration-200"
          >
            <FaGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
