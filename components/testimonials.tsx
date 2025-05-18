"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { FadeIn } from "@/components/animations"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Testimonials() {
  const testimonials = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      author: "Sarah Johnson",
      position: "CEO at ABC Company",
    },
    {
      quote: "The team at Positivus has been instrumental in helping us achieve our marketing goals. Their expertise and dedication have driven remarkable results for our business.",
      author: "Michael Brown",
      position: "Founder of Tech Startup",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto mb-16">
        <FadeIn>
          <SectionHeader 
            title="Testimonials"
            description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="bg-dark text-white py-16 container rounded-[45px]">
          <div className="container mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              initialSlide={1}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-neon',
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2.5,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="px-4 h-full">
                    <div className="testimonial-card h-full flex flex-col">
                      <div className="bg-dark border-2 border-neon rounded-[45px] p-8 md:p-12 mb-8 relative flex-grow">
                        <div className="h-full flex flex-col justify-between">
                          <p className="text-lg md:text-xl leading-relaxed">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="chat-pointer"></div>
                      </div>
                      <div className="text-left ml-12 mt-auto">
                        <h3 className="text-neon text-xl font-bold mb-1">{testimonial.author}</h3>
                        <p className="text-white/80">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation */}
              <div className="flex flex-col items-center mt-12 gap-8">
                <div className="flex gap-4">
                  <button className="swiper-button-prev group" aria-label="Previous testimonial">
                    <ArrowLeft className="h-8 w-8 text-white group-hover:text-neon transition-colors" />
                  </button>
                  <button className="swiper-button-next group" aria-label="Next testimonial">
                    <ArrowRight className="h-8 w-8 text-white group-hover:text-neon transition-colors" />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
