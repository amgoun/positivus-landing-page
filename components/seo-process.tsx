import { FadeIn } from "@/components/animations"

export function SeoProcess() {
  const steps = [
    {
      number: "01",
      title: "Website Audit & Analysis",
      description:
        "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content gaps, and user experience.",
    },
    {
      number: "02",
      title: "Keyword Research & Strategy",
      description:
        "We research and identify the most valuable and relevant keywords for your business, ensuring that we target terms that drive qualified traffic.",
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description:
        "We optimize your website's structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
    },
    {
      number: "04",
      title: "Content Creation & Optimization",
      description:
        "Our quality content helps to fill the gaps and create content that engages your audience while aligning with your SEO goals.",
    },
    {
      number: "05",
      title: "Link Building",
      description:
        "We develop a link building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
    },
    {
      number: "06",
      title: "Monitoring & Reporting",
      description:
        "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to optimize results.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">How We Work: SEO Process</h2>
            <p className="text-dark">
              Our step-by-step SEO process ensures your site is properly optimized, helping increase visibility, drive
              quality traffic, and boost ranking results.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-light p-6 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
