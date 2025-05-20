import { SectionHeader } from "@/components/ui/section-header"
import { FadeIn } from "@/components/animations"
import { CustomCard } from "@/components/ui/custom-card"

export function Services() {
  const services = [
    {
      title: "Search engine\\noptimization",
      color: "bg-white",
      textColor: "text-dark",
      icon: "/services/search.png",
      link: "/services/seo",
    },
    {
      title: "Pay-per-click\\nadvertising",
      color: "bg-neon",
      textColor: "text-dark",
      icon: "/services/click.png",
      link: "/services/ppc",
    },
    {
      title: "Social Media\\nMarketing",
      color: "bg-dark",
      textColor: "text-white",
      icon: "/services/social.png",
      link: "/services/social-media",
    },
    {
      title: "Email\\nMarketing",
      color: "bg-light",
      textColor: "text-dark",
      icon: "/services/email.png",
      link: "/services/email",
    },
    {
      title: "Content\\nCreation",
      color: "bg-neon",
      textColor: "text-dark",
      icon: "/services/content.png",
      link: "/services/content",
    },
    {
      title: "Analytics and\\nTracking",
      color: "bg-dark",
      textColor: "text-white",
      icon: "/services/analytic.png",
      link: "/services/analytics",
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
              <CustomCard
                {...service}
                className="service-card"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
