import Image from "next/image"
import { FadeIn } from "@/components/animations"
import { SectionHeader } from "./ui/section-header"

export function Awards() {
  const awards = [
    {
      title: "Best Small Business Digital Marketing Agency of the Year",
      organization: "Digital Excellence Awards",
      description:
        "Recognized for outstanding performance in helping small businesses achieve exceptional growth through innovative digital strategies.",
      logo: "/about/silver.svg",
    },
    {
      title: "Innovative Website Design",
      organization: "Web Design Awards",
      description:
        "Honored for creating websites that combine aesthetic excellence with exceptional user experience and conversion-focused functionality.",
      logo: "/about/quality.svg",
    },
    {
      title: "Top Performing PPC Campaign",
      organization: "Search Marketing Awards",
      description:
        "Acknowledged for creating and managing a PPC campaign that delivered 500% ROI for a client in the competitive SaaS industry.",
      logo: "/about/guranteed.svg",
    },
    {
      title: "Excellence in Social Media Marketing",
      organization: "Social Media Excellence Awards",
      description:
        "Recognized for developing innovative social media strategies that significantly increased brand awareness and engagement for our clients.",
      logo: "/about/edition.svg",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <SectionHeader 
            title="Awards & Recognition"
            description=" Positivus, our commitment to excellence has been recognized through various industry awards and
              accolades."
          />

          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-light p-6 rounded-[45px] h-full flex flex-col">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <Image
                    src={award.logo || "/placeholder.svg"}
                    alt={award.organization}
                    width={100}
                    height={100}
                    className="object-contain mt-8 "
                  />
                </div>
                <h3 className="font-bold text-sm mb-2 py-6 mt-6">{award.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{award.organization}</p>
                <p className="text-sm text-gray-600 mt-auto mb-4">{award.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
