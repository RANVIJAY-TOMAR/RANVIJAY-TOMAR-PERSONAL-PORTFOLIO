'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SmoothRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function SmoothReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: SmoothRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  }

  const initialDirection = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...initialDirection 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      style={{ opacity, y: direction === 'up' || direction === 'down' ? y : 0 }}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

