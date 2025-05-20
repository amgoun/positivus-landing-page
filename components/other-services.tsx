import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations"
import { SectionHeader } from "./ui/section-header"

export function OtherServices() {
  const services = [
    {
      title: "Pay-per-click advertising",
      icon: "/services/search.png",
      link: "/services/ppc",
    },
    {
      title: "Social Media Marketing",
      icon: "/services/click.png",
      link: "/services/social-media",
    },
    {
      title: "Email Marketing",
      icon: "/services/social.png",
      link: "/services/email-marketing",
    },
    {
      title: "Content Creation",
      icon: "/services/email.png",
      link: "/services/content-creation",
    },
    {
      title: "Analytics and Tracking",
      icon: "/services/content.png",
      link: "/services/analytics",
    },
    {
      title: "Search Engine Optimization",
      icon: "/services/analytic.png",
      link: "/services/seo",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <SectionHeader 
              title="Our Other Services"
              description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-[#F3F3F3] rounded-[45px] p-8 border border-dark hover:bg-white transition-colors group shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-2xl">{service.title}</h3>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-dark hover:text-neon transition-colors w-fit"
                    >
                      <div className="flex items-center gap-2">
                        <span>Learn more</span>
                        <span className="w-6 h-6 rounded-full bg-dark group-hover:bg-neon text-white flex items-center justify-center transition-colors">
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="relative h-32 w-32">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
