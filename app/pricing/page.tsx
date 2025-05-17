
import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"
import { PricingFaq } from "@/components/pricing-faq"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
   
      <PricingHero />
      <PricingPlans />
      <PricingFaq />
    
    </main>
  )
}
