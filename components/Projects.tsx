'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-muted-gold/20 to-muted-gold-dark/20',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-muted-gold-dark/20 to-muted-gold/20',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with elegant animations.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-gradient-to-br from-muted-gold/20 to-muted-gold-light/20',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-matte-black-light via-matte-black to-matte-black-light"></div>
      
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
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, rotateX: -15, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -25,
                rotateY: 8,
                rotateX: 2,
                scale: 1.03,
                z: 50,
              }}
              className="group relative perspective-3d transform-3d"
            >
              <div className="glass-effect-strong rounded-2xl p-8 h-full flex flex-col hover-glow border-glow relative overflow-hidden">
                {/* Enhanced hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-muted-gold/20 via-muted-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      boxShadow: hoveredIndex === index 
                        ? '0 0 80px rgba(244, 208, 63, 0.6), 0 0 160px rgba(244, 208, 63, 0.4), inset 0 0 80px rgba(244, 208, 63, 0.15)'
                        : '0 0 0px rgba(244, 208, 63, 0)',
                    }}
                />
                
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-muted-gold/0 group-hover:border-muted-gold/50"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Project image placeholder with enhanced animation */}
                <div className={`${project.image} rounded-xl h-48 mb-6 flex items-center justify-center relative overflow-hidden group/image`}>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 3 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 bg-gradient-to-br from-muted-gold/50 via-muted-gold-dark/35 to-muted-gold/25"
                  />
                  {/* Animated overlay pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(244, 208, 63, 0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: hoveredIndex === index ? ['0 0', '20px 20px'] : '0 0',
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="relative z-10 text-muted-gold text-4xl font-bold"
                    animate={{
                      opacity: hoveredIndex === index ? 0.7 : 0.5,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    PROJECT
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-muted-gold mb-4 text-glow-sm group-hover:text-glow transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed font-light flex-grow text-base md:text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.15 + techIndex * 0.05,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -3,
                        boxShadow: '0 0 15px rgba(244, 208, 63, 0.5)',
                      }}
                      className="px-4 py-1.5 text-xs glass-effect border border-muted-gold/35 text-muted-gold rounded-full font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    whileHover={{ 
                      scale: 1.15, 
                      x: 8,
                      textShadow: '0 0 10px rgba(244, 208, 63, 0.8)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-gold hover:text-muted-gold-light transition-colors flex items-center gap-2 group font-medium"
                  >
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 15, scale: 1.2 }}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </motion.svg>
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    whileHover={{ 
                      scale: 1.15, 
                      x: 8,
                      textShadow: '0 0 10px rgba(244, 208, 63, 0.8)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-gold hover:text-muted-gold-light transition-colors flex items-center gap-2 group font-medium"
                  >
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 15, scale: 1.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
