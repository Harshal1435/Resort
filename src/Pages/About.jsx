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
    <div>
      {/* Special Accommodation Section */}

      <div className="relative">
      {/* Background Image */}
      <div
        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div> {/* Add a dark overlay */}
      </div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About</h1>
        <p className="text-white text-sm sm:text-base">
          <span className="text-yellow-500">Home</span> &rarr; Accommodation
        </p>
      </div>
    </div>

      {/* Breadcrumb */}
      <div className="mt-6 text-center">
        <p
          className="text-sm text-gray-500"
          data-aos="fade-up"
        >
          <span className="text-yellow-500"></span> 
        </p>
      </div>

      {/* Content Section */}
      <div className="md:flex md:items-center md:space-x-8 mt-12 p-16">
        {/* Left Content */}
        <div
          className="md:w-1/2"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold mb-4">
            About Us
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Our History, Mission & Vision
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are dedicated to providing world-class hospitality and an unforgettable stay. Our mission is to create a luxurious experience tailored to every guest. With a vision of excellence, we continuously innovate to provide top-notch services.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our team takes pride in creating memorable experiences, ensuring your stay is as comfortable and enjoyable as possible.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
            data-aos="zoom-in"
          >
            Request Custom Price
          </button>
        </div>

        {/* Right Image */}
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
