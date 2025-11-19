// src/components/sections/HeroSection.tsx
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Gasthof Kaisermühle"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Gasthof Kaisermühle
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Traditionelle Gastfreundschaft seit Generationen
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Reservieren
          </a>
          <a 
            href="#historie" 
            className="bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  )
}