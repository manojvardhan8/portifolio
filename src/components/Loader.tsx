import { motion, AnimatePresence } from 'framer-motion'

interface Props { done: boolean }

export default function Loader({ done }: Props) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#080808] flex flex-col items-center justify-center gap-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="font-display font-black text-white text-5xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SMV
          </motion.div>

          <div className="w-48 h-[1px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <motion.p
            className="text-[11px] tracking-[0.15em] uppercase text-white/30 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
