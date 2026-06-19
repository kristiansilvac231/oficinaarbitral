import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/lib/metadata'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, GA_MEASUREMENT_ID } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: { icon: '/favicon.ico' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Gestión profesional e integral de juicios arbitrales de partición en Chile. Expediente digital, comparendos vía Zoom, actas y coordinación de remate.',
  serviceType: 'Gestión de Juicios Arbitrales de Partición',
  areaServed: { '@type': 'Country', name: 'Chile' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressRegion: 'Región Metropolitana',
    addressLocality: 'Santiago',
    streetAddress: CONTACT_ADDRESS,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    availableLanguage: 'Spanish',
  },
  knowsAbout: [
    'Juicios Arbitrales',
    'Partición de Herencia',
    'Partición de Comunidad',
    'Derecho de Familia',
    'Remate Judicial',
  ],
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
