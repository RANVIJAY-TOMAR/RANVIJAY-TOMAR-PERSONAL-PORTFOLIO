# Ranvijay Tomar - Portfolio

A luxurious dark-themed personal portfolio built with Next.js, TailwindCSS, and Framer Motion.

## Features

- 🎨 **Luxurious Design**: Black (#0A0A0A) and Gold (#FFD700) color scheme
- ✨ **Smooth Animations**: Framer Motion reveals and transitions
- 🌟 **Golden Glow Effects**: Elegant glow animations throughout
- 🎯 **Particle Background**: Subtle animated particle system
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Optimized with Next.js 14

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Particles**: react-particles (tsparticles)
- **Typography**: Playfair Display & Inter fonts

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects section
│   ├── Skills.tsx        # Skills section
│   ├── Contact.tsx       # Contact section
│   └── ParticlesBackground.tsx  # Particle background
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json          # Dependencies
```

## Customization

### Update Personal Information

Edit the following files to customize:

- **Hero Section**: `components/Hero.tsx` - Update name and roles
- **About Section**: `components/About.tsx` - Update bio and stats
- **Projects**: `components/Projects.tsx` - Add your projects
- **Skills**: `components/Skills.tsx` - Update your skills
- **Contact**: `components/Contact.tsx` - Update social links

### Color Scheme

The color scheme is defined in `tailwind.config.js`:
- Luxury Black: `#0A0A0A`
- Luxury Gold: `#FFD700`

You can modify these in the theme configuration.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder.

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Ranvijay Tomar**
