import { BlogHero } from "@/components/blog-hero"
import { BlogAuthor } from "@/components/blog-author"
import { BlogContent } from "@/components/blog-content"
import { BlogStats } from "@/components/blog-stats"
import { BlogExamples } from "@/components/blog-examples"
import { BlogTakeaways } from "@/components/blog-takeaways"
import { RelatedPosts } from "@/components/related-posts"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <BlogAuthor />
      <BlogContent />
      <BlogStats />
      <BlogExamples />
      <BlogTakeaways />
      <RelatedPosts />
    </main>
  )
}
