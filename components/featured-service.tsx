import { FadeIn } from "@/components/animations"

export function FeaturedService() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-dark text-white p-8 md:p-12 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-6">
                  Search engine optimization
                </div>
                <p className="mb-6">
                  With the increase of businesses your website's ranking, we aim to improve the visibility by optimizing
                  your site's content and structure to rank higher in search results. This includes keyword research,
                  on-page optimization, and technical improvements.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <label htmlFor="service-search" className="block text-sm font-medium mb-2 text-gray-300">
                    Search by Service
                  </label>
                  <input
                    type="text"
                    id="service-search"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-neon"
                    placeholder="e.g., SEO, PPC, Social Media"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
