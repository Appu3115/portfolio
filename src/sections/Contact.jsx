// sections/Contact.jsx — Contact section with EmailJS form and social links
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  EMAILJS SETUP: Replace these values with your actual EmailJS credentials
//  1. Go to https://www.emailjs.com/ and create a free account
//  2. Create an Email Service → copy SERVICE_ID
//  3. Create an Email Template → copy TEMPLATE_ID
//  4. Go to Account → API Keys → copy PUBLIC_KEY
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONTACT_INFO = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'appugandhi555@email.com',        // ← Replace with your email
    href: 'mailto:appugandhi555@email.com',
    color: 'text-cyan-400',
    bg: 'dark:bg-cyan-400/10 bg-cyan-50',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+91 9597900174',         // ← Replace with your number
    href: 'https://wa.me/919597900174', // ← Replace with your number
    color: 'text-emerald-400',
    bg: 'dark:bg-emerald-400/10 bg-emerald-50',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/appu-m',  // ← Replace with your LinkedIn
    href: 'https://linkedin.com',
    color: 'text-blue-400',
    bg: 'dark:bg-blue-400/10 bg-blue-50',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Appu3115',        // ← Replace with your GitHub
    href: 'https://github.com',
    color: 'text-gray-400',
    bg: 'dark:bg-gray-400/10 bg-gray-100',
  },
]

/* ── Input Field ─────────────────────────────────────────────────────── */
function InputField({ label, name, type = 'text', placeholder, value, onChange, error, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest
        dark:text-gray-400 text-gray-500 mb-1.5">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl text-sm font-body
          dark:bg-dark-surface bg-gray-50
          dark:text-white text-gray-900
          dark:placeholder-gray-600 placeholder-gray-400
          border transition-all duration-200
          focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500
          dark:focus:border-cyan-500
          ${error
            ? 'border-red-400 dark:border-red-400'
            : 'dark:border-dark-border border-gray-200'
          }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden
        dark:bg-dark-surface bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
        bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-section px-6 relative z-10">
        <SectionHeading
          label="Let's Connect"
          title="Get In Touch"
          subtitle="Have a project in mind, or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-3">
              Let's build something{' '}
              <span className="text-gradient-cyan">great together</span>
            </h3>
            <p className="font-body text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-8">
              I'm currently open to full-time roles, internships, and freelance projects.
              Whether you have a job opportunity, a project proposal, or just want to geek out about tech —
              I'd love to hear from you!
            </p>

            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl
                    dark:bg-dark-card bg-light-card
                    dark:border-dark-border border-light-border border
                    hover:border-cyan-500/30 dark:hover:border-cyan-500/30
                    transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider dark:text-gray-500 text-gray-400">
                      {label}
                    </div>
                    <div className="font-body text-sm font-medium dark:text-white text-gray-800
                      group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-6
              dark:text-gray-500 text-gray-400 text-sm font-body">
              <HiLocationMarker size={14} className="text-cyan-400" />
              India — Open to remote & relocation
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 md:p-8 rounded-3xl
              dark:bg-dark-card bg-light-card
              dark:border-dark-border border-light-border border">

              <h4 className="font-display font-bold text-lg dark:text-white text-gray-900 mb-6">
                Send me a message
              </h4>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-5"
                >
                  <HiCheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
                  <p className="text-sm font-body text-emerald-400">
                    Message sent! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-5"
                >
                  <HiXCircle size={20} className="text-red-400 flex-shrink-0" />
                  <p className="text-sm font-body text-red-400">
                    Oops! Something went wrong. Try emailing directly.
                  </p>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <InputField
                    label="Your Name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />

                  {/* Textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest
                      dark:text-gray-400 text-gray-500 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-body resize-none
                        dark:bg-dark-surface bg-gray-50
                        dark:text-white text-gray-900
                        dark:placeholder-gray-600 placeholder-gray-400
                        border transition-all duration-200
                        focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500
                        ${errors.message
                          ? 'border-red-400 dark:border-red-400'
                          : 'dark:border-dark-border border-gray-200'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold font-body text-white
                      bg-gradient-to-r from-cyan-500 to-violet-600
                      shadow-[0_4px_20px_rgba(0,212,255,0.3)]
                      hover:shadow-[0_4px_28px_rgba(0,212,255,0.5)]
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-all duration-200"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message →'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
