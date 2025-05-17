interface SectionHeaderProps {
  title: string
  description: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-center gap-8 items-center text-center sm:text-left">
      <h2 className="inline-block bg-neon px-2 font-bold text-dark rounded-md whitespace-nowrap">{title}</h2>
      <p className="max-w-3xl">{description}</p>
    </div>
  )
} 