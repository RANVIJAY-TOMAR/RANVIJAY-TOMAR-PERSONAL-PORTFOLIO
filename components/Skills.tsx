'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'PostgreSQL', 'Figma'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02,
              }}
              className="glass-effect-strong rounded-2xl p-8 hover-glow border-glow perspective-3d transform-3d"
            >
              <h3 className="text-3xl font-bold text-muted-gold mb-8 text-center text-glow-sm">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0, rotateZ: -180, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0, y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.08,
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                    whileHover={{ 
                      scale: 1.25, 
                      y: -10,
                      rotateZ: 10,
                      rotateY: 15,
                      z: 25,
                      boxShadow: '0 0 40px rgba(244, 208, 63, 0.7), 0 0 80px rgba(244, 208, 63, 0.4)',
                      borderColor: 'rgba(244, 208, 63, 0.9)',
                      backgroundColor: 'rgba(244, 208, 63, 0.2)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="px-5 py-3 glass-effect border border-muted-gold/35 text-muted-gold rounded-xl text-sm font-semibold cursor-default hover:bg-muted-gold/20 transition-all relative overflow-hidden group"
                  >
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-gold/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7 }}
                    />
                    <span className="relative z-10 tracking-wide">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
