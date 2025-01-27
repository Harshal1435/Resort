"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <motion.header
      className="bg-white/80 backdrop-blur-md fixed w-screen z-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-yellow-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          RESORT
        </motion.h1>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-bold text-black">
            {menuItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href={item.path} className="hover:text-yellow-500 transition duration-300">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.nav
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 font-bold text-black">
            {menuItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a
                  href={item.path}
                  className="hover:text-yellow-500 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header

