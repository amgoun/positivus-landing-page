import { FadeIn } from "@/components/animations"

export function BlogStats() {
  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8">By the Numbers: Facts About PPC and Organic Marketing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <p className="text-gray-600 text-sm mb-2">Businesses earn an average of:</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-bold">$2</span>
                  <span className="text-lg">for every $1 spent</span>
                </div>
                <div className="mt-auto bg-neon rounded-lg p-4 text-dark text-sm">
                  <span className="font-bold">41% of clicks</span> go to the top three organic results, ensuring the effectiveness of being higher in rankings.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-2">Organic search generates:</p>
                  <p className="text-2xl font-bold">53% less than paid ads</p>
                  <p className="text-sm text-gray-600">yet creates <span className="font-bold">3x as many leads</span></p>
                </div>
                <div className="mt-auto bg-dark rounded-lg p-4 text-white text-sm">
                  <span className="font-bold">51% of all website traffic</span> comes from organic search, making it the largest single source of traffic.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
} 