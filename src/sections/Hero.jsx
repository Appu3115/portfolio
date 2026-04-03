// sections/Hero.jsx — Hero section with animated intro, profile image, and CTAs
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLinkedinIn, FaGithub, FaEnvelope,
} from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profile from "../assets/profile.jpeg"
import resume from "../assets/Appu_M_Java_FullStack.pdf"
/* ── Typewriter Hook ──────────────────────────────────────────────────── */
const ROLES = [
  'Java Full Stack Developer',
  'Spring Boot Engineer',
  'React Developer',
  'Problem Solver',
]
function useTypewriter(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = texts[idx]
    let timeout
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timeout = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2)
      } else {
        setIdx((prev) => (prev + 1) % texts.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, typing, idx, texts, speed, pause])

  return display
}

/* ── Floating Orb Background ─────────────────────────────────────────── */
function Orb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-[80px] opacity-20 pointer-events-none ${className}`}
    />
  )
}

/* ── Social Link ─────────────────────────────────────────────────────── */
function SocialLink({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="w-10 h-10 rounded-full flex items-center justify-center
        dark:bg-dark-surface bg-white
        dark:border-dark-border border-gray-200 border
        dark:text-gray-400 text-gray-500
        hover:border-cyan-400 hover:text-cyan-400
        dark:hover:border-cyan-400 dark:hover:text-cyan-400
        transition-colors duration-200 shadow-sm"
    >
      <Icon size={16} />
    </motion.a>
  )
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Stagger container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
        dark:bg-dark-bg bg-light-bg"
    >
      {/* ── Decorative background orbs ── */}
      <Orb className="w-[500px] h-[500px] bg-cyan-400 top-[-100px] right-[-150px]" />
      <Orb className="w-[400px] h-[400px] bg-violet-600 bottom-[-80px] left-[-100px]" />
      <Orb className="w-[300px] h-[300px] bg-amber-400 top-[40%] left-[45%]" />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-section w-full px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                dark:bg-cyan-400/10 bg-cyan-50
                dark:text-cyan-400 text-cyan-600
                dark:border-cyan-400/20 border-cyan-200 border mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.h1 variants={item} className="font-display font-bold leading-none mb-4">
              <span className="block text-4xl md:text-6xl lg:text-7xl dark:text-white text-gray-900 mb-2">
                Hi, I'm
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl text-gradient-cyan">
                Appu M
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div variants={item} className="mb-5 h-10 flex items-center justify-center lg:justify-start">
              <span className="font-display font-semibold text-xl md:text-2xl dark:text-gray-300 text-gray-600">
                {role}
                <span className="animate-blink ml-0.5 text-cyan-400">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item}
              className="font-body text-base md:text-lg dark:text-gray-400 text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building{' '}
              <span className="dark:text-white text-gray-800 font-medium">scalable, high-performance</span>{' '}
              web applications with Java & Spring Boot on the backend, React on the frontend —
              turning complex problems into elegant digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {/* Download CV */}
                          <motion.a
  href={resume}
  download="Appu_M_Java_FullStack.pdf"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="px-7 py-3 rounded-full font-body font-semibold text-sm
    dark:bg-transparent bg-white
    border dark:border-gray-600 border-gray-300
    dark:text-white text-gray-800
    dark:hover:border-cyan-400 hover:border-cyan-500
    dark:hover:text-cyan-400 hover:text-cyan-500
    transition-all duration-200"
>
  Download Resume ↓
</motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll('#projects')}
                className="px-7 py-3 rounded-full font-body font-semibold text-sm
                  bg-gradient-to-r from-cyan-500 to-violet-600 text-white
                  shadow-[0_4px_24px_rgba(0,212,255,0.35)]
                  hover:shadow-[0_4px_32px_rgba(0,212,255,0.55)]
                  transition-shadow duration-200"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll('#contact')}
                className="px-7 py-3 rounded-full font-body font-semibold text-sm
                  dark:bg-transparent bg-white
                  dark:border-gray-600 border-gray-300 border
                  dark:text-white text-gray-800
                  dark:hover:border-cyan-400 hover:border-cyan-500
                  dark:hover:text-cyan-400 hover:text-cyan-500
                  transition-all duration-200"
              >
                Hire Me →
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex gap-3 justify-center lg:justify-start">
              <SocialLink href="https://www.linkedin.com/in/appu-m/" icon={FaLinkedinIn} label="LinkedIn" />
              <SocialLink href="https://github.com/Appu3115" icon={FaGithub} label="GitHub" />
              <SocialLink href="mailto:appugandhi555@gmail.com" icon={FaEnvelope} label="Email" />
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full
                bg-gradient-to-tr from-cyan-400 via-violet-500 to-amber-400
                blur-[3px] opacity-40 animate-spin-slow" />

              {/* Image border ring */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full
                bg-gradient-to-tr from-cyan-400 to-violet-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden
                  dark:bg-dark-surface bg-gray-100
                  flex items-center justify-center">
                  {/*
                    ┌─────────────────────────────────────────────────────┐
                    │  REPLACE WITH YOUR ACTUAL PHOTO                     │
                    │  1. Add your photo to src/assets/profile.jpg        │
                    │  2. Import it: import profileImg from '../assets/profile.jpg' │
                    │  3. Replace the div below with:                     │
                    │     <img src={profileImg} alt="Appu M"              │
                    │       className="w-full h-full object-cover"        │
                    │     />                                              │
                    └─────────────────────────────────────────────────────┘
                  */}
                  {/* <div className="flex flex-col items-center justify-center w-full h-full
                    dark:bg-gradient-to-br dark:from-dark-card dark:to-dark-surface
                    bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="w-20 h-20 rounded-full
                      bg-gradient-to-br from-cyan-400 to-violet-600
                      flex items-center justify-center mb-3 text-3xl font-display font-bold text-white">
                      AM
                    </div>
                    <span className="text-xs dark:text-gray-500 text-gray-400 font-body">
                      Replace with photo
                    </span>
                  </div> */}
                  <img 
                    src={profile} 
                    alt="Appu M" 
                    className="w-full h-full object-cover object-[50%_30%] [image-rendering:auto]"
                  />
                </div>
              </div>

              {/* Floating badge: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-6 px-3 py-2 rounded-xl
                  dark:bg-dark-card bg-white
                  dark:border-dark-border border-gray-200 border
                  shadow-lg text-center min-w-[80px]"
              >
                <div className="font-display font-bold text-lg text-cyan-400 leading-none">1+</div>
                <div className="font-body text-[10px] dark:text-gray-400 text-gray-500">Years Exp.</div>
              </motion.div>

              {/* Floating badge: Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-3 -right-6 px-3 py-2 rounded-xl
                  dark:bg-dark-card bg-white
                  dark:border-dark-border border-gray-200 border
                  shadow-lg text-center min-w-[80px]"
              >
                <div className="font-display font-bold text-lg text-amber-400 leading-none">5+</div>
                <div className="font-body text-[10px] dark:text-gray-400 text-gray-500">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.button
          onClick={() => handleScroll('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
            dark:text-gray-500 text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-400
            transition-colors duration-200 cursor-pointer group"
        >
          <span className="text-[11px] font-body tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiArrowDown size={16} className="group-hover:text-cyan-400" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
