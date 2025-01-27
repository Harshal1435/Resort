import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS styles

const Facilities = () => {
  const facilities = [
    {
      name: "Restaurant",
      icon: "🍽️",
      description: "Enjoy delicious meals prepared by top chefs.",
    },
    {
      name: "Sports Club",
      icon: "🚴",
      description: "Stay active with top-notch fitness facilities.",
    },
    {
      name: "Swimming Pool",
      icon: "🏊",
      description: "Relax and refresh in our luxurious pool.",
    },
    {
      name: "Rent a Car",
      icon: "🚗",
      description: "Convenient car rental service for guests.",
    },
    {
      name: "Gymnasium",
      icon: "💪",
      description: "Fully equipped gym for your fitness needs.",
    },
    {
      name: "Bar",
      icon: "🍸",
      description: "Enjoy cocktails and drinks in our elegant bar.",
    },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Set to 'false' so animation happens every time it's scrolled into view
      offset: 100, // Offset in pixels before the animation starts
    });
  }, []);

  return (
    <div
      className=" text-white "
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container h-full w-full p-16 mx-auto text-center  bg-opacity-50  rounded-md">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h2 className="text-4xl font-bold mb-4">Royal Facilities</h2>
          <p className="text-gray-400  mb-8">
            Who are in extremely love with eco-friendly systems.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-[3rem] rounded-md shadow-lg border border-gray-600 
                 bg-gray-500 transition-all transform hover:scale-105 hover:bg-[rgba(255,255,255,0.5)]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100} // Delay each animation based on its index
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-4">{facility.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-400 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
