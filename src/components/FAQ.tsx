'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl text-black font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Navigating Mental Health Consultation Commonly Asked Questions
        </motion.h2>
        <div className="max-w-[55rem] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="font-semibold text-lg text-black flex justify-between items-center">
                  {faq.question}
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ↓
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 text-black/80"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "What is a mental health consultant?",
    answer: "A mental health consultant is a professional who provides guidance and support for mental health concerns..."
  },
  {
    question: "What services do you offer as a mental health consultant?",
    answer: "Our services include individual counseling, group therapy, mental health assessments..."
  },
  {
    question: "How can I benefit from working with a mental health consultant?",
    answer: "Working with a mental health consultant can help you develop coping strategies..."
  },
  {
    question: "What types of issues can a mental health consultant help with?",
    answer: "Mental health consultants can help with anxiety, depression, stress management..."
  }
] 