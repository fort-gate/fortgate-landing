'use client'

import { useState } from 'react'
import Image from 'next/image'
import PillButton from './PillButton'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-8 w-32 sm:h-10 sm:w-40 md:h-12 md:w-48">
              <Image
                src="/images/logooficial.png"
                alt="Fortgate Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-accent transition-colors font-medium">
              ABOUT
            </a>
            <a href="#products" className="text-white hover:text-accent transition-colors font-medium">
              PRODUCTS
            </a>
            <a href="#technologies" className="text-white hover:text-accent transition-colors font-medium">
              TECHNOLOGIES
            </a>
            <a href="#how-to" className="text-white hover:text-accent transition-colors font-medium">
              HOW TO
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <PillButton variant="outline">
              CONTACT US
            </PillButton>
            <PillButton variant="gradient">
              Get Started
            </PillButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-white hover:text-accent transition-colors font-medium">
              ABOUT
            </a>
            <a href="#products" className="block text-white hover:text-accent transition-colors font-medium">
              PRODUCTS
            </a>
            <a href="#technologies" className="block text-white hover:text-accent transition-colors font-medium">
              TECHNOLOGIES
            </a>
            <a href="#how-to" className="block text-white hover:text-accent transition-colors font-medium">
              HOW TO
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <PillButton variant="outline">
                CONTACT US
              </PillButton>
              <PillButton variant="gradient">
                Get Started
              </PillButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

