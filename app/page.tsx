
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { Services } from "@/components/services"
import { CallToAction } from "@/components/call-to-action"
import { CaseStudies } from "@/components/case-studies"
import { WorkingProcess } from "@/components/working-process"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { ContactUs } from "@/components/contact-us"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
     
      <Hero />
      <ClientLogos />
      <Services />
      <CallToAction />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
   
    </main>
  )
}
