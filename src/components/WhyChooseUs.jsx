import icon from "../assets/icon.png"; // Replace with icon



/**
 * WhyChooseUs Component
 * - Highlights the reasons to choose CarbonCrunch.
 * - Contains a title, description, and feature list.
 * - Uses a responsive flexbox layout with Tailwind CSS.
 */

const WhyChooseUs = () => {
  return (
    <section className="w-[1320] h-[724] top[166] gap-[36]  left-[60] flex flex-col md:flex-row items-start justify-between px-10 md:px-20 py-16 bg-white">
      {/* Left Section - Title & Description */}
      <div className="  w-[577] h-[288] gap-[23]">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Why CarbonCrunch
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Leading Sustainability with CarbonCrunch
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          GHG (Greenhouse Gas) Accounting is a framework used to measure and report greenhouse gas emissions.
        </p>
      </div>

      {/* Right Section - Features List */}
      <div className="mt-10 md:mt-0 flex flex-col space-y-6  w-[707] h-[683] gap-[16]">
        {/* Feature Card 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-start">
          <img src={icon} alt="Feature Icon" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              Regulatory Compliance and Reporting
            </h3>
            <p className="text-gray-600 mt-2">
              Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.
            </p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-start">
          <img src={icon} alt="Feature Icon" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              Meeting Sustainability Goals and Net-Zero Targets
            </h3>
            <p className="text-gray-600 mt-2">
              Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.
            </p>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-start">
          <img src={icon} alt="Feature Icon" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              Cost Savings and Operational Efficiency
            </h3>
            <p className="text-gray-600 mt-2">
              Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
