"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample data for beauty salon services
const services = [
  {
    id: 1,
    title: "Luxury Haircut & Styling",
    description:
      "Our expert stylists will transform your look with precision cutting techniques and personalized styling to match your face shape and lifestyle.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    title: "Rejuvenating Facial Treatment",
    description:
      "Experience the ultimate in skin renewal with our signature facial. Deep cleansing, exfoliation, and customized masks leave your skin glowing and refreshed.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    title: "Deluxe Manicure & Pedicure",
    description:
      "Treat your hands and feet to our premium nail care service. Includes exfoliation, massage, and your choice of premium polish for a flawless finish.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 4,
    title: "Full Body Massage",
    description:
      "Relieve tension and promote relaxation with our therapeutic massage. Customized pressure and techniques address your specific needs for total body wellness.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 5,
    title: "Professional Makeup Application",
    description:
      "Whether for a special occasion or just because, our makeup artists create stunning looks tailored to your features and preferences using luxury products.",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return

    setSlideDirection("right")
    setIsAnimating(true)

    setTimeout(() => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  const goToNext = () => {
    if (isAnimating) return

    setSlideDirection("left")
    setIsAnimating(true)

    setTimeout(() => {
      const isLastSlide = currentIndex === services.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index:any) => {
    if (isAnimating || index === currentIndex) return

    setSlideDirection(index > currentIndex ? "left" : "right")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="relative overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            slideDirection === "left"
              ? "-translate-x-[100px] opacity-0"
              : slideDirection === "right"
                ? "translate-x-[100px] opacity-0"
                : ""
          }`}
        >
          <div className="grid md:grid-cols-2 min-h-[400px] gap-8">
            {/* Left side: Title and Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{services[currentIndex].title}</h3>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-muted-foreground mb-8">{services[currentIndex].description}</p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 w-fit">
                Book Now
              </button>
            </div>

            {/* Right side: Image */}
            <div className="relative h-[300px] md:h-auto overflow-hidden rounded-lg">
              <Image
                src={services[currentIndex].image || "/placeholder.svg"}
                alt={services[currentIndex].title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            className="rounded-full h-12 w-12 text-primary hover:bg-background/10 hover:text-primary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous service</span>
          </button>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            className="rounded-full h-12 w-12 text-primary hover:bg-background/10 hover:text-primary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next service</span>
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
