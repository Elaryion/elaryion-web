"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-white container mx-auto px-4 py-12 sm:py-20 md:py-36 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4 font-poppins">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Know Your Skin,<br />
          Discover Your Beauty!
        </h1>
        <p className="text-secondary text-sm sm:text-base mb-6 max-w-xl">
          Discover the science behind your skin&apos;s health. Our app provides comprehensive skin analysis and personalized care recommendations, helping you to achieve your best skin ever.
        </p>
        <motion.button
          className="bg-primary text-white px-4 sm:px-6 py-2 rounded-md hover:bg-primary-hover text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
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
          className="w-full max-w-[400px] md:max-w-[600px] h-auto"
        />
      </motion.div>
    </section>
  )
} 
