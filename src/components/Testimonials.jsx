"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"



const testimonials=[
  {
    id: 1,
    name: "Emma Thompson",
    role: "Business Traveler",
    content:
      "The resort exceeded all my expectations. The staff was incredibly attentive, and the amenities were top-notch. I'll definitely be returning for my next business trip!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Family Vacationer",
    content:
      "Our family had an amazing time at this resort. The kids loved the pool, and we parents enjoyed the spa. It's the perfect balance of relaxation and fun for the whole family.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Honeymoon Guest",
    content:
      "We couldn't have chosen a better place for our honeymoon. The romantic atmosphere, coupled with the stunning views and excellent service, made our stay unforgettable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Guests Say
        </motion.h2>
        <div className="relative h-[400px] sm:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 sm:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-gray-600 text-center mb-4">{testimonials[currentIndex].content}</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

