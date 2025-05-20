import { FadeIn } from "@/components/animations"

export function PricingHero() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn delay={0.2}>
          <div className="max-w-3xl">
            <h1 className="text-dark mb-4">Pricing</h1>
            <p className="text-dark text-xl">
              Elevate Your Online Presence: Competitive Pricing <br /> for Exceptional Results
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
