// components/Navbar.jsx — Sticky navbar with smooth scroll, mobile menu, theme toggle
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  // ── Scroll detection ──────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Highlight active section based on scroll position
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Close mobile menu on resize ───────────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'dark:glass-dark glass-light shadow-lg shadow-black/10 dark:shadow-black/40'
            : 'bg-transparent'
        }`}
        style={scrolled ? {
          background: darkMode
            ? 'rgba(8, 8, 15, 0.85)'
            : 'rgba(244, 244, 248, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: darkMode
            ? '1px solid rgba(255,255,255,0.05)'
            : '1px solid rgba(0,0,0,0.06)',
        } : {}}
      >
        <nav className="max-section px-6 h-16 flex items-center justify-between">
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="text-gradient-cyan">Appu</span>
            <span className="dark:text-white text-gray-900"> M</span>
            <span className="ml-1 w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse-slow" />
          </a>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200
                    ${active === href.replace('#', '')
                      ? 'text-cyan-400 active'
                      : 'dark:text-gray-300 text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400'
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center
                dark:bg-dark-surface bg-white
                dark:border-dark-border border-gray-200 border
                dark:text-gray-300 text-gray-600
                hover:text-cyan-500 dark:hover:text-cyan-400
                hover:border-cyan-500/40 transition-all duration-200"
            >
              <motion.div
                key={darkMode ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {darkMode ? <HiSun size={16} /> : <HiMoon size={16} />}
              </motion.div>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold font-body
                bg-gradient-to-r from-cyan-500 to-violet-600
                text-white shadow-cyan-glow
                hover:shadow-[0_0_25px_rgba(0,212,255,0.45)]
                hover:scale-105 transition-all duration-200 active:scale-100"
            >
              Hire Me
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center
                dark:text-gray-300 text-gray-600 hover:text-cyan-500
                transition-colors duration-200"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-72
              dark:bg-dark-surface bg-white
              shadow-2xl border-l dark:border-dark-border border-gray-100"
          >
            <div className="flex flex-col h-full pt-20 px-8 pb-8">
              <nav className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.button
                    key={label}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(href)}
                    className={`text-left px-4 py-3 rounded-xl font-body font-medium text-base
                      transition-all duration-200
                      ${active === href.replace('#', '')
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-card hover:text-cyan-500 dark:hover:text-cyan-400'
                      }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); setMobileOpen(false) }}
                className="w-full py-3 rounded-2xl text-center font-semibold
                  bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
