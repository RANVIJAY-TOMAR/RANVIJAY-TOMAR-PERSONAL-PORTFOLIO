'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect-strong border-b border-muted-gold/20 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-muted-gold font-elegant text-glow-sm"
          >
            Ranvijay Tomar
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  textShadow: '0 0 30px rgba(244, 208, 63, 1), 0 0 60px rgba(244, 208, 63, 0.7)',
                  color: '#F4D03F',
                }}
                className="text-text-primary hover:text-muted-gold transition-colors duration-300 font-light text-sm tracking-widest uppercase relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-muted-gold via-muted-gold-light to-muted-gold"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    boxShadow: '0 0 10px rgba(244, 208, 63, 0.8)',
                  }}
                />
                {/* Enhanced glow effect on hover */}
                <motion.span
                  className="absolute -inset-3 bg-muted-gold/0 rounded-lg blur-2xl"
                  whileHover={{ 
                    backgroundColor: 'rgba(244, 208, 63, 0.25)',
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-muted-gold focus:outline-none z-50"
          >
            <motion.svg
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 space-y-4 glass-effect-strong rounded-2xl mt-4 p-6"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: '#D4AF37' }}
                  className="block text-white hover:text-muted-gold transition-colors py-3 border-b border-muted-gold/10 text-sm tracking-widest uppercase font-light"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
