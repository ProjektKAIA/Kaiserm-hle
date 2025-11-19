// src/components/layout/Navigation.tsx
export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-32 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-sm text-gray-600">LOGO</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition">
              Start
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition">
              Über uns
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition">
              Angebot
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}