import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-10 px-6 py-3 rounded-full"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'rgba(8,8,8,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: scrolled ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.08)',
          transition: 'background .3s, border-color .3s',
        }}
      >
        <a href="#hero" className="font-display font-black text-white text-lg tracking-tight">SMV</a>

        <div className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-white text-[#080808] font-bold text-[13px] px-3 py-2 rounded-full hover:bg-white/85 transition-colors duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="block w-5 h-[2px] bg-white rounded" />
          <span className="block w-5 h-[2px] bg-white rounded" />
          <span className="block w-5 h-[2px] bg-white rounded" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808]/98 flex flex-col items-center justify-center gap-8"
            style={{ backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="absolute top-6 right-6 text-white/60 text-3xl leading-none"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-2xl font-bold text-white"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
