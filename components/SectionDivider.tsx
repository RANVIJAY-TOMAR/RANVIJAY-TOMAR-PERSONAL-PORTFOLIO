'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
      <div ref={ref} className="relative py-12 flex items-center justify-center">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: '200px', opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-muted-gold/30 to-transparent relative"
      >
        <motion.div
          className="absolute right-0 top-1/2 w-2 h-2 bg-muted-gold/40 rounded-full transform -translate-y-1/2 translate-x-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        className="mx-6 w-3 h-3 rounded-full bg-muted-gold/50 relative"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-muted-gold/30"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: '200px', opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-l from-transparent via-muted-gold/30 to-transparent relative"
      >
        <motion.div
          className="absolute left-0 top-1/2 w-2 h-2 bg-muted-gold/40 rounded-full transform -translate-y-1/2 -translate-x-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  )
}

