import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">Recognition</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display font-black text-white mb-14" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}>Achievements</motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="section-glass p-6 text-center glow-border"
            >
              <span className="text-4xl block mb-3 leading-none">{a.icon}</span>
              <h3 className="font-bold text-white text-[15px] mb-2">{a.title}</h3>
              <p className="text-white/50 text-[13px] leading-[1.65]">
                {a.desc}
                {a.link && (
                  <> <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-white/65 font-semibold hover:text-white transition-colors duration-200">View →</a></>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
