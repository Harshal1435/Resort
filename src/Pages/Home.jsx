
import Hero from "../components/Hero";

import Accommodation from "../components/Accommodation";
import Facilities from "../components/Facilities";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <Hero />
      
      {/* Accommodation Section */}
      <Accommodation />

      {/* Facilities Section */}
      <Facilities />

      {/* About Us Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Section */}
      <Blog />

     
    </div>
  );
};

export default Home;
