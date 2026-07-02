import { motion } from 'framer-motion'

const bullets = [
  'Architected and delivered core product features including an <b>advance invoicing system</b> (PO-linked, multi-invoice support) with full CRUD and state management.',
  'Built <b>workflow-driven form engines</b> with approval workflows and audit trails — reduced manual effort by 40% and improved process turnaround by 25%.',
  'Integrated <b>chatbot UI</b> into the main application, enabling intelligent user interactions within the workflow.',
  'Built <b>scalable ETL pipelines</b> using <b>Python (PySpark)</b> to extract data from MongoDB collections and transform into optimised Parquet formats — improved data consistency by 30%.',
  'Resolved critical <b>production issues</b> including state synchronisation bugs, file persistence failures, and data integrity edge cases across web and mobile.',
  'Optimised storage and validation logic, reducing user-reported issues by 35% and ensuring seamless cross-platform behaviour.',
]

const chips = ['↓ 40% Manual Work', '↑ 35% Reliability', '↑ 30% Data Consistency', '↑ 25% Process Speed']

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3"
        >Work Experience</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-black text-white mb-16"
          style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}
        >Where I've Worked</motion.h2>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px]" style={{ background: 'linear-gradient(180deg,transparent,rgba(255,255,255,0.2),rgba(255,255,255,0.2),transparent)' }} />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pl-8"
          >
            {/* Dot */}
            <div className="absolute -left-[2.5rem] top-2 w-3 h-3 rounded-full bg-white border-2 border-[#080808] shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            {/* Connector */}
            <div className="absolute -left-[1.9rem] top-[1.2rem] w-7 h-[1px] bg-white/15" />

            <div className="section-glass p-7 glow-border">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/07 border border-white/10 flex items-center justify-center text-lg flex-shrink-0">🏢</div>
                  <div>
                    <div className="font-bold text-white text-[17px]">Inncircles</div>
                    <div className="text-white/45 text-[13px]">Software Developer Intern</div>
                  </div>
                </div>
                <span className="text-[12px] text-white font-semibold px-3 py-1 rounded-full bg-white/06 border border-white/12">Jul 2025 — Present</span>
              </div>

              <ul className="flex flex-col gap-2.5 mt-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-white/60 leading-[1.65]">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: b.replace(/<b>/g, '<strong class="text-white font-semibold">').replace(/<\/b>/g, '</strong>') }} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {chips.map(c => (
                  <span key={c} className="px-3 py-1 rounded-full bg-white/05 border border-white/12 text-white text-[12px] font-semibold">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
