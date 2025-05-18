import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "./ui/section-header"
import { Button } from "./ui/button"
import { FadeIn } from "@/components/animations"

export function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: "/team/Picture_01.png",
      linkedin: "https://linkedin.com/in/john-smith"
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: "/team/Picture_02.png",
      linkedin: "https://linkedin.com/in/jane-doe"
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: "/team/Picture_03.png",
      linkedin: "https://linkedin.com/in/michael-brown"
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: "/team/Picture_04.png",
      linkedin: "https://linkedin.com/in/emily-johnson"
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: "/team/Picture_05.png",
      linkedin: "https://linkedin.com/in/brian-williams"
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: "/team/Picture_06.png",
      linkedin: "https://linkedin.com/in/sarah-kim"
    }
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <SectionHeader 
            title="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div 
                className="bg-white rounded-[32px] p-8 border-2 border-dark/50"
                style={{
                  boxShadow: "0 4px 0 0 #191A23",
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-[72px] h-[72px] relative">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-dark/80">{member.role}</p>
                    </div>
                  </div>
                  <Link href={member.linkedin} target="_blank" className="shrink-0">
                    <Image 
                      src="/team/linkdin_icon.svg" 
                      alt="LinkedIn" 
                      width={32} 
                      height={32}
                    />
                  </Link>
                </div>
                <div className="h-px bg-dark/20 mb-6" />
                <p className="text-dark/80 leading-relaxed">{member.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.7}>
          <div className="flex justify-center lg:justify-end mt-8">
            <Button
              variant="outline"
              className=" font-normal text-xl px-[30px] py-[25px] border-dark bg-dark text-white
               hover:bg-white hover:text-dark transition-colors rounded-[14px] w-full md:w-auto "
            >
              See all team
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
