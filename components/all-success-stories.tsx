import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function AllSuccessStories() {
  const successStories = [
    {
      category: "E-commerce Fashion Brand",
      description:
        "We implemented a tailored SEO strategy that improved organic search rankings, leading to a 200% increase in website traffic, enhanced user experience, and a 150% rise in online sales.",
      link: "/use-cases/e-commerce-fashion",
    },
    {
      category: "Local Restaurant Chain",
      description:
        "By optimizing local SEO and implementing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
      link: "/use-cases/local-restaurant",
    },
    {
      category: "Healthcare Provider",
      description:
        "Through content optimization and targeted healthcare strategy, we helped a healthcare provider improve their online presence and services, resulting in a 180% increase in inquiries and patient appointments.",
      link: "/use-cases/healthcare-provider",
    },
    {
      category: "E-commerce Fashion Brand",
      description:
        "We implemented a tailored SEO strategy that improved organic search rankings, leading to a 200% increase in website traffic, enhanced user experience, and a 150% rise in online sales.",
      link: "/use-cases/e-commerce-fashion-2",
    },
    {
      category: "Local Restaurant Chain",
      description:
        "By optimizing local SEO and implementing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
      link: "/use-cases/local-restaurant-2",
    },
    {
      category: "Healthcare Provider",
      description:
        "Through content optimization and targeted healthcare strategy, we helped a healthcare provider improve their online presence and services, resulting in a 180% increase in inquiries and patient appointments.",
      link: "/use-cases/healthcare-provider-2",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">All Success Stories</h2>
            <p className="text-dark">
              Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
          </div>
        </FadeIn>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {successStories.map((story, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div
                  className={`p-6 ${index % 3 !== 2 ? "md:border-r" : ""} ${
                    index < successStories.length - 3 ? "border-b" : ""
                  } border-gray-200`}
                >
                  <h3 className="font-bold text-lg mb-3">{story.category}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{story.description}</p>
                  <Link
                    href={story.link}
                    className="inline-flex items-center text-dark font-medium hover:text-neon transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full bg-neon text-dark flex items-center justify-center mr-2">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span>Learn more</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
