import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Manifesto from '@/components/sections/Manifesto'
import Ecosystem from '@/components/sections/Ecosystem'
import Principles from '@/components/sections/Principles'
import MovementNumbers from '@/components/sections/MovementNumbers'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <Marquee />
        <Manifesto />
        <Ecosystem />
        <Principles />
        <MovementNumbers />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
