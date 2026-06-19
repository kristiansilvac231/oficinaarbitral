import Link from 'next/link'
import type { BlogPost } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(post.date))

  return (
    <article className="group bg-white rounded-xl border border-navy-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="bg-navy-50 text-navy-600 text-xs">
            {post.category}
          </Badge>
        </div>

        <h2 className="font-heading font-bold text-navy-800 text-xl mb-2 group-hover:text-navy-600 transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {post.title}
          </Link>
        </h2>

        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-xs text-navy-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{post.readingTime} min de lectura</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pb-5">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors"
          aria-label={`Leer artículo: ${post.title}`}
        >
          Leer artículo →
        </Link>
      </div>
    </article>
  )
}
