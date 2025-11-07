'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmoothReveal from './SmoothReveal'
import FluidMagnetic from './FluidMagnetic'

const certifications = [
  {
    name: 'MongoDB Certification',
    issuer: 'MongoDB',
    date: '2024',
    credential: 'Certificate',
    link: '#',
  },
  {
    name: 'JP Morgan Certification',
    issuer: 'JP Morgan',
    date: '2024',
    credential: 'Certificate',
    link: '#',
  },
  {
    name: 'Microsoft Certification',
    issuer: 'Microsoft',
    date: '2024',
    credential: 'Certificate',
    link: '#',
  },
]

export default function LuxuryCertifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" ref={ref} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SmoothReveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-light font-elegant text-center mb-16 text-muted-gold tracking-tight"
          >
            Certifications
          </motion.h2>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <SmoothReveal key={cert.name} delay={index * 0.15}>
              <FluidMagnetic strength={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-effect rounded-sm p-6 border border-muted-gold/10 hover:border-muted-gold/30 transition-all duration-700 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-muted-gold mb-2 tracking-tight">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-text-secondary font-light mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-gold/60 font-light italic">
                        {cert.date}
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 rounded-full bg-muted-gold/10 border border-muted-gold/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-muted-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-muted-gold/10">
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, opacity: 0.8 }}
                      className="text-muted-gold hover:text-muted-gold-light transition-colors duration-500 text-xs font-light tracking-wide uppercase flex items-center gap-2"
                    >
                      <span>View Certificate</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
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

