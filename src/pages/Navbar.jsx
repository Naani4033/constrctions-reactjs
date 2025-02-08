import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Import icons for mobile menu
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white p- flex justify-between items-center fixed w-full z-10 -my-20 p-5 ">
      <h1 className="text-2xl font-bold text-white">Construction</h1>
    

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop & Mobile Menu */}
      <ul
        className={`md:flex md:space-x-6 font-bold text-black absolute md:relative bg-gray-900 w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li><a href="/" className="block py-2 px-4 hover:underline text-white">Home</a></li>
        <li><a href="Services" className="block py-2 px-4 hover:underline text-white">Services</a></li>
        <li><a href="#Admin" className="block py-2 px-4 hover:underline text-white">Admin</a></li>
      </ul>
    </nav>
  );
}
