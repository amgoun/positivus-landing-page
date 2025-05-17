import Image from "next/image"

export function ClientLogos() {
  const logos = [
    { name: "Amazon", src: "/company/Company-logo-0.svg?height=40&width=120" },
    { name: "Hubspot", src: "/company/Company-logo-1.svg?height=40&width=120" },
    { name: "Netflix", src: "/company/Company-logo-2.svg?height=40&width=120" },
    { name: "Notion", src: "/company/Company-logo-3.svg?height=40&width=120" },
    { name: "Zoom", src: "/company/Company-logo-4.svg?height=40&width=120" },
  ]

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {logos.map((logo) => (
            <div key={logo.name} className="w-32 h-12 relative ">
              <Image src={logo.src || "/placeholder.svg"} alt={`${logo.name} logo`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
