import { FadeIn } from "@/components/animations"

export function BlogExamples() {
  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Real-World Examples</h2>
            
            <div className="space-y-6">
              <p>
                PPC and organic marketing have proven effective in different scenarios, and real-world examples illustrate when each approach may be most beneficial. For instance, a retail startup might leverage PPC to gain rapid visibility during the critical holiday season but shift toward organic strategies for sustainable growth over time.
              </p>
              
              <div className="bg-light rounded-lg p-6 my-8">
                <h3 className="font-bold mb-3">Case Study: Tech Startup SaaS</h3>
                <p className="mb-4">
                  A B2B software company initially relied heavily on PPC to generate leads while their content marketing strategy was still developing. They invested $5,000 monthly in targeted Google Ads campaigns, which quickly established their presence in a competitive niche.
                </p>
                <p>
                  As they built content over six months, they gradually reduced PPC spend by 40% while maintaining lead volume, demonstrating the complementary nature of both approaches. Their hybrid approach resulted in a 65% lower cost-per-acquisition compared to using solely paid methods.
                </p>
              </div>
              
              <p>
                This example demonstrates how companies can strategically blend both approaches, starting with PPC for immediate visibility and gradually transitioning to more organic methods as their content marketing matures.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
} 