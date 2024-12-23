'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="features" className="py-36 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-black font-semibold mb-2">Features</h2>
          <p className="text-black/80">
          Welcome to the Features section of Elaryion, where advanced technology meets personalized
skincare solutions. Explore how Elaryion transforms your skincare journey with these powerful
tools:
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#464168] text-white p-6 rounded-lg gap-4"
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap pb-4 gap-3.5 items-center w-full max-md:max-w-full">
                <div className="flex gap-2.5 items-center self-stretch p-3.5 my-auto rounded-lg bg-slate-400 h-[50px] w-[50px]">
                  <Image
                    src={feature.icon}
                    width={40}
                    height={40}
                    alt={`${feature.title} icon`}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 shrink self-stretch my-auto text-l font-semibold text-orange-50 basis-7 max-md:max-w-full">
                  {feature.title}
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: "/icons/skincare.svg",
    title: "Personalized Skincare Plans",
    description: "Your skin is unique, and your care should be too. Elaryion's app uses state-of-the-art algorithms to analyze your skin type, conditions, and personal preferences. Based on this data, it delivers a customized skincare plan designed to help you achieve radiant, healthy skin."
  },
  {
    icon: "/icons/chart.svg",
    title: "Comprehensive Skin Health Tracking and Analysis",
    description: "Understand your skin like never before. By combining regular photo analysis and data from your inputs, the app tracks your skin's progress, identifying improvements and areas for further care. Get real-time insights to adjust your routine effectively."
  },
  {
    icon: "/icons/fork-knife.svg",
    title: "Expert Guidance from Dermatology Professionals",
    description: "Have questions or concerns? Elaryion connects you with certified dermatologists and skincare specialists who provide tailored advice, product recommendations, and guidance based on your skin's needs. Confidence in care starts here."
  },
  {
    icon: "/icons/plan.svg",
    title: "Tailored Product Recommendations",
    description: "Say goodbye to guesswork in skincare shopping. The app identifies and recommends products specifically suited to your skin’s needs, ensuring you invest only in solutions that truly work."
  },
  {
    icon: "/icons/dumbbell.svg",
    title: "Lifestyle Integration for Holistic Skin Health",
    description: "Healthy skin goes beyond products. Our app also offers lifestyle tips—focusing on nutrition, hydration, sleep, and stress management—so you can improve your skin from the inside out."
  },
  {
    icon: "/icons/backpack.svg",
    title: "Educational Resources and Skincare Workshops",
    description: "Take control of your skin journey by learning from the experts. Elaryion offers access to in-depth guides, video tutorials, and live workshops on topics like tackling acne, reducing pigmentation, anti-aging techniques, and building the perfect skincare routine."
  }
] 