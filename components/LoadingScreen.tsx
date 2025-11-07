'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[100] bg-matte-black flex items-center justify-center"
        >
          {/* Animated logo */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-6xl font-light font-elegant text-muted-gold"
            >
              RT
            </motion.div>
            
            {/* Rotating rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 border border-muted-gold/20 rounded-full"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-muted-gold rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-32 text-muted-gold text-xs tracking-widest font-light uppercase"
          >
            <motion.span
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading
            </motion.span>
          </motion.div>

          {/* Minimal progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-px bg-muted-gold/10 overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-muted-gold/40"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

