export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  keywords: string[]
  readingTime?: number
  image?: string
}

export interface BlogPostWithContent extends BlogPost {
  content: React.ReactElement
}

export type ContactFormState =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> }
  | null
