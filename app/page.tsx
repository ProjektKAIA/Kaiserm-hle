// app/page.tsx
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
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