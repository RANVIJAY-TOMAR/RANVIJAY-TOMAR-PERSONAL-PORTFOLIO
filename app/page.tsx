'use client'

import { motion } from 'framer-motion'
import LuxuryNavbar from '@/components/LuxuryNavbar'
import CinematicHero from '@/components/CinematicHero'
import LuxuryAbout from '@/components/LuxuryAbout'
import LuxuryProjects from '@/components/LuxuryProjects'
import LuxurySkills from '@/components/LuxurySkills'
import LuxuryExperience from '@/components/LuxuryExperience'
import LuxuryCertifications from '@/components/LuxuryCertifications'
import LuxuryAchievements from '@/components/LuxuryAchievements'
import LuxuryContact from '@/components/LuxuryContact'
import CustomCursor from '@/components/CustomCursor'
import GoldenParticles from '@/components/GoldenParticles'
import LoadingScreen from '@/components/LoadingScreen'
import SectionDivider from '@/components/SectionDivider'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ThemeToggle />
      <CustomCursor />
      <GoldenParticles />
      <LuxuryNavbar />
      <CinematicHero />
      <SectionDivider />
      <LuxuryAbout />
      <SectionDivider />
      <LuxuryProjects />
      <SectionDivider />
      <LuxurySkills />
      <SectionDivider />
      <LuxuryExperience />
      <SectionDivider />
      <LuxuryCertifications />
      <SectionDivider />
      <LuxuryAchievements />
      <SectionDivider />
      <LuxuryContact />
    </main>
  )
}

