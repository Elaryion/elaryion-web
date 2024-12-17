'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`bg-white fixed w-full z-20 top-0 start-0 ${!isOpen && hasScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="container mx-auto px-4 flex items-center justify-between p-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={32}
            height={32}
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Elaryion</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-900 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-900 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-12 py-2 text-white bg-[#799DBD] rounded-lg transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-gray-200 z-50 overflow-hidden"
        >
          <motion.ul
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -20
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: { duration: 0.2 },
              y: { duration: 0.3 }
            }}
            className="flex flex-col p-4 font-medium"
          >
            <li className="py-2">
              <Link
                href="/"
                className="block text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/about"
                className="block text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="block text-gray-900"
              >
                Features
              </a>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="block text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
} 