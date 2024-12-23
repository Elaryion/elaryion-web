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
          Navigating Skincare with Elaryion: Frequently Asked Questions
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
    question: "What is Elaryion?",
    answer: "Elaryion is an innovative skincare app that uses advanced technology to analyze your skin and provide personalized skincare solutions tailored to your unique needs."
  },
  {
    question: "How does Elaryion analyze my skin?",
    answer: "Our app uses cutting-edge AI and high-resolution image processing to assess your skins type, condition, and specific concerns, such as dryness, acne, or aging."
  },
  {
    question: "What kind of recommendations will I receive?",
    answer: "You’ll get customized skincare routines, product recommendations, and actionable tips to improve your skin’s health and appearance."
  },
  {
    question: "Can Elaryion help with specific skin concerns?",
    answer: "Yes! Whether you’re dealing with acne, hyperpigmentation, fine lines, or sensitivity, our app is designed to help you address your unique concerns effectively"
  },
  {
    question: "Is Elaryion suitable for all skin types?",
    answer: "Absolutely! Elaryion caters to all skin types and works to provide tailored solutions based on your individual skin profile."
  },
] 