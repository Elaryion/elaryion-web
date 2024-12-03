'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef(null)

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '/about', active: false },
    { name: 'Contact', href: '/contact', active: false },
  ]

  const handleScroll = () => {
    if (navbarRef.current) {
      setIsScrolled(window.scrollY > 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav ref={navbarRef} className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between font-bold text-zinc-900 h-20">
          {/* Logo */}
          <div className="flex gap-2 items-center text-2xl w-[200px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46cfec76ee8d083e9ecfb7185b84e96f2edd8fa4f7976fa0f91a15e08a24ccd"
              className="w-8 h-8"
              alt="Logo"
            />
            <Link href="/">Elaryion</Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex gap-8 items-center justify-center flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${item.active ? 'font-semibold' : ''} text-xs`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block w-[200px] text-right">
            <button className="px-8 py-2 text-xs text-white bg-primary rounded-full hover:bg-primary-hover">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-8 py-2 text-base text-white bg-primary rounded-full hover:bg-primary-hover">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
} 