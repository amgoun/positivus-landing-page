"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FadeIn } from "@/components/animations"

export function WorkingProcess() {
  const [openStep, setOpenStep] = useState(1)

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we'll discuss your business goals and objectives, target audience, and current marketing efforts to determine the best strategy for your needs.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "Our team conducts thorough research on your industry, competitors, and target audience to develop a customized marketing strategy tailored to your specific goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Once the strategy is approved, our team will get to work implementing the various components, from website optimization to content creation and paid advertising campaigns.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor the performance of your campaigns and make data-driven adjustments to optimize results and maximize your ROI.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "You'll receive regular reports on the performance of your marketing campaigns, with clear insights and recommendations for ongoing improvement.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
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

        <div className="space-y-6">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div
                className={`${
                  openStep === index + 1 ? 'bg-neon' : 'bg-[#F5F5F5]'
                } rounded-[32px] border-2 border-dark/50 transition-all duration-300`}
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}
              >
                <button
                  className="w-full p-8 flex items-center justify-between text-left"
                  onClick={() => setOpenStep(openStep === index + 1 ? 0 : index + 1)}
                  aria-expanded={openStep === index + 1}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold">{step.number}</span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <span className="bg-white rounded-full p-2 border-dark border">
                    {openStep === index + 1 ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
                {openStep === index + 1 && (
                  <>
                    <div className="h-px bg-dark/20 mx-8" />
                    <div className="px-8 pb-8 mt-4">
                      <p className="text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
