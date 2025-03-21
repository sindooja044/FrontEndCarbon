import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import companyLogo from "../assets/company-logo.png";


/**
 * Footer Component
 * - Displays the company logo, newsletter subscription, important links, and social media icons.
 * - Uses a responsive flexbox layout with Tailwind CSS.
 * - Includes an email subscription input field with a call-to-action button.
 */

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-24 px-18  pr-6 pl-6 m-[1,440] h-[486] p-[96px_72px]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-start">
        {/* Left Section - Logo & Subscription */}
        <div className="w-[483] h-[250] gap-[36]">
          <p className="text-gray-300 mb-2">Subscribe to our mailing</p>


          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
            <FaEnvelope className="text-gray-500 mx-3 text-lg" />
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 bg-transparent text-black outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
              Subscribe
            </button>
          </div>


          <div className="flex items-center space-x-2 w-[381.56] h-[128] gap[11.57]">
            <img src={companyLogo} alt="Carboncrunch Logo" className="w-12" />
            <p className="text-xl font-bold">Carboncrunch</p>
          </div>
        </div>

        {/* Right Section - Links & Social */}
        <div className="w-[775] h-[252]  gap[40] flex justify-end space-x-16 ">
          {/* Middle Section - Links */}
          <div className="flex space-x-16">
            <div>
              <ul className="text-gray-300 space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>How it works</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-300 space-y-2">
                <li>FAQs</li>
                <li>Start your transaction</li>
                <li>Why choose us</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-300 space-y-2">
                <li>Businesses</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-end space-y-2">
            <p className="text-gray-300">Email</p>
            <p className="text-gray-300">Facebook</p>
            <p className="text-gray-300">X - Twitter</p>
            <p className="text-gray-300">Instagram</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <FaEnvelope className="text-white text-2xl" />
              <FaFacebookF className="text-white text-2xl" />
              <FaTwitter className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8">
        © Carboncrunch. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
