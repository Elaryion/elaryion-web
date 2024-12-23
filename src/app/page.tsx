import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import ChatBubble from '@/components/ChatBubble'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 bg-white">
        <Hero />
        <Features/>
        <Newsletter />
        <FAQ />
        <Blog />
        <Footer />
      </div>
      <ChatBubble />
    </main>
  )
}
