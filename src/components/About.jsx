import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,    // Set to 'false' so animation happens every time it's scrolled into view
      offset: 100,    // Offset in pixels before the animation starts
    });
  }, []);

  return (
    <div className="container mx-auto py-16 px-6">
      <h2
        className="text-3xl font-bold text-center mb-6"
        data-aos="fade-up"
      >
        About Us
      </h2>
      <div className="md:flex md:items-center md:space-x-8">
        <div
          className="md:w-1/2"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold mb-4">
            Our History, Mission & Vision
          </h3>
          <p className="text-gray-600 mb-4">
            We are dedicated to providing world-class hospitality and an unforgettable stay. Our mission is to create
            a luxurious experience tailored to every guest. With a vision of excellence, we continuously innovate to
            provide top-notch services.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
            data-aos="zoom-in"
          >
            Request Custom Price
          </button>
        </div>
        <div
          className="md:w-1/2 mt-8 md:mt-0"
          data-aos="fade-left"
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/07/11/22/13/resort-2495217_640.jpg"
            alt="Hotel view"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
