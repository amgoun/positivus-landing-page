import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FadeIn } from "@/components/animations"

export function CallToAction() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <FadeIn>
        <div className="container mx-auto bg-light rounded-[45px] py-8 px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's make things happen</h2>
              <p className="text-lg mb-6">
                Contact us today to learn more about how our digital marketing services can help your business grow and
                succeed online.
              </p>
              <Button variant="outline" className="font-normal text-xl px-[30px] py-[25px] border-dark bg-dark text-white
                hover:bg-white hover:text-dark transition-colors rounded-[14px] w-full md:w-auto">
                Get your free proposal
              </Button>
            </div>
            <div className="relative h-[300px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative ">
                  <Image
                    src="/proposal.svg"
                    alt="Decorative illustration"
                    width={494}
                    height={394}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
