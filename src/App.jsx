// App.jsx — Root component with dark/light theme management
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import BackToTop from './components/BackToTop.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  // ── Theme State ──────────────────────────────────────────────────────────
  const [darkMode, setDarkMode] = useState(() => {
    // Persist theme across sessions
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Apply theme class to <html> for Tailwind dark mode
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('portfolio-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('portfolio-theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <div className="relative transition-colors duration-400">
      {/* ── Navigation ── */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* ── Main Content ── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Back to Top FAB ── */}
      <BackToTop />
    </div>
  )
}

export default App
