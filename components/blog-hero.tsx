import { FadeIn } from "@/components/animations"
import Image from "next/image"
import Illustration from "@/public/illustration.svg"


export function BlogHero() {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-light rounded-[45px] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[280px]">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">               
                    <Image
                      src={Illustration}
                      alt="Digital marketing illustration"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block text-sm bg-white px-3 py-1 rounded-full">
                  Marketing Strategies
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  PPC vs. Organic Marketing: Which One Is Right for Your Business?
                </h1>
                <p className="text-gray-600 max-w-xl">
                  PPC and organic marketing each offer unique benefits for businesses. Let's examine your goals and how to strike the perfect balance.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
} 