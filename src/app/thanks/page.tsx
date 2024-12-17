import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { CheckCircle } from 'lucide-react'

export default function ThanksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 sm:py-16">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Thank You!
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md text-center px-4">
          Your message has been successfully sent. We will get back to you as soon as possible.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border border-transparent 
            text-sm sm:text-base font-medium rounded-full text-white bg-blue-600 
            hover:bg-blue-700 transition-colors duration-200 
            shadow-sm hover:shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
