"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const socialMediaHandles = [
    { name: "Facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
    { name: "Twitter", link: "https://twitter.com", icon: <FaXTwitter /> },
    { name: "Instagram", link: "https://instagram.com", icon: <BsInstagram /> },
  ];

  const footerSections = [
    {
      title: "Info",
      links: ["Formats", "Compression", "Pricing", "FAQ", "Status"],
    },
    {
      title: "Resources",
      links: ["Room", "Dinner", "Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Sustainability", "Terms of Service", "Privacy"],
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li
                  key={linkIndex}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-4">
            Subscribe to our email newsletter
          </h3>
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 text-gray-300 w-full sm:w-auto"
            />
            <motion.button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow us</h3>
            <div className="flex space-x-4">
              {socialMediaHandles.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <p>{social.icon}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
