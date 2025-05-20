import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import Illustration from "@/public/use-case/Illustration-Success-Story.svg"

export function SuccessStoryCta() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-neon p-8 md:p-12 relative rounded-[45px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <h2 className="text-dark font-bold text-3xl mb-4">Let's Create Your Next Success Story</h2>
                <p className="text-dark mb-6">
                  Contact us today to learn more about how our digital marketing services can help your business grow
                  and succeed online.
                </p>
                <Button className="font-normal text-xl px-[30px] py-[25px] border-dark bg-dark text-white
               hover:bg-white hover:text-dark transition-colors rounded-[14px] w-full md:w-auto ">Get your free proposal</Button>
              </div>
              <div className="hidden md:block relative h-[200px] md:h-[250px]">
                <div className="absolute -right-12 -top-12">
                  <Image
                    src={Illustration}
                    alt="Decorative elements"
                    width={350}
                    height={350}
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
