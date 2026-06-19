import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { PostCard } from '@/components/blog/PostCard'
import { getAllPostsMeta } from '@/lib/blog'

export const metadata: Metadata = buildMetadata({
  title: 'Blog jurídico — Arbitraje y partición de herencias en Chile',
  description:
    'Artículos sobre derecho de particiones, juicios arbitrales, remates judiciales y gestión de herencias en Chile. Orientación experta para jueces árbitros y comuneros.',
  path: '/blog',
  keywords: [
    'blog derecho arbitral Chile',
    'artículos partición herencia',
    'juicio arbitral Chile guía',
    'remate judicial Chile',
  ],
})

export default async function BlogPage() {
  const posts = await getAllPostsMeta()

  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog jurídico', href: '/blog' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Blog jurídico
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Artículos sobre derecho de particiones, arbitraje y gestión de herencias en Chile,
            escritos por el equipo de Oficina Arbitral.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy-400 text-lg">
                Próximamente: artículos sobre derecho de particiones en Chile.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              aria-label="Artículos del blog"
            >
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
