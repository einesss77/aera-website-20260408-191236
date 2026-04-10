import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { IntroWrapper } from '@/components/intro-animation'
import { LanguageProvider } from '@/components/language-provider'

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
  title: 'AERA | Premier producteur de nicotine pouches en Algérie',
  description: 'AERA, le premier producteur de nicotine pouches en Algérie. Production locale, standards internationaux, sans fumée ni tabac.',
  keywords: ['nicotine pouches', 'AERA', 'Algérie', 'sans tabac', 'sans fumée'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-body antialiased`}>
        <LanguageProvider>
          <IntroWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </IntroWrapper>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
