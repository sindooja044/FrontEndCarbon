import React from "react";
import bgImage from "../assets/cta-bg.jpg"; // replacing CTA image path

/**
 * CTA Component
 * - Encourages users to take action (Login or Book a Demo).
 * - Uses a background image with an overlay gradient for better readability.
 * - Ensures responsiveness and proper alignment using Tailwind CSS.
 */

const CTA = () => {
  return (
    <section
      className="relative w-[1440] h-[576px] flex flex-col justify-center items-center text-center mx-auto -mt-28 z-10"
      style={{
        backgroundImage: `url(${bgImage})`, // Background image
        backgroundSize: "cover",              // Ensure the image fully covers the section
        backgroundPosition: "center",          // Center the image
      }}
    >
      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(182.56deg, rgba(0, 0, 0, 0.15) 7.07%, #222222 81.29%), linear-gradient(180deg, #F5F6FA 0%, rgba(255, 255, 255, 0) 34.72%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white w-[1239] h-[366] top-[90] left-[149]">
        <h2 className="text-4xl font-bold">
          Ready to take meaningful action on your ESG journey?
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Drive impact with accurate carbon accounting, reduction strategies, and transparent reporting.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-green-300 text-green-800 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-400">
            Login
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
