import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FadeIn } from "@/components/animations"

export function Services() {
  const services = [
    {
      title: "Search engine\noptimization",
      description: "",
      color: "bg-white",
      textColor: "text-dark",
      icon: "/services/search.png",
    },
    {
      title: "Pay-per-click\nadvertising",
      description: "",
      color: "bg-neon",
      textColor: "text-dark",
      icon: "/services/click.png",
    },
    {
      title: "Social Media\nMarketing",
      description: "",
      color: "bg-dark",
      textColor: "text-white",
      icon: "/services/social.png",
    },
    {
      title: "Email\nMarketing",
      description: "",
      color: "bg-light",
      textColor: "text-dark",
      icon: "/services/email.png",
    },
    {
      title: "Content\nCreation",
      description: "",
      color: "bg-neon",
      textColor: "text-dark",
      icon: "/services/content.png",
    },
    {
      title: "Analytics and\nTracking",
      description: "",
      color: "bg-dark",
      textColor: "text-white",
      icon: "/services/analytic.png",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Services"
            description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div
                className={`${service.color} ${service.textColor} rounded-lg p-6 flex flex-col relative overflow-hidden border-2 border-dark/50 service-card`}
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between h-full">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-8">
                        {service.title.split('\n').map((part, i) => (
                          <div key={i} className="mb-[-0.25rem]">
                            <span className={`inline-block ${service.color === 'bg-neon' || service.color === 'bg-dark' ? 'bg-white' : 'bg-neon'} px-3 py-1 text-3xl font-bold text-dark rounded-md`}>{part}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-").replace(/\n/g, "-")}`}
                        className="flex items-center gap-2 font-medium group"
                      >
                        <span className={`w-10 h-10 rounded-full ${service.color === 'bg-dark' ? 'bg-white text-dark' : 'bg-dark text-white'} flex items-center justify-center group-hover:bg-neon group-hover:text-dark transition-colors duration-300`}>
                          <ArrowRight className="h-5 w-5 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                        </span>
                        <span className={service.color === 'bg-dark' ? 'text-white' : ''}>Learn more</span>
                      </Link>
                    </div>

                    <div className="relative w-32 h-32 self-end flex items-center justify-center">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full"
                      />
                    </div>
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
