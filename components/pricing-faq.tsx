"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Are there any additional fees or charges that may apply?",
      answer:
        "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
    },
    {
      question: "Can I change or cancel my plan at any time?",
      answer:
        "Yes, you can change or cancel your plan at any time. We offer flexible month-to-month contracts with no long-term commitments. If you need to upgrade, downgrade, or cancel your plan, simply contact our customer support team.",
    },
    {
      question: "Do you offer a free trial or consultation?",
      answer:
        "Yes, we offer a free 30-minute consultation to discuss your business needs and goals. During this consultation, we'll assess your current digital marketing efforts and provide recommendations for improvement. Contact us to schedule your free consultation.",
    },
    {
      question: "How do you bill and invoice your clients?",
      answer:
        "We bill our clients on a monthly basis. Invoices are sent on the 1st of each month and payment is due within 15 days. We accept various payment methods including credit cards, bank transfers, and PayPal.",
    },
    {
      question: "Are your services guaranteed to deliver results?",
      answer:
        "While we cannot guarantee specific results as digital marketing outcomes depend on various factors, we are committed to implementing proven strategies and continuously optimizing our approach based on performance data. We provide regular reports and maintain transparent communication about progress and results.",
    },
    {
      question: "Do you offer contract-based or monthly retainer-based pricing?",
      answer:
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

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div 
                className={`${
                  index === openIndex ? 'bg-neon' : 'bg-[#F5F5F5]'
                } rounded-[32px] border-2 border-dark/50 transition-all duration-300`}
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}
              >
                <button
                  className="w-full p-8 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                  <span className="font-bold text-xl">{faq.question}</span>
                  <span className="bg-white rounded-full p-2 border-dark border flex-shrink-0">
                    {index === openIndex ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
                {index === openIndex && (
                  <>
                    <div className="h-px bg-dark/20 mx-8" />
                    <div className="px-8 pb-8 mt-4">
                      <p className="text-lg leading-relaxed">{faq.answer}</p>
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
