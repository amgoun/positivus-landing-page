import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return <h1 className={cn(className)}>{children}</h1>
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={cn(className)}>{children}</h2>
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn(className)}>{children}</h3>
}

export function H4({ children, className }: TypographyProps) {
  return <h4 className={cn(className)}>{children}</h4>
}

export function Paragraph({ children, className }: TypographyProps) {
  return <p className={cn(className)}>{children}</p>
}
