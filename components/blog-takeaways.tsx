import { FadeIn } from "@/components/animations"
import { CheckCircle } from "lucide-react"

export function BlogTakeaways() {
  const takeaways = [
    "PPC is ideal for immediate results, product launches, and time-sensitive campaigns",
    "Organic marketing builds long-term visibility, establishes trust, and creates lasting customer connections",
    "Many businesses benefit from a hybrid approach, leveraging the strengths of both strategies",
    "Your decision depends on goals, budget, timeline, and competitive landscape",
  ]

  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Key Takeaways for Your Marketing Strategy</h2>
            
            <div className="space-y-4 mb-8">
              {takeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-neon mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p>{takeaway}</p>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Choosing the Best Strategy for Your Business</h2>
            
            <p className="mb-6">
              Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you need immediate results, have sufficient budget, and want to target specific keywords or audiences, PPC might be your primary strategy. If you're focused on building long-term visibility and can invest time in content development, organic should be your foundation.
            </p>
            
            <p className="mb-6">
              By understanding the strengths and limitations of both strategies, you can create a marketing plan that properly balances immediate needs with long-term goals. Whether you lean more heavily toward paid advertising or organic methods, the key is developing a consistent strategy that aligns with your business objectives.
            </p>
            
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                Have questions about what marketing approach would work best for your business? Contact our team for a personalized consultation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
} 