import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS styles

const Accommodation = () => {
  const rooms = [
    {
      name: "Double Deluxe Room",
      price: "$250/night",
      img: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg",
      description: "A luxurious double deluxe room with modern amenities.",
    },
    {
      name: "Single Deluxe Room",
      price: "$200/night",
      img: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg",
      description: "Perfect for solo travelers seeking comfort and style.",
    },
    {
      name: "Honeymoon Suite",
      price: "$750/night",
      img: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
      description: "An elegant suite tailored for romantic getaways.",
    },
    {
      name: "Economy Double",
      price: "$200/night",
      img: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg",
      description: "Affordable and cozy, perfect for budget travelers.",
    },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Set to false to repeat animation on scroll
      offset: 100, // Start animation 100px before element comes into view
    });
  }, []);

  return (
    <div className="h-full container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Hotel Accommodation
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg bg-white bg-opacity-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            data-aos="fade-up" // Fade-up animation when it comes into view
            data-aos-duration="1200" // Duration of the fade-up animation
            data-aos-delay={index * 200} // Delay based on the room index (staggered effect)
          >
            {/* Image */}
            <div className="group overflow-hidden">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>

            {/* Text Content */}
            <div className="p-4">
              <div className="text-xs font-bold text-sky-500 uppercase">
                Accommodation
              </div>
              <div className="mt-2 font-bold text-gray-700">
                <a href="#" className="hover:underline">
                  {room.name}
                </a>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {room.description}
              </div>
              <div className="mt-2 font-semibold text-yellow-500">
                {room.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
