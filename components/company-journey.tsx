import { FadeIn } from "@/components/animations"
import { SectionHeader } from "@/components/ui/section-header"
import Image from "next/image"
import RingShape from "@/public/about/ring-shape.svg"
import BrandIcon from "@/public/brand-icon.svg"

export function CompanyJourney() {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Positivus was founded to help businesses navigate the digital landscape with innovative marketing strategies.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Positivus was named among the top 10 in digital digital marketing agencies.",
    },
    {
      year: "2023",
      title: "Innovation and Growth",
      description: "We launched our AI-powered marketing analytics platform to deliver even more sustainable results.",
    },
    {
      year: "2024",
      title: "Leading the Future",
      description:
        "This year, Positivus is pioneering the use of AI and immersive digital experiences to transform how brands connect with audiences.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 relative">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">        
          <SectionHeader 
          title="Our Journey"
          description="From humble beginnings to industry leadership, the Positivus has evolved to drive success for businesses
              worldwide."
        />
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <FadeIn>
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

          {/* Decorative circles */}
          <div className="absolute left-0 top-1/4 transform -translate-y-1/2 rotate-45 hidden lg:block">
          <Image src={RingShape} alt="check" width={100} height={100} />
          </div>
          <div className="absolute right-0 bottom-1/2 transform translate-y-1/2 hidden lg:block ">
            <Image src={RingShape} alt="check" width={400} height={400} />
          </div>
          </FadeIn>
          <div className="space-y-12 relative z-10">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="text-3xl md:text-4xl font-bold text-dark w-full md:w-[7rem]">{milestone.year}</div>
                  <div className="bg-dark text-white p-6 rounded-lg flex-1 max-w-2xl">
                    <div className="flex items-start gap-4">
                      <div className="p-1 rounded mt-1">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Image src={BrandIcon} 
                          alt="check"
                           width={20}
                           height={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
