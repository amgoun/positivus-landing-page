import Image from "next/image"
import { FadeIn } from "@/components/animations"

export function Awards() {
  const awards = [
    {
      title: "Best Small Business Digital Marketing Agency of the Year",
      organization: "Digital Excellence Awards",
      description:
        "Recognized for outstanding performance in helping small businesses achieve exceptional growth through innovative digital strategies.",
      logo: "/images/award-logo-1.svg",
    },
    {
      title: "Innovative Website Design",
      organization: "Web Design Awards",
      description:
        "Honored for creating websites that combine aesthetic excellence with exceptional user experience and conversion-focused functionality.",
      logo: "/images/award-logo-2.svg",
    },
    {
      title: "Top Performing PPC Campaign",
      organization: "Search Marketing Awards",
      description:
        "Acknowledged for creating and managing a PPC campaign that delivered 500% ROI for a client in the competitive SaaS industry.",
      logo: "/images/award-logo-3.svg",
    },
    {
      title: "Excellence in Social Media Marketing",
      organization: "Social Media Excellence Awards",
      description:
        "Recognized for developing innovative social media strategies that significantly increased brand awareness and engagement for our clients.",
      logo: "/images/award-logo-4.svg",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">Awards & Recognition</h2>
            <p className="text-dark">
              At Positivus, our commitment to excellence has been recognized through various industry awards and
              accolades.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-light p-6 rounded-lg h-full flex flex-col">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <Image
                    src={award.logo || "/placeholder.svg"}
                    alt={award.organization}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-sm mb-2">{award.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{award.organization}</p>
                <p className="text-sm text-gray-600 mt-auto">{award.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
