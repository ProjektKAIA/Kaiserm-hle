// src/components/sections/ContactSection.tsx
interface ContactInfoProps {
  title: string;
  content: string | string[];
}

function ContactInfo({ title, content }: ContactInfoProps) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      {Array.isArray(content) ? (
        content.map((line, index) => (
          <p key={index} className="text-gray-600">
            {line}
            {index < content.length - 1 && <br />}
          </p>
        ))
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const contactData = {
    address: ["Musterstraße 123", "12345 Musterstadt"],
    phone: "+49 123 456789",
    email: "info@kaisermuehle.de",
    openingHours: [
      "Montag - Freitag: 11:00 - 22:00 Uhr",
      "Samstag - Sonntag: 10:00 - 23:00 Uhr"
    ]
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kontakt
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Wir freuen uns auf Ihren Besuch! Reservieren Sie telefonisch oder 
              besuchen Sie uns direkt.
            </p>

            <div className="space-y-4">
              <ContactInfo title="Adresse" content={contactData.address} />
              <ContactInfo title="Telefon" content={contactData.phone} />
              <ContactInfo title="E-Mail" content={contactData.email} />
              <ContactInfo title="Öffnungszeiten" content={contactData.openingHours} />
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500 text-lg">Google Maps Platzhalter</span>
          </div>
        </div>
      </div>
    </section>
  );
}