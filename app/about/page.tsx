import { AboutHero } from "@/components/about-hero"
import { ImpactNumbers } from "@/components/impact-numbers"
import { CompanyJourney } from "@/components/company-journey"
import { CoreValues } from "@/components/core-values"
import { FounderQuote } from "@/components/founder-quote"
import { Awards } from "@/components/awards"
import { JoinTeam } from "@/components/join-team"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
     
      <AboutHero />
      <ImpactNumbers />
      <CompanyJourney />
      <CoreValues />
      <FounderQuote />
      <Awards />
      <JoinTeam />
     
    </main>
  )
}
