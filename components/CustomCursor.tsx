'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isDesktop) return

    setIsVisible(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    
    const interactiveElements = document.querySelectorAll('a, button, .hover-glow, .magnetic-hover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Enhanced outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-muted-gold/50"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-muted-gold/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Enhanced inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-muted-gold"
          animate={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(197, 164, 95, 0.8), 0 0 40px rgba(197, 164, 95, 0.4)'
              : '0 0 10px rgba(197, 164, 95, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Enhanced glow on hover */}
      {isHovering && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 40,
              y: mousePosition.y - 40,
              scale: [1, 1.5, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full rounded-full bg-muted-gold/30 blur-2xl"></div>
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full rounded-full border border-muted-gold/40"></div>
          </motion.div>
        </>
      )}
    </>
  )
}

