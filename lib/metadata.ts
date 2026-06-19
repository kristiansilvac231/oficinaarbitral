import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'

interface PageMetadataInput {
  title: string
  description: string
  path: string
  ogImageTitle?: string
  type?: 'website' | 'article'
  publishedTime?: string
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path,
  ogImageTitle,
  type = 'website',
  publishedTime,
  keywords,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`
  const imageTitle = ogImageTitle ?? title
  const ogImageUrl = `${SITE_URL}/og?title=${encodeURIComponent(imageTitle)}&desc=${encodeURIComponent(description.slice(0, 120))}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: keywords?.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'es_CL',
      type,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}
