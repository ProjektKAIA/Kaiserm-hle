// app/components/About.tsx
export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Über uns
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl text-center text-gray-900 font-medium">
              Herzlich willkommen im Gasthof Kaisermühle, einem historischen Juwel und einem der ältesten Gebäude in der bezaubernden Stadt Viersen.
            </p>

            <p>
              Wir sind stolz darauf, Ihnen eine einzigartige Erfahrung zu bieten, bei der die Vergangenheit lebendig wird und Sie in den warmen Bann unserer traditionsreichen Gemäuer gezogen werden.
            </p>

            <p>
              Inmitten der geschichtsträchtigen Kulisse von Viersen gelegen, erwartet Sie im Gasthof Kaisermühle eine Atmosphäre, die von Geschichte und Tradition durchdrungen ist.
            </p>

            <p>
              Unsere jahrhundertealten Mauern haben zahllose Geschichten zu erzählen, und wir laden Sie ein, Teil dieses faszinierenden Erbes zu sein, während Sie sich in unserem liebevoll restaurierten Gasthof niederlassen.
            </p>

            <p className="text-center font-medium text-gray-900 pt-4">
              Tauchen Sie ein in die Geschichte und den Zauber, den der Gasthof Kaisermühle zu bieten hat. Hier erwartet Sie eine Zeitreise, bei der Vergangenheit und Gegenwart in Harmonie verschmelzen.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg">
              {/* TODO: Ersetzen durch echtes Bild */}
              <div className="w-full h-full flex items-center justify-center text-primary-700">
                <span className="text-sm font-medium">Außenansicht</span>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg">
              {/* TODO: Ersetzen durch echtes Bild */}
              <div className="w-full h-full flex items-center justify-center text-primary-700">
                <span className="text-sm font-medium">Innenansicht</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://historischergasthofkaisermuehle.bookpage.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Jetzt Ihren Aufenthalt buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}