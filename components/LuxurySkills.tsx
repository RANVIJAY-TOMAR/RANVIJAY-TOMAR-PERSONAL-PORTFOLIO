'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmoothReveal from './SmoothReveal'
import FluidMagnetic from './FluidMagnetic'

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    skills: [
      { name: 'LangChain', level: 85 },
      { name: 'OpenAI API', level: 90 },
      { name: 'Pinecone', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'Machine Learning', level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Google Maps API', level: 75 },
    ],
  },
]

export default function LuxurySkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            Skills
          </motion.h2>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SmoothReveal key={category.category} delay={categoryIndex * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: categoryIndex * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-effect rounded-sm p-6 border border-muted-gold/10 hover:border-muted-gold/30 transition-all duration-700 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-light text-muted-gold tracking-wide uppercase">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <motion.span
                          className="text-sm text-text-secondary font-light"
                          whileHover={{ x: 4, color: '#C5A45F' }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span
                          className="text-xs text-muted-gold/60 font-light"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: categoryIndex * 0.15 + skillIndex * 0.05,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-1.5 bg-matte-black-medium rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.05 + 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="h-full bg-gradient-to-r from-muted-gold/60 via-muted-gold to-muted-gold-light rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: categoryIndex * 0.15 + skillIndex * 0.05 + 1.8,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

