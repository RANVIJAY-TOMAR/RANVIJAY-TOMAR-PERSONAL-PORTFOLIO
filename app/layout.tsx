import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ranvijay Tomar - Portfolio',
  description: 'Luxurious dark-themed portfolio showcasing projects, skills, and achievements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

