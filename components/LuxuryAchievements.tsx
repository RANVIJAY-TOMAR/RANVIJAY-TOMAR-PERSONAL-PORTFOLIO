'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmoothReveal from './SmoothReveal'
import FluidMagnetic from './FluidMagnetic'

const achievements = [
  {
    title: 'EY Techathon',
    description: 'Participated in EY Techathon, showcasing innovative solutions and technical excellence.',
    year: '2024',
    icon: '🏆',
    category: 'Hackathon',
  },
  {
    title: 'Smart India Hackathon',
    description: 'Competed in Smart India Hackathon, developing solutions for real-world challenges.',
    year: '2024',
    icon: '🚀',
    category: 'Hackathon',
  },
  {
    title: 'Cellence Development',
    description: 'Developed AI-powered Excel optimizer that improved data processing efficiency by 60%.',
    year: '2025',
    icon: '💡',
    category: 'Project Milestone',
  },
  {
    title: 'StockSeer Launch',
    description: 'Successfully launched AI-powered stock analytics platform with real-time market insights.',
    year: '2024',
    icon: '📈',
    category: 'Product Launch',
  },
]

export default function LuxuryAchievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            Achievements
          </motion.h2>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <SmoothReveal key={achievement.title} delay={index * 0.15}>
              <FluidMagnetic strength={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                  }}
                  className="glass-effect rounded-sm p-8 border border-muted-gold/10 hover:border-muted-gold/30 transition-all duration-700 h-full relative overflow-hidden group"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-muted-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="text-4xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: 'easeInOut',
                          }}
                        >
                          {achievement.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-light text-muted-gold mb-1 tracking-tight">
                            {achievement.title}
                          </h3>
                          <span className="text-xs text-muted-gold/60 font-light uppercase tracking-wider">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                      <motion.span
                        className="text-sm text-muted-gold/40 font-light"
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        {achievement.year}
                      </motion.span>
                    </div>
                    
                    <p className="text-text-secondary text-sm font-light leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Golden glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 border border-muted-gold/0 group-hover:border-muted-gold/20 transition-all duration-500 rounded-sm"
                    animate={{
                      boxShadow: isInView
                        ? '0 0 0px rgba(197, 164, 95, 0)'
                        : '0 0 0px rgba(197, 164, 95, 0)',
                    }}
                  />
                </motion.div>
              </FluidMagnetic>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

