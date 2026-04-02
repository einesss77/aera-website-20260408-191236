import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'ÆERA | Premier Producteur de Nicotine Pouches en Algerie',
  description: 'ÆERA - Le premier producteur de nicotine pouches en Algerie. Production locale, standards internationaux, sans fumee ni tabac.',
  keywords: ['nicotine pouches', 'AERA', 'Algerie', 'sans tabac', 'sans fumee'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
