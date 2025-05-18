import Image from "next/image"
import { FadeIn } from "@/components/animations"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8 lg:px-16 bg-light container mx-auto rounded-[45px] mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="/services/services-illustration.png"
                  alt="Digital marketing services illustration"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <h1 className="text-dark">Expert Digital Marketing Services</h1>
              <p className="text-dark max-w-lg">
                We offer comprehensive digital marketing services with tailored strategies designed to drive growth and
                deliver results.
              </p>
            </div>
          </FadeIn>
        </div>
       
      </div>
    </section>
  )
}
