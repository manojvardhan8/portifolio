import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { LINKS } from '../data'

const roles = ['Full Stack Developer', 'Python Developer', 'Problem Solver']

const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const EmailIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const socials = [
  { label: 'GitHub', url: LINKS.github, Icon: GithubIcon },
  { label: 'LinkedIn', url: LINKS.linkedin, Icon: LinkedinIcon },
  { label: 'Email', url: `mailto:${LINKS.email}`, Icon: EmailIcon },
  { label: 'LeetCode', url: LINKS.leetcode, Icon: () => <span className="text-[11px] font-bold">LC</span> },
  { label: 'CodeChef', url: LINKS.codechef, Icon: () => <span className="text-[11px] font-bold">CC</span> },
  { label: 'GFG', url: LINKS.gfg, Icon: () => <span className="text-[11px] font-bold">GFG</span> },
]

export default function Hero() {
  const role = useTypewriter(roles)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 + delay, ease: [0.4, 0, 0.2, 1] },
  })

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-[1180px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="relative z-10">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[12px] text-white/60 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.p {...fadeUp(0.05)} className="text-white/50 text-[17px] mb-2 font-light">Hi, I'm</motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-display font-black text-white leading-tight tracking-tight text-2xl sm:text-3xl lg:text-5xl mb-2"
            >
              <span className="block">Sabbavarapu</span>
              <span className="block">Manoj Vardhan</span>
            </motion.h1>

            <motion.div {...fadeUp(0.15)} className="flex items-center gap-2 h-8 mb-5 overflow-hidden">
              <span className="text-white font-semibold text-[17px]">{role}</span>
              <span className="inline-block w-[2px] h-5 bg-white animate-blink" />
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-white/60 text-[15px] leading-[1.8] max-w-md mb-8">
              I build <strong className="text-white font-semibold">scalable web applications</strong>, cloud-powered backend systems, ETL pipelines, and AI-powered products focused on{' '}
              <strong className="text-white font-semibold">performance</strong>,{' '}
              <strong className="text-white font-semibold">reliability</strong>, and exceptional user experiences.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-[#080808] font-bold text-[14px] px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h8" /></svg>
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/12mC1TXecSwce4rIoWEaAl4ZmvKOnB217/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-white/07 hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/10 text-white/65 font-medium text-[14px] px-6 py-3 rounded-full hover:text-white hover:border-white/25 transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="flex items-center gap-2.5">
              {socials.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target={url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-white/10 bg-white/[0.03] text-white/55 hover:text-white hover:border-white/35 hover:bg-white/07 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px]">
              {/* Terminal */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" style={{ background: '#0d0d0d' }}>
                <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[11px] text-white/25 font-mono">manoj@portfolio:~</span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-[1.85] min-h-[200px]">
                  <div><span className="text-white/35">❯ </span><span className="text-white">whoami</span></div>
                  <div className="pl-4 text-white font-semibold">Sabbavarapu Manoj Vardhan</div>
                  <br />
                  <div><span className="text-white/35">❯ </span><span className="text-white">cat role.txt</span></div>
                  <div className="pl-4 text-white/75">Software Developer Intern @ Inncircles</div>
                  <br />
                  <div><span className="text-white/35">❯ </span><span className="text-white">git log --oneline -3</span></div>
                  <div className="pl-4 text-white/55"><span className="text-white/40">a1b2c3d</span> Built ETL pipeline with PySpark</div>
                  <div className="pl-4 text-white/55"><span className="text-white/40">e4f5a6b</span> Resolved performance issues</div>
                  <div className="pl-4 text-white/55"><span className="text-white/40">c7d8e9f</span> Integrated chatbot interface</div>
                  <br />
                  <div><span className="text-white/35">❯ </span><span className="inline-block w-[7px] h-[13px] bg-white align-middle animate-blink ml-0.5" /></div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-2 flex items-center gap-2 px-3 py-2 rounded-full border border-white/12 bg-[#0d0d0d]/90 backdrop-blur text-white text-[12px] font-semibold"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ⚡ Software Developer
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-6 flex items-center gap-2 px-3 py-2 rounded-full border border-white/12 bg-[#0d0d0d]/90 backdrop-blur text-white text-[12px] font-semibold"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🎓 CGPA 9.0
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-12 flex items-center gap-2 px-3 py-2 rounded-full border border-white/12 bg-[#0d0d0d]/90 backdrop-blur text-white text-[12px] font-semibold"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, delay: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                ☁️ AWS EC2 & Lambda
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
