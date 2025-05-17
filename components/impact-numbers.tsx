import { FadeIn } from "@/components/animations"
import { SectionHeader } from "./ui/section-header"

export function ImpactNumbers() {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "50+", label: "Clients" },
    { value: "100+", label: "Successful Campaigns" },
    { value: "20+", label: "Industry Awards" },
    { value: "500%", label: "ROI for our clients" },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-8">
          <SectionHeader 
          title="Our Impact in Numbers"
          description="A snapshot of the milestones and achievements that drive our success"
        />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
