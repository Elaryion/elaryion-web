'use client'

import React from 'react';
import NavbarOther from "@/components/NavbarOther";

import { motion } from "framer-motion";
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function CookiePolicy() {
  return (
    <main>
      <NavbarOther />
      {/* Hero Section */}
      <section className="py-40" style={{ backgroundImage: "url('https://i.hizliresim.com/rxrnmdp.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:0.6 }}
            className="max-w-3xl text-white pl-6 border-l-4 border-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm leading-relaxed">
              At Elaryion, we value your privacy and aim to be transparent about how we use cookies on our website. This policy explains what cookies are, how we use them, and how you can control them.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </span>
                What Are Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer by websites that you visit. 
                They are widely used to make websites work more efficiently and provide information to 
                the owners of the site.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                  </svg>
                </span>
                How We Use Cookies
              </h2>
              <ul className="text-gray-600 space-y-3">
                {[
                  'Essential cookies: Required for the website to function properly',
                  'Analytics cookies: Help us understand how visitors interact with our website',
                  'Marketing cookies: Used to track visitors across websites'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </span>
                Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>
          </div>
          </div>
        </div>
      </div>  
      <Newsletter showBackground={false} /> 
      <Footer />
    </main>
  );
} 