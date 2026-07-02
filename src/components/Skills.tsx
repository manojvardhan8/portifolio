import { motion } from 'framer-motion'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3"
        >Technical Skills</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-black text-white mb-4"
          style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}
        >My Toolkit</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-[15px] max-w-lg mb-14 leading-relaxed"
        >Technologies and tools I work with daily to build great products.</motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="section-glass p-5 glow-border"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/05 border border-white/10 flex items-center justify-center text-base">{cat.icon}</div>
                <span className="font-bold text-white text-[14px]">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                    className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-white/70 text-[12px] font-semibold cursor-default hover:border-white/25 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
