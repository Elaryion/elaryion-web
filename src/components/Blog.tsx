'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <motion.h2 
          className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Blog For You
        </motion.h2>
        <motion.p 
          className="mt-1 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stay updated with the latest insights from our mental health experts
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={post.link} className="group flex flex-col focus:outline-none">
              <div className="relative pt-[70%] rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                />
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-800">
                  {post.excerpt}
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Read more
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const blogPosts = [
  {
    title: "How Mental Health Consultants Can Help...",
    excerpt: "Learn more about the role of mental health consultants in promoting wellness and creating positive change in organizations and communities.",
    image: "/get-on-top-of-mental-health-early.webp",
    link: "/blog/post-1"
  },
  {
    title: "Understanding Workplace Mental Health",
    excerpt: "Discover effective strategies for maintaining mental well-being in the workplace and creating a supportive environment for all employees.",
    image: "/get-on-top-of-mental-health-early.webp",
    link: "/blog/post-2"
  },
  {
    title: "The Impact of Mental Health Support",
    excerpt: "Explore how professional mental health support can transform lives and contribute to building stronger, more resilient communities.",
    image: "/get-on-top-of-mental-health-early.webp",
    link: "/blog/post-3"
  }
] 