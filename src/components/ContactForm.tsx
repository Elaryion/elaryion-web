'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contact Us Today for<br />
              Personalized Support<br />
              and Assistance
            </h2>
                <p className="text-secondary mb-8">
                  We&apos;d love to hear from you! Whether you have questions about our services, need assistance, or just want to share your feedback, our team is here to help you achieve your skincare goals.
                </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contact@domain.com" className="text-primary hover:text-primary-hover">
                  contact@domain.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form action="https://formsubmit.co/planes-trunks-33@icloud.com" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+49 123 456 7890"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-hover transition-colors"
              >
                Send message
              </button>
              <input type="hidden" name="_subject" value="New Contact Form Submission!"></input>
              <input type="hidden" name="_next" value="https://elaryion.vercel.app/thanks"></input>
              <input type="hidden" name="_template" value="table"></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 