// app/components/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700">
        {/* TODO: Ersetzen durch: */}
        {/* <Image 
          src="/images/hero-banner.jpg" 
          alt="Gasthof Kaisermühle" 
          fill 
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
          Gasthof Kaisermühle
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
          Historisches Juwel in Viersen
        </p>
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Erleben Sie Geschichte und Tradition in einem der ältesten Gebäude der Stadt
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://historischergasthofkaisermuehle.bookpage.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
          >
            Jetzt Hotel buchen
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-all duration-200 w-full sm:w-auto"
          >
            Mehr erfahren
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce block">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}