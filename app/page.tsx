import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PracticeAreas from '@/components/PracticeAreas'
import WhyUs from '@/components/WhyUs'
import Team from '@/components/Team'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Team />
      <Process />
      <Reviews />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
