// app/page.tsx
import Navigation from '.src/components/layot/Navigation'
import Hero from '.src/components/sections/HeroSection'
import About from '.src/components/sections/AboutSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}