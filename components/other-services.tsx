import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function OtherServices() {
  const services = [
    {
      title: "Pay-per-click Advertising",
      description: "Strategic PPC campaigns that drive targeted traffic and conversions while maximizing ROI.",
      icon: "/images/ppc-icon.svg",
      link: "/services/ppc",
    },
    {
      title: "Social Media Marketing",
      description: "Engaging social strategies that build brand awareness, community, and drive business growth.",
      icon: "/images/social-media-icon.svg",
      link: "/services/social-media",
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads, build relationships, and drive conversions.",
      icon: "/images/email-marketing-icon.svg",
      link: "/services/email-marketing",
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story, engages your audience, and drives action.",
      icon: "/images/content-creation-icon.svg",
      link: "/services/content-creation",
    },
    {
      title: "Analytics and Tracking",
      description: "Data-driven insights that measure performance and guide strategic decisions.",
      icon: "/images/analytics-icon.svg",
      link: "/services/analytics",
    },
    {
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies that improve visibility and drive organic traffic.",
      icon: "/images/seo-icon.svg",
      link: "/services/seo",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">Our Other Services</h2>
            <p className="text-dark">
              As a full-service marketing agency, we offer a range of services to help businesses grow their online
              presence and achieve their goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="border border-gray-200 rounded-lg p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="relative h-40 w-full">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-dark font-medium hover:text-neon transition-colors group"
                  >
                    <span className="w-6 h-6 rounded-full bg-dark text-white flex items-center justify-center mr-2">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
