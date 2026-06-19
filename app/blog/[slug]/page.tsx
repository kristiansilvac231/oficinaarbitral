import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { PostBody } from '@/components/blog/PostBody'
import { getAllPostSlugs, getPostSource } from '@/lib/blog'
import { SITE_URL } from '@/lib/constants'
import type { BlogPost } from '@/types'

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const source = getPostSource(slug)
  if (!source) return {}

  const { frontmatter } = await compileMDX<Omit<BlogPost, 'slug'>>({
    source,
    options: { parseFrontmatter: true },
  })

  return buildMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: frontmatter.date,
    keywords: frontmatter.keywords,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const source = getPostSource(slug)
  if (!source) notFound()

  const { content, frontmatter } = await compileMDX<Omit<BlogPost, 'slug'>>({
    source,
    options: { parseFrontmatter: true },
  })

  const formattedDate = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(frontmatter.date))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'Oficina Arbitral',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oficina Arbitral',
      url: SITE_URL,
    },
    keywords: frontmatter.keywords?.join(', '),
  }

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Blog jurídico', href: '/blog' },
              { label: frontmatter.title },
            ]}
          />

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/50">
            <span className="bg-gold-500/20 text-gold-300 border border-gold-400/20 rounded-full px-3 py-0.5 text-xs font-medium">
              {frontmatter.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={frontmatter.date}>{formattedDate}</time>
            </span>
            {frontmatter.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {frontmatter.readingTime} min de lectura
              </span>
            )}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-5 leading-tight">
            {frontmatter.title}
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            {frontmatter.description}
          </p>
        </div>
      </div>

      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PostBody content={content} />

          <div className="mt-12 pt-8 border-t border-navy-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
