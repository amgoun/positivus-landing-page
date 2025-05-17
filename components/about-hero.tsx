import Image from "next/image"
import { FadeIn } from "@/components/animations"

export function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 lg:px-16 ">
      <div className="container  bg-light mx-auto py-10 lg:px-16 rounded-[45px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                {/* Trophy illustration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/about/about-illustration.png"
                    alt="Trophy illustration"
                    width={475}
                    height={450}
                    className="object-contain"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-neon rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-neon transform rotate-45"></div>
                <div className="absolute top-3/4 left-1/3 w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#191A23"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <h1 className="text-dark">Together for <br /> Success</h1>
              <p className="text-dark max-w-lg">
                At Positivus, we help businesses grow by mastering creativity, innovation, and data-driven strategies.
                We're committed to a culture of shared success.
              </p>
              
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
