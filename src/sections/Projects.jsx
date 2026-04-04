// sections/Projects.jsx — Project cards with live demo & GitHub links
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading.jsx'

const PROJECTS = [
  {
    id: 1,
    title: 'FlexBid',
    tagline: 'Real-time Auction and Reverse Bidding E-commerce Platform',
    description:
      'FlexBid is a unified platform that eliminates the need for multiple apps by combining e-commerce product purchasing with a dynamic service-request marketplace. Users can list products, request services, and engage in real-time bidding — all in one place.',
    category: 'Full Stack',
    accent: 'from-cyan-400 to-violet-600',
    features: [
      'Dual-mode marketplace: product listing + service requests',
      'Real-time bidding system with live WebSocket updates',
      'Role-based auth: Buyer, Seller & Admin via Spring Security & Role-Based Access',
      'SMTP email notifications for bids, orders & updates',
      'Admin dashboard for platform oversight & user management',
      'Smart bid ranking & automated winner selection',
      'Order tracking and in-app notification system',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'WebSocket', 'Spring Security', 'SMTP', 'CSS3', 'Hibernate','JPA'],
    github: 'https://github.com/Appu3115',
    live: '#',
    highlight: true,
  },
{
  id: 2,
  title: 'E-Commerce Website',
  tagline: 'Full-stack shopping platform with cart, wishlist & order tracking',
  description:
    'A full-featured e-commerce application that enables users to browse products, manage cart and wishlist, place orders, and track order status in real time. Designed with a responsive UI and a robust Spring Boot backend ensuring smooth and secure user experience.',
  
  category: 'Full Stack',
  accent: 'from-amber-400 to-orange-500',

  features: [
    'Product listing with search and category-based filtering',
    'Shopping cart management with add/remove/update functionality',
    'Wishlist feature for saving preferred products',
    'Secure user authentication and profile management',
    'Order placement with dynamic status updates (Placed, Shipped, Delivered)',
    'Order tracking system with detailed order history',
    'Admin controls for managing products and orders',
  ],

  tech: [
    'Java',
    'Spring Boot',
    'Hibernate',
    'JPA',
    'React',
    'MySQL',
    'CSS3'
  ],

  github: 'https://github.com/Appu3115',
  live: '#',
  highlight: false,
},
 {
  id: 3,
  title: 'Attendance Management System',
  tagline: 'Real-time employee tracking with attendance, productivity & leave management',

  description:
    'A real-time employee management system designed for organizations to track attendance, work activity, and productivity. The platform supports QR-based attendance, live work tracking using WebSockets, and comprehensive leave management — improving workforce visibility and operational efficiency.',

  category: 'Full Stack',
  accent: 'from-green-400 to-teal-600',

  features: [
    'QR-based attendance with secure punch-in / punch-out system',
    'Real-time work tracking (productive vs idle time) using WebSockets',
    'Employee dashboard with attendance, work logs, and performance insights',
    'Leave management system with requests, approvals, and status updates',
    'Leave balance tracking (Sick Leave, Casual Leave, etc.)',
    'Automated email notifications for leave status and attendance alerts (SMTP)',
    'Admin panel for managing employees, roles, holidays, and policies',
    'Employee profile management including personal and medical details',
  ],

  tech: [
    'Java',
    'Spring Boot',
    'Hibernate',
    'JPA',
    'React',
    'MySQL',
    'WebSockets',
    'JWT',
    'SMTP',
    'CSS3'
  ],

  github: 'https://github.com/Appu3115',
  live: '#',
  highlight: true,
},
  {
    id: 4,
    title: 'Exam Result Portal',
    tagline: 'Secure portal for publishing and viewing exam results',
    description:
      'An online exam result portal that allows institutions to publish results and students to securely view their scores. Designed with role-based access for admins and students, featuring a clean result display and GPA calculation.',
    category: 'Full Stack',
    accent: 'from-violet-500 to-pink-500',
    features: [
      'Admin can upload and publish results by batch/semester',
      'Students can view subject-wise marks and GPA',
      'Secure login with role-based access control',
      'Result download as PDF',
      'Topper leaderboard per semester',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    github: 'https://github.com/Appu3115',
    live: '#',
    highlight: false,
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    tagline: 'Developer portfolio showcasing skills, projects & experience',
    description:
      'A personal portfolio website built to showcase projects, technical skills, and professional experience. Features a modern dark-mode UI with smooth animations, responsive design, and sections for work, skills, and contact.',
    category: 'Frontend',
    accent: 'from-sky-400 to-blue-600',
    features: [
      'Responsive design with dark/light mode toggle',
      'Animated hero, skills, and project sections',
      'Downloadable resume integration',
      'Contact form with email integration',
      'Optimised for performance and SEO',
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Appu3115',
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
            href="https://github.com/Appu3115"
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
