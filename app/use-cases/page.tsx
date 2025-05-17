
import { UseCasesHero } from "@/components/use-cases-hero"
import { FeaturedSuccessStory } from "@/components/featured-success-story"
import { AllSuccessStories } from "@/components/all-success-stories"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { SuccessStoryCta } from "@/components/success-story-cta"

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-white">
    
      <UseCasesHero />
      <FeaturedSuccessStory />
      <AllSuccessStories />
      <TestimonialsCarousel />
      <SuccessStoryCta />
      
    </main>
  )
}
