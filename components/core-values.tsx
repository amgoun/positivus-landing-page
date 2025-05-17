import Image from "next/image"
import { FadeIn } from "@/components/animations"
import { SectionHeader } from "./ui/section-header"

export function CoreValues() {
  const values = [
    {
      title: "Client Success First",
      description:
        "We are dedicated to achieving measurable results for our clients. Their success is our success, and we prioritize their business goals and drive them towards success.",
    },
    {
      title: "Innovation",
      description:
        "We constantly strive to find better solutions for our clients through creative thinking and trends.",
      icon: "/about/about-illustration-2.png",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership.",
      icon:"/about/about-illustration-3.png",
    },
    {
      title: "Transparency",
      description:
        "We build trust through honest communication. We keep our clients informed every step of the way to ensure trust and clarity.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
          <SectionHeader 
            title="Core Values"
            description="At the heart of everything we do are our core values."
          />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <FadeIn key={index} delay={0.15 * index}>
              <div className="border-2 border-dark/50 rounded-[45px] p-8 h-full bg-white"
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}>
                <h3 className="font-bold text-2xl mb-4">{value.title}</h3>
                <div className="h-px bg-gray-200 w-full mb-6"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                  {(index === 1 || index === 2) && value.icon && (
                    <div className="relative flex-shrink-0">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        width={150}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
