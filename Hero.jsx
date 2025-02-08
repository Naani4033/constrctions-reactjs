import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center text-center px-6 bg-gray-300 mt-15">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        {/* Heading Animation */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-black"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          Build Your Dream with Excellence
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p 
          className="text-lg text-black mt-4"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are a trusted construction company in India, delivering high-quality projects with 
          innovation and precision. Let’s create something extraordinary together.
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          className="mt-6 flex flex-wrap justify-center gap-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Years of Experience */}
          <motion.div className="flex flex-col items-center">
            <motion.span className="text-3xl font-bold text-blue-600">10+</motion.span>
            <span className="text-lg text-gray-700">Years of Experience</span>
          </motion.div>

          {/* Number of Projects */}
          <motion.div className="flex flex-col items-center">
            <motion.span className="text-3xl font-bold text-blue-600">200+</motion.span>
            <span className="text-lg text-gray-700">Completed Projects</span>
          </motion.div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div 
          className="mt-10 flex flex-wrap gap-4 justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* Book a Seat Button */}
          <a 
            href="#book"
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg shadow-md hover:bg-green-700 transition"
          >
            Book a Seat
          </a>

          {/* Call Button */}
          <a 
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition"
          >
            Call
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="mt-10 flex justify-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition">
            <Facebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition">
            <Instagram size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400 transition">
            <Twitter size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 transition">
            <Linkedin size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
