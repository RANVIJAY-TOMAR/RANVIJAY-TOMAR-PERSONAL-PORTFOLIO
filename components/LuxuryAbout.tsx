'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmoothReveal from './SmoothReveal'
import FluidMagnetic from './FluidMagnetic'

const stats = [
  { number: '10+', label: 'Projects', icon: '🚀' },
  { number: '15+', label: 'Hackathons', icon: '🏆' },
  { number: '3+', label: 'Years', icon: '💼' },
]

export default function LuxuryAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            About
          </motion.h2>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
          <SmoothReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed font-light"
              >
                I'm <span className="text-muted-gold font-medium">Ranvijay Tomar</span>, an AI developer and product innovator passionate about building intelligent, design-driven solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed font-light"
              >
                From automating data with <span className="text-muted-gold font-medium">Cellence</span> to crafting Agentic AI systems like <span className="text-muted-gold font-medium">StockSeer</span>, I turn ideas into smart, impactful products.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed font-light"
              >
                I blend AI, creativity, and strategy to make technology more human and meaningful.
              </motion.p>
            </div>
          </SmoothReveal>

          <SmoothReveal direction="right" delay={0.4}>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <FluidMagnetic key={stat.label} strength={0.15}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    className="text-center p-8 glass-effect rounded-sm transform-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="text-3xl mb-4 opacity-60"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-4xl font-light text-muted-gold mb-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs text-text-tertiary font-light tracking-widest uppercase">{stat.label}</div>
                  </motion.div>
                </FluidMagnetic>
              ))}
            </div>
          </SmoothReveal>
        </div>
      </div>
    </section>
  )
}

