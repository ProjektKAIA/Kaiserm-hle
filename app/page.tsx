// app/page.tsx
import Navigation from '../src/components/layout/Navigation'
import HeroSection from '../src/components/sections/HeroSection'
import AboutSection from '../src/components/sections/AboutSection'
import ServicesSection from '../src/components/sections/ServicesSection'
import ContactSection from '../src/components/sections/ContactSection'
import Footer from '../src/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}