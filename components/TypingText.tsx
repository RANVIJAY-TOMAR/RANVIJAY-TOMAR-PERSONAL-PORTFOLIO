'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  texts: string[]
  className?: string
}

export default function TypingText({ texts, className = '' }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(50)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const handleTyping = () => {
      if (!isDeleting && currentText === currentFullText) {
        // Finished typing, wait then start deleting (only if multiple texts)
        if (texts.length > 1) {
          setTimeout(() => setIsDeleting(true), 3000)
          setTypingSpeed(30)
        }
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setTypingSpeed(50)
      } else if (!isDeleting) {
        // Typing
        setCurrentText(currentFullText.substring(0, currentText.length + 1))
      } else {
        // Deleting
        setCurrentText(currentFullText.substring(0, currentText.length - 1))
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-block w-0.5 h-[1em] bg-muted-gold ml-1"
      />
    </span>
  )
}

