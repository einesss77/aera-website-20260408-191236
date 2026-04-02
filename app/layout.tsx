import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

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
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
