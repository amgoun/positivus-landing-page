
import { ServicesHero } from "@/components/services-hero"
import { FeaturedService } from "@/components/featured-service"
import { SeoProcess } from "@/components/seo-process"
import { ServiceUseCases } from "@/components/service-use-cases"
import { OtherServices } from "@/components/other-services"
import { ServicesCta } from "@/components/services-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
   
      <ServicesHero />
      <FeaturedService />
      <SeoProcess />
      <ServiceUseCases />
      <OtherServices />
      <ServicesCta />
  
    </main>
  )
}
