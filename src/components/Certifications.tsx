import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">Credentials</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display font-black text-white mb-14" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}>Certifications</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="section-glass p-5 flex items-center gap-4 glow-border"
            >
              <div className="w-12 h-12 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">{c.icon}</div>
              <div>
                <h3 className="font-bold text-white text-[14px] mb-0.5 leading-tight">{c.title}</h3>
                <p className="text-white/40 text-[12px] mb-2">{c.issuer}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-white/60 text-[12px] font-semibold hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group">
                  View Certificate
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
