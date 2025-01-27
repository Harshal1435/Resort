import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Accommodation from "../src/Pages/Accommodation";
import Gallery from "../src/Pages/Gallery";
import Blog from "../src/Pages/Blog";
import Contact from "../src/Pages/Contact";

// Import Header and Footer
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
       
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
