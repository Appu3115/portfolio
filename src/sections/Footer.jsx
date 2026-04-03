// sections/Footer.jsx — Footer with copyright and social links
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const SOCIALS = [
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/appu-m', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/Appu3115', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:appugandhi555@email.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/919597900174', label: 'WhatsApp' },
]

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative dark:bg-dark-bg bg-light-bg border-t dark:border-dark-border border-light-border">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-section px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* ── Brand ── */}
          <div>
            <div className="font-display font-bold text-2xl mb-3">
              <span className="text-gradient-cyan">Appu</span>
              <span className="dark:text-white text-gray-900"> M</span>
            </div>
            <p className="font-body text-sm dark:text-gray-500 text-gray-500 leading-relaxed max-w-xs">
              Java Full Stack Developer passionate about building scalable, elegant software
              that makes a real difference.
            </p>
          </div>

          {/* ── Nav Links ── */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest
              dark:text-gray-400 text-gray-500 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-1.5">
              {NAV.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="font-body text-sm dark:text-gray-500 text-gray-500
                      hover:text-cyan-500 dark:hover:text-cyan-400
                      transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Socials ── */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest
              dark:text-gray-400 text-gray-500 mb-4">Connect</h4>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center
                    dark:bg-dark-surface bg-gray-100
                    dark:border-dark-border border-gray-200 border
                    dark:text-gray-500 text-gray-500
                    hover:border-cyan-400/50 hover:text-cyan-400
                    dark:hover:border-cyan-400/50 dark:hover:text-cyan-400
                    transition-all duration-200"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-xs font-body dark:text-gray-600 text-gray-400">
              Open to work — Let's connect!
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 border-t dark:border-dark-border border-light-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs dark:text-gray-600 text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Appu M. All rights reserved.
          </p>
          <p className="font-body text-xs dark:text-gray-600 text-gray-400 flex items-center gap-1">
            Built with{' '}
            <HiHeart size={11} className="text-red-400 animate-pulse" />
            {' '}using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
