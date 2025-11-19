// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gasthof Kaisermühle</h3>
            <p className="text-gray-400">
              Traditionelle Gastfreundschaft seit Generationen
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Start
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Angebot
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Gasthof Kaisermühle. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}