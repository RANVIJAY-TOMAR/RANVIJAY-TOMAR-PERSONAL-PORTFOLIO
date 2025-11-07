'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '50+', label: 'Projects Completed', icon: '🚀' },
  { number: '3+', label: 'Years Experience', icon: '💼' },
  { number: '100+', label: 'GitHub Contributions', icon: '⭐' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-matte-black-light to-matte-black"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(244, 208, 63, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-6xl md:text-7xl font-bold font-elegant text-center mb-20 text-muted-gold text-glow-sm"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6 relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-muted-gold to-transparent opacity-30"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p
              className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light relative z-10 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              I'm a passionate full-stack developer with a love for creating innovative solutions and beautiful user experiences. 
              With expertise in modern web technologies, I enjoy building applications that make a difference.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light relative z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.12, 
                  y: -12,
                  rotateY: 12,
                  rotateX: 5,
                  z: 30,
                  boxShadow: '0 0 40px rgba(244, 208, 63, 0.5), 0 0 80px rgba(244, 208, 63, 0.3)',
                }}
                className="text-center p-10 glass-effect-strong rounded-2xl transform-3d perspective-3d hover-glow"
              >
                <motion.div 
                  className="text-5xl mb-6"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-6xl font-bold text-muted-gold text-glow-sm mb-3">{stat.number}</div>
                <div className="text-base text-text-tertiary font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
