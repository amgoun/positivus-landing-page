"use client"

import { useState } from "react"
import { FadeIn } from "@/components/animations"
import { CustomAccordion } from "@/components/ui/custom-accordion"

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      title: "Are there any additional fees or charges that may apply?",
      content:
        "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
    },
    {
      title: "Can I change or cancel my plan at any time?",
      content:
        "Yes, you can change or cancel your plan at any time. We offer flexible month-to-month contracts with no long-term commitments. If you need to upgrade, downgrade, or cancel your plan, simply contact our customer support team.",
    },
    {
      title: "Do you offer a free trial or consultation?",
      content:
        "Yes, we offer a free 30-minute consultation to discuss your business needs and goals. During this consultation, we'll assess your current digital marketing efforts and provide recommendations for improvement. Contact us to schedule your free consultation.",
    },
    {
      title: "How do you bill and invoice your clients?",
      content:
        "We bill our clients on a monthly basis. Invoices are sent on the 1st of each month and payment is due within 15 days. We accept various payment methods including credit cards, bank transfers, and PayPal.",
    },
    {
      title: "Are your services guaranteed to deliver results?",
      content:
        "While we cannot guarantee specific results as digital marketing outcomes depend on various factors, we are committed to implementing proven strategies and continuously optimizing our approach based on performance data. We provide regular reports and maintain transparent communication about progress and results.",
    },
    {
      title: "Do you offer contract-based or monthly retainer-based pricing?",
      content:
        "We offer both contract-based and monthly retainer-based pricing options. Our standard plans are based on monthly retainers, but we can also create custom contracts for specific projects or campaigns. Contact us to discuss which option would be best for your business needs.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 mb-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark rounded-[14px]">Frequently Asked Questions</h2>
          </div>
        </FadeIn>

        <CustomAccordion 
          items={faqs}
          activeIndex={openIndex}
          setActiveIndex={setOpenIndex}
        />
      </div>
    </section>
  )
}
