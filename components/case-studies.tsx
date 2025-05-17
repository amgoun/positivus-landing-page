import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
export function CaseStudies() {
  const caseStudies = [
    {

      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {

      description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {

      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto ">
        
        <SectionHeader 
          title="Case Studies"
          description=" Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-dark rounded-[45px] p-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`text-white p-6 flex flex-col h-full card-hover ${
                index !== caseStudies.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-white' : ''
              }`}
            >
              <p className="mb-6 flex-grow">{study.description}</p>
              <Link href={`/case-studies/${index + 1}`} className="text-neon font-medium hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
