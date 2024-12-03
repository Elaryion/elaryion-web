'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <section className="py-36 max-w-[85rem] mx-auto">
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
            Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
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
                  <img
                    loading="lazy"
                    src={feature.icon}
                    className="object-contain w-10 aspect-square"
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
    icon: "/icons/plant.svg",
    title: "Personalized Nutrition Plans",
    description: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that helps you best."
  },
  {
    icon: "/icons/graduationcap.svg",
    title: "Guidance from Certified Nutritionists",
    description: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals."
  },
  {
    icon: "/icons/fork-knife.svg",
    title: "Food Tracking and Analysis",
    description: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations."
  },
  {
    icon: "/icons/plan.svg",
    title: "Meal Planning and Recipes",
    description: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals."
  },
  {
    icon: "/icons/dumbbell.svg",
    title: "Lifestyle and Behavior Coaching",
    description: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way."
  },
  {
    icon: "/icons/backpack.svg",
    title: "Nutritional Education and Workshops",
    description: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success."
  }
] 