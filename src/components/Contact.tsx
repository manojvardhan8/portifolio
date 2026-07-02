import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LINKS } from '../data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('done')
      formRef.current?.reset()
    }, 1400)
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[11px] tracking-[0.15em] uppercase text-white/35 font-semibold mb-3">Get In Touch</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em' }}>Let's Work Together</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/50 text-[15px] max-w-lg mb-14 leading-relaxed">Have a project in mind or want to collaborate? I'd love to hear from you.</motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="font-display font-black text-white text-2xl tracking-tight mb-3">Drop me a message</h3>
            <p className="text-white/55 text-[14px] leading-[1.8] mb-8">I'm currently open to internship extensions, full-time roles, and freelance projects. Whether you have a question or just want to say hello, I'll do my best to get back to you.</p>

            {[
              { icon: '✉', label: 'Email', val: LINKS.email },
              { icon: '📞', label: 'Phone', val: LINKS.phone },
              { icon: '📍', label: 'Location', val: 'Visakhapatnam, India' },
            ].map(({ icon, label, val }) => (
              <div key={label} className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.08em] text-white/30 font-semibold mb-0.5">{label}</div>
                  <div className="text-white text-[14px]">{val}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="section-glass p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[['Name', 'text', 'Your name'], ['Email', 'email', 'your@email.com']].map(([label, type, placeholder]) => (
                  <div key={label}>
                    <label className="block text-[11px] uppercase tracking-[0.05em] text-white/45 font-semibold mb-2">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/06 transition-all duration-200 font-sans"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <label className="block text-[11px] uppercase tracking-[0.05em] text-white/45 font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or just say hello..."
                  required
                  rows={5}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/06 transition-all duration-200 font-sans resize-none"
                />
              </div>

              {status === 'done' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 rounded-xl bg-white/05 border border-white/15 text-white text-[14px] text-center">
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="inline-flex items-center gap-2 bg-white text-[#080808] font-bold text-[14px] px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'done' ? '✓ Sent!' : (
                    <><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>Send Message</>
                  )}
                </button>
                <a
                  href="https://drive.google.com/file/d/12mC1TXecSwce4rIoWEaAl4ZmvKOnB217/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-white/07 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Download Resume
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
