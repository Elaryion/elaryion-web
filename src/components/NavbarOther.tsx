'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NavbarOther() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
    console.log('Menu clicked, isOpen:', !isOpen) // Debug için
  }

  return (
    <nav className="w-full z-20 start-0 bg-[#799DBD] relative">
      <div className="container mx-auto px-4 flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={32}
            height={32}
            className="h-8"
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">Elaryion</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-white font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white  font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#features"
                className="text-white font-medium"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-12 py-2 text-[#799DBD] bg-white rounded-xl transition-colors font-medium"
          >
            Contact
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuClick}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-[#8BAECF] focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          className="absolute top-full left-0 w-full md:hidden bg-[#799DBD] shadow-lg z-50 overflow-hidden"
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
                className="block text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/about" 
                className="block text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/#features" 
                className="block text-white hover:text-blue-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/contact" 
                className="block text-white hover:text-blue-200 transition-colors"
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