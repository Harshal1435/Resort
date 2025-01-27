"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  })

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <source src="https://cdn.pixabay.com/video/2024/11/27/243647_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <div className="absolute inset-0  bg-opacity-60"></div>

      <motion.div
        className="relative text-center px-4 md:px-10 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Relax Your Mind
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Find your escape at our luxurious hotel.
        </motion.p>

        <motion.div
          className=" bg-opacity-20 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg text-black"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-white mb-4 sm:mb-6">
            Book Your Stay
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <label className="block text-sm font-medium text-white mb-1">Check-In</label>
              <input
                type="date"
                name="checkIn"
                value={booking.checkIn}
                onChange={handleChange}
                className="w-full border-none p-2 rounded-md bg-black bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-500 focus:outline-none text-black"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <label className="block text-sm font-medium text-white mb-1">Check-Out</label>
              <input
                type="date"
                name="checkOut"
                value={booking.checkOut}
                onChange={handleChange}
                className="w-full border-none p-2 rounded-md bg-black bg-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-yellow-500 focus:outline-none "
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <label className="block text-sm font-medium text-white mb-1">Adults</label>
              <select
                name="adults"
                value={booking.adults}
                onChange={handleChange}
                className="w-full border-none p-2 rounded-md bg-black bg-opacity-30  focus:ring-2 focus:ring-yellow-500 focus:outline-none text-white"
              >
                {[...Array(83).keys()].map((num) => (
                  <option key={num + 18} value={num + 18}>
                    {num + 18}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <label className="block text-sm font-medium text-white mb-1">Children</label>
              <select
                name="children"
                value={booking.children}
                onChange={handleChange}
                className="w-full border-none p-2 rounded-md bg-black bg-opacity-30 text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none text-black"
              >
                {[...Array(15).keys()].map((num) => (
                  <option key={num+1} value={num+1}>
                    {num+1}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          <motion.div className="mt-4 sm:mt-6 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-md transition transform hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

