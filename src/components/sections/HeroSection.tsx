// src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Gasthof Kaisermühle
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Traditionelle Gastfreundschaft seit Generationen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Reservieren
            </a>
            <a 
              href="#about" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
        
        <div className="mt-16 w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500 text-lg">Hero Image Platzhalter</span>
        </div>
      </div>
    </section>
  );
}