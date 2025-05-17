import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./animations"
import Illustraion from '../public/illustration.svg';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h1 className="text-dark">Navigating the digital landscape for success</h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-dark max-w-lg">
                Our digital marketing agency helps businesses grow and succeed online through tailored strategies and
                data-driven solutions. Partner with us to elevate your digital presence.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
            <Button
              variant="outline"
              className=" font-normal text-xl px-[30px] py-[25px] border-dark bg-dark text-white
               hover:bg-white hover:text-dark transition-colors rounded-[14px] w-full md:w-auto "
            >
              Get Started
            </Button>
            </FadeIn>
          </div>
          <FadeIn delay={0.4} direction="right">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0">
                <div className="relative w-full h-full ">
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <Image
                      src={Illustraion}
                      alt="Digital marketing illustration"
                      width={600.46}
                      height={515}
                      className="object-contain mt-32 md:mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
