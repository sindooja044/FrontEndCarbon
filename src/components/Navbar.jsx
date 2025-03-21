import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Navbar Component
 * This component renders a responsive navigation bar.
 * - Displays menu items and buttons.
 * - Includes a mobile-friendly dropdown menu.
 * - Uses Tailwind CSS for styling.
 */


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative top-0 right-0 w-full bg-[#FFFFFF] shadow-md px-8 py-4 z-50">
      <div className="w-[924px] ml-auto flex justify-between items-center">
        {/* Desktop Menu (Aligned Right) */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Services</li>
          <li className="cursor-pointer hover:text-gray-500">Blog</li>
          <li className="cursor-pointer hover:text-gray-500">About Us</li>
          <li className="cursor-pointer hover:text-gray-500">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-green-100 text-green-600 px-5 py-2 rounded-lg font-medium hover:bg-green-200">
            Login
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col space-y-4 transition-transform duration-300 md:hidden"
        >
          <ul className="text-black font-medium space-y-2">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">Services</li>
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
            <li className="cursor-pointer hover:text-gray-500">About Us</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button className="bg-green-100 text-green-600 px-5 py-2 rounded-lg font-medium hover:bg-green-200">
              Login
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
