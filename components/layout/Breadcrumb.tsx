import Link from 'next/link'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: 'Inicio', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Ruta de navegación" className="text-sm text-navy-400 py-3">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true" className="text-navy-300">/</span>}
              {item.href && index < all.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-navy-700 transition-colors underline-offset-2 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
