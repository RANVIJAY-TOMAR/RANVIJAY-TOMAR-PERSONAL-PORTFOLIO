'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SmoothReveal from './SmoothReveal'

const experiences = [
  {
    title: 'CMO',
    company: 'OvalPod',
    period: 'January 2025 - Present',
    location: 'Noida, India',
    description: [
      'Leading marketing, product positioning, and user growth strategy for OvalPod, a community-based tech platform',
      'Launched multi-channel campaigns that boosted user engagement by 40% within the first quarter',
      'Spearheaded branding efforts and collaborated with the design team to redefine the visual identity and digital presence',
      'Worked closely with developers to align marketing insights with product features, bridging the tech–business gap effectively',
    ],
    tech: ['Marketing Strategy', 'Product Positioning', 'Brand Management', 'User Growth', 'Digital Marketing'],
    icon: '📊',
  },
  {
    title: 'AI Developer Intern',
    company: 'Gigforce',
    period: 'June 2025 - August 2025',
    location: 'Remote / Gurugram, India',
    description: [
      'Developed Cellence, an AI-powered Excel optimization tool that automates data cleaning, pattern detection, and insight generation',
      'Built the backend with FastAPI and Pandas, integrating LangChain for natural language data understanding',
      'Collaborated with product and design teams to deploy a fully functional demo used internally for analytics workflows',
      'Improved dataset processing time by 60%, enhancing accuracy and interpretability of results',
    ],
    tech: ['FastAPI', 'Python', 'Pandas', 'LangChain', 'Data Analysis', 'Excel Automation'],
    icon: '🤖',
  },
]

export default function LuxuryExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            Experience
          </motion.h2>
        </SmoothReveal>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <SmoothReveal key={exp.title} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="glass-effect rounded-sm p-8 border border-muted-gold/10 hover:border-muted-gold/30 transition-all duration-700 relative group overflow-hidden"
              >
                {/* Timeline indicator */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-muted-gold/20 rounded-l-sm"
                  animate={{
                    backgroundColor: isInView && hoveredIndex === index ? 'rgba(197, 164, 95, 0.5)' : 'rgba(197, 164, 95, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Company logo placeholder - grayscale to gold on hover */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 rounded-full bg-matte-black-medium border border-muted-gold/10 flex items-center justify-center text-3xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {exp.icon}
                </motion.div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pr-20">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-light text-muted-gold mb-2 tracking-tight group-hover:text-muted-gold-light transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-light mb-1 group-hover:text-text-primary transition-colors duration-300">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-gold/60 font-light italic mb-1">
                      {exp.period}
                    </p>
                    {exp.location && (
                      <p className="text-xs text-text-tertiary font-light">
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + itemIndex * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="text-text-secondary text-sm font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-muted-gold mt-2">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-muted-gold/10">
                  {exp.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + techIndex * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="px-3 py-1 text-xs border border-muted-gold/20 text-muted-gold rounded-sm font-light"
                    >
                      {tech}
                    </motion.span>
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

