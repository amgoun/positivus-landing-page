"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { FadeIn } from "@/components/animations"
import Link from "next/link"

export function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$500",
      popular: false,
      features: [
        "Website optimization",
        "Social media setup and management (1 platform)",
        "Monthly progress report",
        "Email support",
        "Basic competitor analysis",
        "Initial SEO audit",
      ],
      dark: false,
    },
    {
      name: "Pro Plan",
      price: "$1000",
      popular: true,
      features: [
        "Includes all from the Basic Plan",
        "Social media setup and management (up to 3 platforms)",
        "PPC ad campaign management",
        "Email and phone support",
        "On-page SEO improvements",
        "Monthly content recommendations",
      ],
      dark: true,
    },
    {
      name: "Elite Plan",
      price: "$2000",
      popular: false,
      features: [
        "Includes all from the Pro Plan",
        "Website design and development",
        "Comprehensive SEO strategy",
        "Social media setup and management (up to 5 platforms)",
        "Content marketing strategy and implementation",
        "In-depth analytics and reporting",
      ],
      dark: false,
    },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div
                className={`rounded-[25px] p-8 border-2 border-dark h-full flex flex-col ${
                  plan.dark ? "bg-dark text-white" : "bg-white text-dark"
                }`}
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.popular && (
                    <span className="inline-block bg-neon px-2 py-1 text-xs font-medium text-dark rounded">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-12">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-70">/month</span>
                </div>

                <div className="flex flex-col flex-grow">
                  <Button
                    className={`w-full h-[50px] mb-4 rounded-[14px] font-normal text-base ${
                      plan.dark 
                        ? "bg-neon text-dark hover:bg-neon/90" 
                        : "bg-dark text-white hover:bg-dark/90"
                    }`}
                  >
                    Get Started
                  </Button>

                  <Link
                    href="/contact"
                    className={`block text-center h-[50px] leading-[46px] rounded-[14px] border-2 font-normal text-base ${
                      plan.dark
                        ? "border-white text-white hover:bg-white/10"
                        : "border-dark text-dark hover:bg-gray-50"
                    } mb-6 transition-colors`}
                  >
                    Request a quote
                  </Link>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6"></div>

                  <ul className="space-y-4 mt-auto">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span
                          className={`mr-2 mt-1 flex-shrink-0 w-5 h-5 rounded-full ${
                            plan.dark ? "bg-neon text-dark" : "bg-neon text-dark"
                          } flex items-center justify-center`}
                        >
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
