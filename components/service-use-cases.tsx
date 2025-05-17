import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function ServiceUseCases() {
  const useCases = [
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
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-8">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">Use Cases</h2>
            <p className="text-dark">Explore Real-Life Examples of Our Proven Digital Marketing Success</p>
          </div>
        </FadeIn>

        <div className="bg-dark text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div>
                  <h3 className="font-bold text-lg mb-3">{useCase.category}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  <Link
                    href={useCase.link}
                    className="inline-flex items-center text-neon font-medium hover:underline group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
