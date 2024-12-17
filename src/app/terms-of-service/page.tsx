"use client"

import React from "react";
import NavbarOther from "@/components/NavbarOther";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-sm leading-relaxed">
              Please read these terms and conditions carefully before using our services. By accessing or using Elaryion's services, you agree to be bound by these terms.
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
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and 
                  provision of this agreement.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Use License
                </h2>
                <ul className="text-gray-600 space-y-3">
                  {[
                    'Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.',
                    'This is the grant of a license, not a transfer of title.',
                    'This license shall automatically terminate if you violate any of these restrictions.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Disclaimer
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on this website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including, 
                  without limitation, implied warranties or conditions of merchantability.
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