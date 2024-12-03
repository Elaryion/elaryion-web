import ContactForm from '@/components/ContactForm'
import ContactHeader from '@/components/ContactHeader'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Newsletter />
      <Footer />
    </main>
  )
} 