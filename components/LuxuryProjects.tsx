'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SmoothReveal from './SmoothReveal'
import FluidMagnetic from './FluidMagnetic'

const projects = [
  {
    title: 'StockSeer',
    subtitle: 'Intelligent Market Insight Engine',
    description: 'An AI-powered platform that predicts and visualizes stock market trends using real-time data and conversational intelligence. Designed for traders, analysts, and curious investors, StockSeer delivers predictive insights, portfolio recommendations, and natural-language Q&A on stock performance.',
    tech: ['Next.js', 'FastAPI', 'LangChain', 'Python', 'Pinecone', 'TailwindCSS', 'Framer Motion', 'Alpha Vantage API'],
    github: 'https://github.com/RANVIJAY-TOMAR/stockseer--ai',
    demo: 'https://stockseer--ai.vercel.app/',
    image: 'https://stockseer--ai.vercel.app/',
    gradient: 'from-blue-900/20 via-purple-900/20 to-pink-900/20',
  },
  {
    title: 'Cellence',
    subtitle: 'The AI Excel Optimizer & Data Intelligence Engine',
    description: 'An AI-powered application that transforms messy, complex Excel sheets into structured, insightful, and actionable data. It reads uploaded spreadsheets, cleans inconsistencies, detects hidden patterns, and generates precise summaries, dashboards, and recommendations — all automatically.',
    tech: ['Next.js', 'Python', 'Pandas', 'OpenAI API', 'LangChain', 'FastAPI', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/RANVIJAY-TOMAR',
    demo: 'https://cellence-gigforce.onrender.com/',
    image: 'https://cellence-gigforce.onrender.com/',
    gradient: 'from-purple-900/20 via-indigo-900/20 to-blue-900/20',
  },
  {
    title: 'Swaasth Connect',
    subtitle: 'AI-Powered Rural Healthcare Network',
    description: 'A rural healthcare innovation platform designed to connect patients, local health workers, and government health services through intelligent digital infrastructure. The system enables disease tracking, patient reporting, and appointment management, even in low-connectivity regions — ensuring accessible healthcare for every village.',
    tech: ['React.js', 'Node.js', 'FastAPI', 'LangChain', 'PostgreSQL', 'TailwindCSS', 'Google Maps API', 'Framer Motion'],
    github: 'https://github.com/RANVIJAY-TOMAR',
    demo: '#',
    image: '/images/swaasth.png',
    gradient: 'from-green-900/20 via-teal-900/20 to-cyan-900/20',
  },
]

export default function LuxuryProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            Projects
          </motion.h2>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SmoothReveal key={project.title} delay={index * 0.15}>
              <FluidMagnetic strength={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ 
                    y: -12,
                    rotateY: hoveredIndex === index ? 2 : 0,
                    rotateX: hoveredIndex === index ? -2 : 0,
                  }}
                  className="group h-full perspective-3d"
                  style={{ perspective: '1000px' }}
                >
                  <div className="glass-effect rounded-sm p-8 h-full flex flex-col border border-muted-gold/10 hover:border-muted-gold/30 transition-all duration-700 transform-3d">
                    <motion.div
                      className="absolute inset-0 rounded-sm"
                      animate={{
                        boxShadow: hoveredIndex === index
                          ? '0 20px 60px rgba(197, 164, 95, 0.2), 0 0 40px rgba(197, 164, 95, 0.1)'
                          : '0 0 0px rgba(197, 164, 95, 0)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="mb-4"
                      animate={{
                        y: hoveredIndex === index ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="text-2xl font-light text-muted-gold tracking-tight mb-1"
                        animate={{
                          scale: hoveredIndex === index ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      {project.subtitle && (
                        <motion.p
                          className="text-sm text-text-tertiary font-light italic"
                          animate={{
                            opacity: hoveredIndex === index ? 0.8 : 0.6,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.subtitle}
                        </motion.p>
                      )}
                    </motion.div>
                    <p className="text-text-secondary mb-6 leading-relaxed font-light flex-grow text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            delay: index * 0.15 + techIndex * 0.05,
                            type: 'spring',
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            borderColor: 'rgba(197, 164, 95, 0.5)',
                            backgroundColor: 'rgba(197, 164, 95, 0.1)',
                          }}
                          className="px-3 py-1 text-xs border border-muted-gold/20 text-muted-gold rounded-sm font-light cursor-default transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-auto pt-4 border-t border-muted-gold/10">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4, opacity: 0.8 }}
                        className="text-muted-gold hover:text-muted-gold-light transition-colors duration-500 text-xs font-light tracking-wide uppercase flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </motion.a>
                      {project.demo !== '#' && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4, opacity: 0.8 }}
                          className="text-muted-gold hover:text-muted-gold-light transition-colors duration-500 text-xs font-light tracking-wide uppercase flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FluidMagnetic>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

