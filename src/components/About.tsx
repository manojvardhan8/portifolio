import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
})

const tags = ['Full Stack Developer', 'Backend Engineer', 'Python Developer', 'Node.js Developer', 'Angular & React', 'AWS Enthusiast', 'ML Enthusiast']

const stats = [
  { num: '9.0', label: 'CGPA' },
  { num: '96%', label: 'ML Accuracy' },
  { num: '40%', label: 'Manual Work ↓' },
  { num: '35%', label: 'Reliability ↑' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p {...fadeUp()} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">About Me</motion.p>
        <motion.h2 {...fadeUp(0.05)} className="font-display font-black text-white mb-16" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Who I Am
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text */}
          <motion.div {...fadeUp(0.1)}>
            {[
              <>I'm a <strong className="text-white font-semibold">Full Stack Developer</strong> and <strong className="text-white font-semibold">Backend Engineer</strong> currently working as a <strong className="text-white font-semibold">Software Developer Intern at Inncircles</strong>, where I build workflow-driven systems, advanced invoicing modules, and ETL pipelines.</>,
              <>I specialise in <strong className="text-white font-semibold">Node.js, Python, Angular, React</strong> and have hands-on experience deploying on <strong className="text-white font-semibold">AWS EC2, Lambda, EMR, and Glue</strong>. I'm passionate about writing clean, maintainable code and solving complex engineering problems.</>,
              <>My ML work includes deploying a Deep Neural Network achieving <strong className="text-white font-semibold">96% accuracy</strong> in genetic disease prediction — showcasing end-to-end ML pipeline skills from preprocessing to production on Hugging Face Spaces.</>,
              <>I enjoy solving complex engineering problems, building scalable products, learning new technologies, and writing clean maintainable code.</>,
            ].map((p, i) => (
              <p key={i} className="text-white/60 text-[15px] leading-[1.85] mb-4">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/65 text-[12px] font-medium hover:border-white/25 hover:text-white transition-all duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-4">
            <div className="section-glass p-5 glow-border">
              <p className="text-[10px] tracking-[0.1em] uppercase text-white/30 mb-3 font-semibold">Education</p>
              <p className="font-display font-black text-white text-xl mb-1 tracking-tight">B.Tech Computer Science</p>
              <p className="text-white/50 text-sm">Vignan's Institute of Information Technology, Visakhapatnam</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ num, label }) => (
                <div key={label} className="section-glass p-4 text-center glow-border">
                  <div className="font-display font-black text-white text-2xl tracking-tight mb-1">{num}</div>
                  <div className="text-white/35 text-[10px] uppercase tracking-[0.08em] font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
