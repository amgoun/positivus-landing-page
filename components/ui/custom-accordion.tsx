"use client"

import { Plus, Minus } from "lucide-react"
import { FadeIn } from "@/components/animations"
import { ReactNode } from "react"

interface AccordionItem {
  title: string
  content: string
  number?: string
}

interface CustomAccordionProps {
  items: AccordionItem[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  showNumbers?: boolean
  titleClassName?: string
}

export function CustomAccordion({ 
  items, 
  activeIndex, 
  setActiveIndex, 
  showNumbers = false,
  titleClassName = "font-bold text-xl"
}: CustomAccordionProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <FadeIn key={index} delay={0.1 * index}>
          <div 
            className={`${
              activeIndex === index ? 'bg-neon' : 'bg-[#F5F5F5]'
            } rounded-[32px] border-2 border-dark/50 transition-all duration-300`}
            style={{
              boxShadow: "0 4px 0 0 #191A23",
            }}
          >
            <button
              className="w-full p-8 flex items-center justify-between text-left"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="flex items-center gap-4">
                {showNumbers && (
                  <span className="text-4xl font-bold">{item.number}</span>
                )}
                <span className={titleClassName}>{item.title}</span>
              </div>
              <span className="bg-white rounded-full p-2 border-dark border flex-shrink-0">
                {activeIndex === index ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
              </span>
            </button>
            {activeIndex === index && (
              <>
                <div className="h-px bg-dark/20 mx-8" />
                <div className="px-8 pb-8 mt-4">
                  <p className="text-lg leading-relaxed">{item.content}</p>
                </div>
              </>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  )
} 