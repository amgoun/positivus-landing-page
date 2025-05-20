"use client"

import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomCardProps {
  className?: string
  color?: string
  textColor?: string
  title?: string | ReactNode
  description?: string
  icon?: string
  link?: string
  linkText?: string
  children?: ReactNode
  showDivider?: boolean
  iconSize?: { width: number; height: number }
}

export function CustomCard({
  className,
  color = "bg-white",
  textColor = "text-dark",
  title,
  description,
  icon,
  link,
  linkText = "Learn more",
  children,
  showDivider = false,
  iconSize = { width: 150, height: 150 }
}: CustomCardProps) {
  return (
    <div
      className={cn(
        `${color} ${textColor} rounded-[32px] p-8 border-2 border-dark/50 transition-all duration-300`,
        className
      )}
      style={{
        boxShadow: "0 4px 0 0 #191A23",
      }}
    >
      {children || (
        <div className="flex flex-col h-full">
          <div className="flex justify-between h-full">
            <div className="flex flex-col justify-between h-full">
              {title && (
                <div className="mb-8">
                  {typeof title === 'string' ? (
                    title.split('\\n').map((part, i) => (
                      <div key={i} className="mb-[-0.25rem]">
                        <span className={`inline-block ${color === 'bg-neon' || color === 'bg-dark' ? 'bg-white' : 'bg-neon'} px-3 py-1 text-3xl font-bold text-dark rounded-md`}>
                          {part}
                        </span>
                      </div>
                    ))
                  ) : (
                    title
                  )}
                </div>
              )}

              {description && <p className="text-lg mb-6">{description}</p>}

              {showDivider && (
                <div className="h-px bg-dark/20 w-full mb-6" />
              )}

              {link && (
                <Link
                  href={link}
                  className="flex items-center gap-2 font-medium group"
                >
                  <span className={`w-10 h-10 rounded-full ${color === 'bg-dark' ? 'bg-white text-dark' : 'bg-dark text-white'} flex items-center justify-center group-hover:bg-neon group-hover:text-dark transition-colors duration-300`}>
                    <ArrowRight className="h-5 w-5 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                  <span className={color === 'bg-dark' ? 'text-white' : ''}>{linkText}</span>
                </Link>
              )}
            </div>

            {icon && (
              <div className="relative w-32 h-32 self-end flex items-center justify-center">
                <Image
                  src={icon}
                  alt={typeof title === 'string' ? title : 'Card icon'}
                  width={iconSize.width}
                  height={iconSize.height}
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 