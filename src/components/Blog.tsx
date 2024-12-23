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
          Our Blog: Your Skin’s Best Ally
        </motion.h2>
        <motion.p 
          className="mt-1 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stay informed with the latest insights, tips, and trends from skincare experts to help you achieve and maintain your best skin ever.
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
            <Link href={post.link} className="group flex flex-col h-full focus:outline-none">
              <div className="relative w-full rounded-xl overflow-hidden aspect-square">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="mt-7 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-800">
                  {post.excerpt}
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-[#799DBC] decoration-2 group-hover:underline font-medium">
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
      <br /><br /><br /><br />
    </section>
  )
}

const blogPosts = [
  {
    title: "How Personalized Skincare Can Transform Your Routine",
    excerpt: "Discover the power of personalized skincare and how it adapts to your unique skin type and concerns, ensuring a regimen that truly works.",
    image: "/post1.png",
    link: "/blog/post-1"
  },
  {
    title: "Debunking Skincare Myths: What Really Works",
    excerpt: "Separate fact from fiction with our expert take on common skincare myths and learn how to make smarter, evidence-based choices for your skin.",
    image: "/post2.png",
    link: "/blog/post-2"
  },
  {
    title: "The Role of Technology in Modern Skincare",
    excerpt: "Explore how cutting-edge technology, like Elaryion's skin analysis app, is reshaping the way we approach skin health and beauty.",
    image: "/post3.png",
    link: "/blog/post-3"
  }
] 