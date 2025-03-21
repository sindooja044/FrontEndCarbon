import dashboardImg from "../assets/dashboard.png"; // Importing the dashboard image

/**
 * HowItWorks Component
 * - Displays a step-by-step guide on how the platform works.
 * - Includes three key steps with descriptions.
 * - Shows a dashboard image with a styled background.
 */

const HowItWorks = () => {
  return (
    <section className="w-[1440] h-[1027] top[1926] bg-white px-10 md:px-32 py-20 flex flex-col items-center text-center">
      <div className="w-[1130] h-[173] top-[45] left-[155] gap-[25]">
        {/* Section Title */}
        <span className="text-green-600 font-semibold text-lg">How It Works?</span>

        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-gray-900 mt-4">Getting Started is easy</h2>
        <p className="text-lg text-gray-600 mt-2  font-bold" >How CarbonCrunch SAAS works</p>
      </div>
      {/* Steps */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-[28] w-[1283] h-[165.45] top-[287] left-[97] p-24 rounded-2xl max-w-5xl">
        {/* Step 1 */}
        <div className="text-left w-[393] h-[115.45] gap-[8]">
          <div className="w-16 h-1 bg-green-600 mb-2">  </div>{/* Green underline */}
          <span className="text-lg font-bold text-gray-900">01</span>
          <h3 className="text-xl font-semibold text-green-700 mt-2">
            Track and manage your Net Zero Pathway
          </h3>
          <p className="text-gray-600 mt-2">
            Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.
          </p>
        </div>



        {/* Step 2 */}
        <div className="text-left  w-[393] h-[117.45] gap-[8]">

          <span className="text-lg font-bold text-gray-900">02</span>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Track and manage your Net Zero Pathway
          </h3>
          <p className="text-gray-600 mt-2">
            Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.
          </p>

        </div>

        {/* Step 3 */}
        <div className="text-left  w-[393] h-[117.45] gap-[8]">

          <span className="text-lg font-bold text-gray-900">03</span>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Track and manage your Net Zero Pathway
          </h3>
          <p className="text-gray-600 mt-2">
            Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.
          </p>


        </div>
      </div>




      {/* Dashboard Image with Green Background */}
      <div className="mt-16 w-[1003] h-[499] top-[539.9] left-[219] max-w-6xl bg-green-600 rounded-tl-[19.25px] rounded-tr-[19.25px] p-5">
        <img src={dashboardImg} alt="Dashboard" className="w-[922.89] h-[506.31] top-[36.85] left-[40.46] rounded-tl-[19.23px]  rounded-tr-[19.25px]shadow-lg" />
      </div>

    </section>
  );
};

export default HowItWorks;
