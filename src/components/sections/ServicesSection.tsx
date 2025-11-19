// src/components/sections/ServicesSection.tsx
interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-gray-500">Bild</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Restaurant",
      description: "Genießen Sie regionale und internationale Küche in gemütlicher Atmosphäre. Täglich frische Gerichte aus lokalen Zutaten."
    },
    {
      title: "Übernachtung",
      description: "Komfortable Zimmer mit modernem Komfort in historischem Ambiente. Perfekt für Ihren Aufenthalt in der Region."
    },
    {
      title: "Feiern",
      description: "Räumlichkeiten für Ihre Feierlichkeiten. Von Familienfesten bis zu Firmenveranstaltungen - wir machen Ihren Anlass unvergesslich."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unser Angebot
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältigen Angebote für jeden Anlass
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}