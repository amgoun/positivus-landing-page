import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export function ServicesCta() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="border border-gray-200 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-dark font-bold text-3xl mb-4">Ready to Elevate Your Search Rankings?</h2>
                <p className="text-gray-600 mb-6">
                  Our proven SEO strategies are designed to help your business website rank higher in search engines to
                  attract qualified leads and drive conversions. Whether you're just starting out or looking to improve
                  your existing SEO efforts, we're here to help.
                </p>
                <p className="text-gray-600 mb-6">Let's work together to grow your online presence.</p>
                <Button className="bg-neon text-dark hover:bg-neon/90 w-full md:w-auto">Start My SEO Journey</Button>
              </div>
              <div className="relative h-[250px] md:h-[300px]">
                <Image src="/images/seo-cta-illustration.svg" alt="SEO illustration" fill className="object-contain" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
