/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep matte black palette
        'matte-black': '#0A0A0A',
        'matte-black-light': '#0F0F0F',
        'matte-black-medium': '#141414',
        'matte-black-dark': '#050505',
        
        // Subtle muted gold palette (Tesla/LV inspired)
        'muted-gold': '#C5A45F',
        'muted-gold-dark': '#A68B4F',
        'muted-gold-light': '#D4B87A',
        'muted-gold-subtle': 'rgba(197, 164, 95, 0.15)',
        'gold-glow': 'rgba(197, 164, 95, 0.2)',
        
        // Text colors with perfect contrast
        'text-primary': '#FFFFFF',
        'text-secondary': '#E8E8E8',
        'text-tertiary': '#D0D0D0',
        'text-muted': '#A0A0A0',
      },
      fontFamily: {
        'elegant': ['Cormorant Garamond', 'Playfair Display', 'serif'],
        'modern': ['Space Grotesk', 'Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'display': ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'glow-slow': 'glow 4s ease-in-out infinite alternate',
        'float': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 8px rgba(197, 164, 95, 0.2), 0 0 16px rgba(197, 164, 95, 0.1)',
            textShadow: '0 0 8px rgba(197, 164, 95, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 16px rgba(197, 164, 95, 0.3), 0 0 32px rgba(197, 164, 95, 0.2)',
            textShadow: '0 0 12px rgba(197, 164, 95, 0.4), 0 0 24px rgba(197, 164, 95, 0.2)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0)' },
          '50%': { transform: 'translateY(-30px) translateZ(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C5A45F 0%, #A68B4F 50%, #C5A45F 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #000000 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
        'glass-strong': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(197, 164, 95, 0.1) 0%, rgba(197, 164, 95, 0.05) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}

