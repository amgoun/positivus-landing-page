import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function FeaturedSuccessStory() {
  const metrics = [
    {
      value: "200%",
      label: "increase in organic traffic",
    },
    {
      value: "150%",
      label: "rise in online sales",
    },
    {
      value: "75%",
      label: "reduction in bounce rate (PPC)",
    },
    {
      value: "300%",
      label: "improvement in conversion rate",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-dark text-white p-8 md:p-12 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-6">Featured Success Story</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Scaling Success for a Leading E-Commerce Brand</h2>
                <p className="mb-6">
                  Through a comprehensive SEO and PPC strategy, we helped an e-commerce brand increase traffic, and
                  boost sales.
                </p>
                <Link
                  href="/use-cases/e-commerce-success"
                  className="inline-flex items-center text-neon font-medium hover:underline group"
                >
                  <span className="w-8 h-8 rounded-full bg-neon text-dark flex items-center justify-center mr-2 group-hover:bg-white transition-colors duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Read</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white text-dark p-6 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
