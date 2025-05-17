import Image from "next/image"
import { FadeIn } from "@/components/animations"

export function UseCasesHero() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 lg:px-16 bg-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] order-2 lg:order-1">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="/images/use-cases-illustration.svg"
                  alt="Digital marketing success illustration"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
            <div className="space-y-6">
              <h1 className="text-dark">Proven Success Stories</h1>
              <p className="text-dark max-w-lg">
                See how our innovative digital marketing strategies have transformed businesses. Whether through SEO,
                PPC, social media, or content marketing, our work has made a tangible impact on our work. Explore the
                successes and envision what we can achieve together.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
