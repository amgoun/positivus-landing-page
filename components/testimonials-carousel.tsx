"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations"

export function TestimonialsCarousel() {
  const testimonials = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen significant growth in our online presence. The team is professional, responsive, and highly skilled. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen significant growth in our online presence. The team is professional, responsive, and highly skilled. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "Jane Doe",
      position: "CEO at ABC Company",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen significant growth in our online presence. The team is professional, responsive, and highly skilled. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h2 className="inline-block bg-neon px-4 py-1 font-bold text-dark mb-4">Testimonials</h2>
            <p className="text-dark">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </p>
          </div>
        </FadeIn>

        <div className="bg-dark text-white p-8 md:p-12 rounded-lg">
          <div className="relative min-h-[200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[0, 1, 2].map((offset) => {
                    const index = (currentIndex + offset) % testimonials.length
                    return (
                      <div key={offset} className="bg-dark border border-gray-800 rounded-lg p-6">
                        <p className="text-sm md:text-base mb-6">"{testimonials[index].quote}"</p>
                        <div>
                          <p className="font-bold">{testimonials[index].author}</p>
                          <p className="text-gray-400 text-sm">{testimonials[index].position}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-neon" : "bg-gray-600"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-4 gap-2">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-neon hover:border-neon hover:text-dark transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-neon hover:border-neon hover:text-dark transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
