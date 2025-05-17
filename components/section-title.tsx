import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return <h2 className={cn("inline-block bg-neon px-4 py-1 font-bold text-dark", className)}>{children}</h2>
}
