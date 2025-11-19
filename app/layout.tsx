// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Gasthof Kaisermühle - Historisches Juwel in Viersen',
  description: 'Herzlich willkommen im Gasthof Kaisermühle, einem historischen Juwel und einem der ältesten Gebäude in der bezaubernden Stadt Viersen.',
  keywords: 'Gasthof, Hotel, Restaurant, Viersen, Kaisermühle, historisch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}