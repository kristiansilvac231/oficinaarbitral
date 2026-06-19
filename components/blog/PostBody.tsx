interface PostBodyProps {
  content: React.ReactElement
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="prose prose-navy prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-800 prose-a:text-navy-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-800">
      {content}
    </div>
  )
}
