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
    name: 'Sarah Mitchell',
    role: 'Founder and CEO',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Emily Thompson',
    role: 'Chief Operating Officer',
    image: '/team/emily.jpg'
  },
  {
    name: 'John Davis',
    role: 'Chief Finance Officer',
    image: '/team/john.jpg'
  },
  {
    name: 'Rachel Adams',
    role: 'Chief Marketing Officer',
    image: '/team/rachel.jpg'
  }
]

export default function AboutPage() {
  return (
    <main>
      <NavbarOther />
      {/* Hero Section */}
      <section className="py-40" style={{ backgroundImage: "url('https://i.hizliresim.com/rxrnmdp.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white pl-6 border-l-4 border-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-sm leading-relaxed">
              Our team at Elaryion is composed of highly skilled professionals who are passionate about helping you achieve your business goals. With a diverse range of expertise in AI and technology, our team is dedicated to providing you with the guidance and personalized solutions you need.
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
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly push boundaries to deliver cutting-edge AI solutions.</p>
              </motion.div>
            ))}
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
          <div className="grid md:grid-cols-4 gap-8">
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
              We are always on the lookout for talented individuals who are
              enthusiastic about making a difference. Explore our career
              opportunities and join us in our mission to help people achieve
              their health and wellness goals.
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