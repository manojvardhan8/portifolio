import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { PROJECTS } from '../data'

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 20 })
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 20 })
  const transform = useTransform([sRotX, sRotY], ([rx, ry]) => `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current!.getBoundingClientRect()
    rotX.set(-(((e.clientY - r.top) / r.height) - 0.5) * 9)
    rotY.set((((e.clientX - r.left) / r.width) - 0.5) * 9)
  }
  const onLeave = () => { rotX.set(0); rotY.set(0) }

  return (
    <motion.div
      ref={cardRef}
      style={{ transformStyle: 'preserve-3d' as const, transform: transform as unknown as string }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="section-glass overflow-hidden glow-border cursor-default"
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-5 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30 mb-2">{p.num} / {p.tag}</p>
        <h3 className="font-display font-black text-white text-[22px] tracking-tight mb-1">{p.title}</h3>
        <p className="text-white/40 text-[13px]">{p.meta}</p>
      </div>

      {/* Body */}
      <div className="px-7 py-5">
        <p className="text-white/60 text-[14px] leading-[1.75] mb-4"
          dangerouslySetInnerHTML={{ __html: p.desc.replace(/96%|end-to-end|Deep Forward Neural Network/g, (m) => `<strong class="text-white font-semibold">${m}</strong>`) }}
        />
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tech.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-md border border-white/08 bg-white/[0.03] text-white/55 text-[11px] font-semibold">{t}</span>
          ))}
        </div>
        <div className="flex gap-2.5">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-[#080808] font-bold text-[13px] px-4 py-2 rounded-lg hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.12)]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">Projects</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}>Things I've Built</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/50 text-[15px] max-w-lg mb-14 leading-relaxed">A selection of projects that demonstrate my engineering capabilities.</motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
