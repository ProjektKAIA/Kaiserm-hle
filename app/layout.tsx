// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="de" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}