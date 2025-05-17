import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export function JoinTeam() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="bg-neon  p-8 md:p-12 border-2 border-dark/50 rounded-[45px]"
            style={{
              boxShadow: "0 4px 0 0 #191A23",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-dark font-bold text-3xl mb-4">Join Our Team</h2>
                <p className="text-dark mb-6">
                  At Positivus, we're always looking for talented individuals to join our team. If you're passionate
                  about digital marketing and want to work with a dynamic, innovative team, we'd love to hear from you!
                </p>
                <Button className="bg-dark text-white hover:bg-dark/90">Explore Careers</Button>
              </div>
              <div className="relative h-[200px] md:h-[250px]">
                <Image src="/about/about-illustration-4.png" alt="Join our team" fill className="object-contain" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
