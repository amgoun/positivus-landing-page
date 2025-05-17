import { FadeIn } from "@/components/animations"
import Image from "next/image"

export function FounderQuote() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-dark text-white p-8 md:p-12 rounded-[45px] relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="hidden lg:block lg:w-1/2 relative">
                <div className="absolute left-0 transform -translate-y-1/3">
                  <Image 
                    src="/about/Illustration-founder.svg" 
                    alt="Founder Quote" 
                    width={380} 
                    height={400}
                    className="object-contain" 
                  />
                </div>
              </div>
              <div className="w-full text-center lg:text-left lg:w-1/2 relative z-10 lg:pr-8">
                <p className="text-2xl md:text-3xl mb-6 mx-auto lg:ml-4 max-w-2xl lg:max-w-none">
                  "At Positivus, we believe that<br />
                  success is built on<br />
                  innovation, collaboration,<br />
                  and a relentless focus on<br />
                  delivering results."
                </p>
                <p className="text-gray-400 mx-auto lg:ml-4">— John Smith, Founder of Positivus</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
