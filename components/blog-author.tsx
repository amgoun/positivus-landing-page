import { FadeIn } from "@/components/animations"
import Image from "next/image"

export function BlogAuthor() {
  return (
    <section className="w-full py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 max-w-3xl">
            <div className=" overflow-hidden h-12 w-12">
              <Image
                src="/team/Picture_01.png"
                alt="Sarah Kim"
                width={48}
                height={48}
                className="object-cover h-full w-full"
              />
            </div>
            <div>
              <p className="font-bold">Sarah Kim</p>
              <p className="text-sm text-gray-600">Marketing Specialist</p>
            </div>
            <div className="ml-auto">
              <span className="inline-block bg-light px-3 py-1 rounded-full text-sm">
                5 min read
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
} 