import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: 'AERA | Premier Producteur de Nicotine Pouches en Algerie',
  description: 'AERA - Le premier producteur de nicotine pouches en Algerie. Production locale, standards internationaux, sans fumee ni tabac.',
  keywords: ['nicotine pouches', 'AERA', 'Algerie', 'sans tabac', 'sans fumee'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
