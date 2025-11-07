'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Architect']

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentRole, setCurrentRole] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-matte-black via-matte-black-light to-matte-black"
        style={{ opacity }}
      />
      
      {/* Subtle radial gradient for depth */}
      <motion.div
        className="absolute inset-0 bg-radial-gradient from-muted-gold/5 via-transparent to-transparent"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(244, 208, 63, 0.05) 0%, transparent 70%)',
        }}
      />
      
      {/* Enhanced floating golden particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-muted-gold rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
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
                Math.random() * 0.6 + 0.3,
                0,
              ],
              scale: [
                null,
                Math.random() * 0.8 + 0.6,
                0,
              ],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              boxShadow: '0 0 20px rgba(244, 208, 63, 1), 0 0 40px rgba(244, 208, 63, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244, 208, 63, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 208, 63, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0 0', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main content with parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-7xl md:text-9xl font-bold font-elegant mb-6 perspective-3d"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.span
              className="block text-text-primary relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ 
                scale: 1.1,
                x: 15,
                textShadow: '0 0 50px rgba(244, 208, 63, 0.9), 0 0 100px rgba(244, 208, 63, 0.6)',
                filter: 'brightness(1.3)',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              Ranvijay
              <motion.span
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-muted-gold to-muted-gold-light"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 10px rgba(244, 208, 63, 0.8)',
                }}
              />
            </motion.span>
            <motion.span
              className="block text-muted-gold text-glow-intense relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ 
                scale: 1.1,
                x: -15,
                textShadow: '0 0 60px rgba(244, 208, 63, 1), 0 0 120px rgba(244, 208, 63, 0.8)',
                filter: 'brightness(1.4)',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              Tomar
              <motion.span
                className="absolute -bottom-3 right-0 h-1 bg-gradient-to-l from-muted-gold to-muted-gold-light"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 10px rgba(244, 208, 63, 0.8)',
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-5xl mb-12 h-20 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-muted-gold text-glow-sm font-light"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl text-text-secondary mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Crafting elegant digital experiences with cutting-edge technology and cinematic design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton
              href="#projects"
              className="bg-muted-gold text-matte-black hover:bg-muted-gold-light border-glow font-semibold text-lg px-10 py-5"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="glass-effect text-muted-gold hover:bg-muted-gold/15 font-semibold text-lg px-10 py-5"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-muted-gold text-sm font-light tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-6 h-10 border-2 border-muted-gold/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-muted-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

