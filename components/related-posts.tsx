import { FadeIn } from "@/components/animations"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTitle } from "./section-title"

export function RelatedPosts() {
  const posts = [
    {
      title: "10 SEO Myths You Need to Stop Believing",
      description: "Discover common SEO misconceptions that might be holding back your search performance and learn the truth behind each myth.",
      href: "#",
    },
    {
      title: "Maximizing ROI with Social Media Advertising",
      description: "Learn proven strategies for creating efficient, high-converting social media advertising campaigns that deliver measurable results.",
      href: "#",
    },
    {
      title: "How Content Marketing Fuels Business Growth",
      description: "Explore how strategic content marketing can drive organic traffic, establish authority, and generate qualified leads for your business.",
      href: "#",
    },
    {
      title: "The Art of A/B Testing: Perfecting Your Campaigns",
      description: "Discover how systematic testing reveals what resonates with your audience and how to implement data-driven improvements.",
      href: "#",
    },
    {
      title: "Understanding Google's Latest Algorithm Update",
      description: "Stay ahead by understanding how recent changes to Google's algorithms affect your website's visibility and ranking factors.",
      href: "#",
    },
    {
      title: "5 Ways AI is Changing Digital Marketing",
      description: "Understand how artificial intelligence is transforming the digital marketing landscape and how businesses can leverage these innovations.",
      href: "#",
    },
  ]

  return (
    <section className="container mx-auto rounded-[45px] py-16 px-4  mb-8 md:px-8 lg:px-16 bg-light">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="inline-block bg-neon px-4 py-1 font-bold text-dark rounded-md mb-4">
              Explore More Insights
            </div>
            <p className="text-dark max-w-lg">
              Discover insights into strategies and trends to keep you ahead in the digital marketing world.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col">
                  <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{post.description}</p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-dark font-medium hover:text-neon transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-neon text-dark flex items-center justify-center mr-2">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span>Read article</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
} 