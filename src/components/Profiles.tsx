import { motion } from 'framer-motion'
import { PROFILES } from '../data'

const GhIcon = () => <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LiIcon = () => <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

const iconMap: Record<string, React.FC> = {
  gh: GhIcon,
  li: LiIcon,
  lc: () => <span className="text-white font-black text-lg">⚡</span>,
  cc: () => <span className="text-white font-black text-lg">👨‍🍳</span>,
  gfg: () => <span className="text-white font-black text-lg">🌿</span>,
}

export default function Profiles() {
  return (
    <section id="profiles" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">Online Presence</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}>Coding Profiles</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/50 text-[15px] max-w-lg mb-14 leading-relaxed">Find me on these platforms where I solve problems and share work.</motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {PROFILES.map((p, i) => {
            const Icon = iconMap[p.icon] || (() => <span className="text-2xl">👤</span>)
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="section-glass p-5 text-center glow-border block group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/05 border border-white/08 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/09 transition-colors duration-200">
                  <Icon />
                </div>
                <div className="font-bold text-white text-[14px] mb-1">{p.name}</div>
                <div className="text-white/40 text-[11px] mb-3 truncate">{p.handle}</div>
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-white/55 text-[11px] font-semibold group-hover:border-white/25 group-hover:text-white transition-all duration-200">View Profile →</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
