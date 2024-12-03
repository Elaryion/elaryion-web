'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={32}
            height={32}
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Maxwell</span>
        </Link>
        {/* Rest of your navbar code... */}
      </div>
    </nav>
  )
} 