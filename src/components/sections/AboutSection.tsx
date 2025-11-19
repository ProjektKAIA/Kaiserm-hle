// src/components/sections/AboutSection.tsx
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="historie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Historie
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Der Gasthof Kaisermühle steht seit Generationen für herzliche Gastfreundschaft 
              und kulinarische Tradition. In unserem historischen Gebäude verbinden wir 
              traditionelle Werte mit modernem Komfort.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Unsere Küche verwöhnt Sie mit regionalen Spezialitäten und internationalen 
              Köstlichkeiten, zubereitet aus frischen, lokalen Zutaten.
            </p>
            <p className="text-gray-600 text-lg">
              Besuchen Sie uns und erleben Sie unvergessliche Momente in gemütlicher Atmosphäre.
            </p>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/about.png"
              alt="Gasthof Kaisermühle Historisches Gebäude"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}