'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ranvijaytomar',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ranvijaytomar',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:ranvijaytomar@example.com',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-6xl md:text-7xl font-bold font-elegant mb-12 text-muted-gold text-glow-sm"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl md:text-2xl text-text-secondary mb-20 font-light leading-relaxed max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0, rotateZ: -180, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.15,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{ 
                scale: 1.35, 
                y: -18,
                rotateZ: 360,
                rotateY: 180,
                z: 40,
                boxShadow: '0 0 60px rgba(244, 208, 63, 0.9), 0 0 120px rgba(244, 208, 63, 0.6)',
              }}
              whileTap={{ scale: 0.8 }}
              className="w-24 h-24 flex items-center justify-center glass-effect-strong border-2 border-muted-gold/35 rounded-full text-muted-gold hover:bg-muted-gold/20 hover:border-muted-gold transition-all duration-300 hover-glow group relative overflow-hidden"
            >
              {/* Rotating background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-muted-gold/25 to-muted-gold-dark/25 opacity-0 group-hover:opacity-100"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  filter: isInView ? 'drop-shadow(0 0 15px rgba(244, 208, 63, 0.6))' : 'none',
                }}
                whileHover={{
                  filter: 'drop-shadow(0 0 30px rgba(244, 208, 63, 1))',
                  scale: 1.15,
                }}
              >
                {link.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
