import Image from "next/image"
import { FadeIn } from "@/components/animations"
import { SectionHeader } from "@/components/ui/section-header"
import { CustomCard } from "@/components/ui/custom-card"

export function CoreValues() {
  const values = [
    {
      title: "Innovation and Creativity",
      description: "We stay ahead of digital trends and technologies, bringing fresh perspectives and innovative solutions to every project.",
    },
    {
      title: "Data-Driven Decisions",
      description: "Our strategies are built on solid data analysis, ensuring measurable results and continuous improvement.",
      icon: "/company/data.svg",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional results that exceed expectations.",
      icon: "/company/success.svg",
    },
    {
      title: "Transparency",
      description: "We believe in open communication and complete transparency in our processes and reporting.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Core Values"
            description="At the heart of everything we do are our core values."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <FadeIn key={index} delay={0.15 * index}>
              <CustomCard
                {...value}
                showDivider={true}
                iconSize={{ width: 150, height: 120 }}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
