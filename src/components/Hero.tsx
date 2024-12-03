'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-white container mx-auto px-4 py-36 flex flex-col md:flex-row items-center justify-between">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl font-bold mb-4">
          Know Your Skin,<br />
          Discover Your Beauty!
        </h1>
        <p className="text-secondary mb-6">
          Discover the science behind your skin's health. Our app provides comprehensive skin analysis and personalized care recommendations, helping you to achieve your best skin ever.
        </p>
        <motion.button
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/hero-illustration.svg"
          alt="Skin Analysis Illustration"
          width={600}
          height={400}
          priority
        />
      </motion.div>
    </section>
  )
} 
