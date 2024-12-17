import ContactForm from '@/components/ContactForm'
import ContactHeader from '@/components/ContactHeader'
import Footer from '@/components/Footer'
import NavbarOther from '@/components/NavbarOther'
import Newsletter from '@/components/Newsletter'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <NavbarOther />
      <ContactHeader />
      <ContactForm />
      <Newsletter showBackground={false} />
      <Footer />
    </main>
  )
} 