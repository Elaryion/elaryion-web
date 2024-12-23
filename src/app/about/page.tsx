'use client'
import React from 'react'
import Footer from '@/components/Footer'
import NavbarOther from '@/components/NavbarOther'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Yared',
    role: 'Founder and CEO',
    image: '/team/yared.png'
  },
  {
    name: 'A. (G.) V',
    role: 'Chief Operating Officer',
    image: '/team/agv.png'
  },
  {
    name: 'Ömer',
    role: 'Chief Developer',
    image: '/team/omer.png'
  },
  {
    name: 'Danylo',
    role: 'Chief AI Officer',
    image: '/team/danylo.png'
  },
  {
    name: 'Liana',
    role: 'Chief Finance Officer',
    image: '/team/liana.png'
  }
]

export default function AboutPage() {
  return (
    <main>
      <NavbarOther />
      {/* Hero Section */}
      <section className="py-20 md:py-40" style={{ backgroundImage: "url('https://i.hizliresim.com/rxrnmdp.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white pl-4 md:pl-6 border-l-2 md:border-l-4 border-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Meet the Minds Behind Elaryion
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
            At Elaryion, our team of dedicated skincare enthusiasts, AI experts, and dermatology specialists
work together to revolutionize how you care for your skin. With a shared passion for innovation
and a deep understanding of skin science, we strive to create technology-driven solutions that
empower you to look and feel your best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
              We constantly push boundaries to deliver cutting-edge AI solutions that revolutionize
              skincare, ensuring your beauty journey is smarter, faster, and more effective.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">
              We believe in empowering individuals to take control of their skincare with personalized
              tools and expert knowledge tailored to their unique needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
              Caring for your skin and the planet go hand in hand. We prioritize eco-friendly practices
              and sustainable solutions in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Team
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48 md:h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 md:py-32 px-4 md:px-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row overflow-hidden relative gap-4 md:gap-10 items-center md:items-start py-6 md:py-10 px-6 md:px-10 rounded-xl border border-solid bg-primary border-slate-400"
        >
          <div className="hidden md:flex absolute bottom-0 z-0 shrink-0 self-start h-[134px] right-[-37px] w-[134px]" />
          <svg 
            width="156" 
            height="108" 
            viewBox="0 0 156 108" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block object-contain absolute top-0 z-0 shrink-0 self-start w-56 h-36 aspect-[2.11] left-[-69px]"
          >
            <path 
              d="M22.9222 -37.859L102.547 5.66062L22.8934 -19.1628L99.2867 22.5777L-26.7642 -22.5146L154.425 66.6055L-68.8149 -15.6194L102.457 64.069L-26.8384 25.6587L78.1799 78.9067L-19.2469 45.8678L43.4905 105.465" 
              stroke="#9CCFD8" 
              strokeWidth="5.12" 
              strokeDasharray="1.35 1.35"
            />
          </svg>
          <div className="flex z-0 flex-col flex-1 text-center md:text-left shrink my-auto text-orange-50 basis-12">
            <div className="text-xl md:text-2xl font-semibold">
              Join Our Team
            </div>
            <div className="mt-3.5 text-sm font-medium leading-7">
            Are you passionate about innovation and skincare? At Elaryion, we're always looking for talented
individuals who are driven to make a difference. Be a part of a forward-thinking team that's
transforming the skincare industry through advanced AI and cutting-edge technology. Explore
our career opportunities and help us empower people to achieve their best skin yet
            </div>
          </div>
          <button className="mt-4 md:mt-0 gap-2 px-6 py-3 text-sm font-semibold bg-tertiary rounded-lg text-neutral-800 hover:bg-tertiary/90 transition-colors">
            Apply Now
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
} 