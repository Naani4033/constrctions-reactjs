import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">Construction</h2>
            <p className="mt-2 text-gray-400">
              Building your dreams with quality and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
