"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { FadeIn } from "@/components/animations"
import { CustomAccordion } from "@/components/ui/custom-accordion"

export function WorkingProcess() {
  const [openStep, setOpenStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we'll discuss your business goals and objectives, target audience, and current marketing efforts to determine the best strategy for your needs.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "Our team conducts thorough research on your industry, competitors, and target audience to develop a customized marketing strategy tailored to your specific goals.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Once the strategy is approved, our team will get to work implementing the various components, from website optimization to content creation and paid advertising campaigns.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "We continuously monitor the performance of your campaigns and make data-driven adjustments to optimize results and maximize your ROI.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "You'll receive regular reports on the performance of your marketing campaigns, with clear insights and recommendations for ongoing improvement.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "Digital marketing is an ongoing process. We'll continue to refine and improve your strategies based on performance data and changing market conditions.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Our Working Process"
            description="Step-by-Step Guide to Achieving Your Business Goals"
          />
        </FadeIn>

        <CustomAccordion 
          items={steps}
          activeIndex={openStep}
          setActiveIndex={setOpenStep}
          showNumbers={true}
          titleClassName="text-2xl font-bold"
        />
      </div>
    </section>
  )
}
