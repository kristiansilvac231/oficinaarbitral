import fs from 'fs'
import path from 'path'
import type { BlogPost } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostFilePath(slug: string): string {
  return path.join(BLOG_DIR, `${slug}.mdx`)
}

export function getPostSource(slug: string): string | null {
  const filePath = getPostFilePath(slug)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf-8')
}

// Sorts posts by date descending
export async function getAllPostsMeta(): Promise<BlogPost[]> {
  const { compileMDX } = await import('next-mdx-remote/rsc')
  const slugs = getAllPostSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const source = getPostSource(slug)
      if (!source) return null
      const { frontmatter } = await compileMDX<Omit<BlogPost, 'slug'>>({
        source,
        options: { parseFrontmatter: true },
      })
      return { ...frontmatter, slug }
    }),
  )

  return (posts.filter(Boolean) as BlogPost[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}
