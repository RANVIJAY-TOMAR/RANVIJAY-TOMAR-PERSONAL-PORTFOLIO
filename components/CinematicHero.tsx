'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TypingText from './TypingText'
import FluidMagnetic from './FluidMagnetic'
import SmoothReveal from './SmoothReveal'

const roles = [
  'AI Developer | Product Innovator | Turning data and design into intelligence.',
  'Full Stack Developer | Building scalable web applications',
  'UI/UX Designer | Crafting beautiful user experiences',
  'Problem Solver | Transforming ideas into reality',
]

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-muted-gold rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [
                null,
                (Math.random() * -200 - 100),
                (Math.random() * -300 - 150),
              ],
              x: [
                null,
                (Math.random() * 100 - 50),
                (Math.random() * 150 - 75),
              ],
              opacity: [
                null,
                Math.random() * 0.4 + 0.2,
                0,
              ],
              scale: [
                null,
                Math.random() * 0.3 + 0.5,
                0.2,
              ],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, rgba(197, 164, 95, ${0.3 - i * 0.1}) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content with parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <SmoothReveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6"
          >
            <span className="text-muted-gold text-sm md:text-base font-light tracking-[0.3em] uppercase">
              Welcome
            </span>
          </motion.div>
        </SmoothReveal>

        <SmoothReveal delay={0.4}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight font-display"
          >
            <motion.span
              className="block text-text-primary mb-2"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ranvijay
            </motion.span>
            <motion.span
              className="block text-muted-gold"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Tomar
            </motion.span>
          </motion.h1>
        </SmoothReveal>

        <SmoothReveal delay={0.8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-lg md:text-xl lg:text-2xl mb-12 font-light max-w-4xl mx-auto"
          >
            <div className="text-center leading-relaxed relative">
              {/* Subtle animated underline */}
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <TypingText 
                  texts={roles} 
                  className="text-muted-gold font-medium relative"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted-gold/40"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 bg-muted-gold/20 rounded-full"
                  animate={{
                    width: ['0%', '100%', '0%'],
                    x: ['0%', '0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </SmoothReveal>

        <SmoothReveal delay={1}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-text-secondary mb-16 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Crafting elegant digital experiences with precision and artistry
          </motion.p>
        </SmoothReveal>

        <SmoothReveal delay={1.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-muted-gold text-matte-black font-medium rounded-sm text-sm tracking-wider uppercase transition-opacity duration-300"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-muted-gold/40 text-muted-gold font-medium rounded-sm text-sm tracking-wider uppercase transition-opacity duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </SmoothReveal>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-muted-gold text-xs font-light tracking-widest uppercase opacity-60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-px h-8 bg-muted-gold/40"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

