// src/components/layout/Navigation.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [hotelDropdownOpen, setHotelDropdownOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Gasthof Kaisermühle Logo" 
              width={128} 
              height={40}
              className="object-contain"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition">
              Start
            </a>
            <a href="#historie" className="text-gray-700 hover:text-gray-900 transition">
              Historie
            </a>
            
            {/* Hotel Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHotelDropdownOpen(true)}
              onMouseLeave={() => setHotelDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 transition flex items-center">
                Hotel
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {hotelDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a 
                    href="#zimmer-buchen" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Zimmer Buchen
                  </a>
                  <a 
                    href="#fotos" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Fotos
                  </a>
                </div>
              )}
            </div>

            <a href="#speisekarte" className="text-gray-700 hover:text-gray-900 transition">
              Speisekarte
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}