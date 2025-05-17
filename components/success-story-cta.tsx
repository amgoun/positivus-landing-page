import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export function SuccessStoryCta() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-neon rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <h2 className="text-dark font-bold text-3xl mb-4">Let's Create Your Next Success Story</h2>
                <p className="text-dark mb-6">
                  Contact us today to learn more about how our digital marketing services can help your business grow
                  and succeed online.
                </p>
                <Button className="bg-dark text-white hover:bg-dark/90">Get your free proposal</Button>
              </div>
              <div className="relative h-[200px] md:h-[250px]">
                <div className="absolute right-0 top-0">
                  <Image
                    src="/images/success-story-decoration.svg"
                    alt="Decorative elements"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
