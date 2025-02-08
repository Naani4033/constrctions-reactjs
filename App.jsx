import Navbar from "./pages/Navbar";
import Hero from "./Hero";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./Contact";
import CTA from "./pages/CTA";
// import Admin from "./pages/Admin";
import About from "./pages//About";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      
      <About/>
      <Projects/>
      <Contact />
      <CTA />
      <Footer/>
    </div>
  );
}
