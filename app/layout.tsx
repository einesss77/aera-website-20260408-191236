import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { IntroWrapper } from '@/components/intro-animation'
import { LanguageProvider } from '@/components/language-provider'
import { siteConfig } from '@/lib/site'

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'AERA | Premium Nicotine Pouches in Algeria',
    template: '%s | AERA',
  },
  description:
    'AERA, the first producer of nicotine pouches in Algeria. Local production, international standards, smoke-free and tobacco-free alternatives.',
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'AERA | Premium Nicotine Pouches in Algeria',
    description:
      'Discover AERA nicotine pouches: locally produced in Algeria, premium design, international standards, smoke-free and tobacco-free.',
    siteName: siteConfig.name,
    locale: 'fr_FR',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AERA Premium Edition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AERA | Premium Nicotine Pouches in Algeria',
    description:
      'Discover AERA nicotine pouches: locally produced in Algeria, premium design, international standards, smoke-free and tobacco-free.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'consumer goods',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    email: 'contact@aeratobacco.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressCountry: 'DZ',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ['fr', 'en'],
  }

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
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
