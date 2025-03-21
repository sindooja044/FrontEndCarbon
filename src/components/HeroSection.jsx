import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/hero-image.png"; // Hero image
import worldMap from "../assets/Earth.png"; // Background map image
import shadowImage from "../assets/shadow.png"; // Shadow under hero image


// Registering GSAP ScrollTrigger Plugin

gsap.registerPlugin(ScrollTrigger);      // Reference for the hero section animation


/**
 * HeroSection Component
 * - Displays the main hero content with heading, description, and CTA buttons.
 * - Implements smooth fade-in animation using GSAP.
 * - Includes a background world map and shadow effects.
 */

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },                // Initial state (hidden & pushed down)
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }      // Final state (visible & normal position)
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col md:flex-row items-center justify-between w-[1439.9] h-[762.8] top-[104] bg-white px-10 md:px-20 py-16 border border-x-[0.52] border-[#86868633]"
    >
      {/* Background Transparent World Map */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <img
          src={worldMap}
          alt="World Map Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="max-w-xl z-10 relative w-[762] h-[365] top-[298] left-[85] gap-[27]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          GFG Accounting Scope 1, Scope 2, Scope 3
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Login
          </button>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Book Demo
          </button>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="relative mt-10 md:mt-0 z-10 w-[470] h-[721] top-[122] left-[836]">
        <img
          src={heroImage}
          alt="Earth in a Dome"
          className="max-w-sm md:max-w-lg mx-auto drop-shadow-xl"
        />
        {/* Shadow Effect under Hero Image */}
        <img
          src={shadowImage}
          alt="Shadow"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-[80%] md:w-[90%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
