"use client"

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <section className="py-20 md:py-40" style={{ backgroundImage: "url('https://i.hizliresim.com/rxrnmdp.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white pl-4 md:pl-6 border-l-2 md:border-l-4 border-white"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            We&apos;re here to help. Reach out to us and let&apos;s start a conversation about how we can support your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 