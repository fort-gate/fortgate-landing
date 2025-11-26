import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import Features from '@/components/Features'
import Security from '@/components/Security'
import FlowSteps from '@/components/FlowSteps'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Features />
      <Security />
      <FlowSteps />
      <Join />
      <Footer />
    </main>
  )
}

