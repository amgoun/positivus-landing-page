import { FadeIn } from "@/components/animations"
import Image from "next/image"

export function FeaturedService() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-dark text-white p-8 md:p-12 rounded-[45px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Left side with icon and title */}
              <div className="lg:w-[260px] flex-shrink-0">
                <div className="flex items-center">
                  <Image 
                    src="/brand-icon.svg" 
                    alt="Brand Icon" 
                    width={24} 
                    height={24} 
                    className="mr-3 mt-1"
                  />
                  <div className="px-4 py-2 font-bold text-dark inline-block rounded-md">
                    <p className=" bg-neon rounded-t-md rounded-b-md ">Search engine </p>
                    <p className="bg-neon rounded-b-md mr-1">optimization</p>
                    
                  </div>
                </div>
              </div>

              {/* Right side with paragraph and button */}
              <div className="flex justify-center items-center w-full ">
              <div className="lg:flex-1 flex flex-col justify-between max-w-lg ">
                <p className="text-sm md:text-base mb-8 ">
                  SEO is the process of improving your website's visibility on search engines like Google. By 
                  optimizing your content and site structure, we help your business rank higher in search 
                  results, driving more organic traffic and potential customers.
                </p>
                
                <div>
                  <button className="bg-white text-dark px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full">
                    Boost My Rankings
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
