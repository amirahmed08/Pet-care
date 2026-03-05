import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTachometerAlt } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-300 to-purple-300 py-6 text-center md:text-start lg:text-start">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + Subscribe */}
        <div>
          <h2 className="text-xl font-bold flex justify-center md:justify-start lg:justify-start  items-center gap-1">
            <span className="bg-orange-500 text-white px-3 py-1 rounded">P</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">E</span>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded">T</span>
            <span className="text-gray-700">WarmPaws</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            We love animals. Our dedicated team contact your pets 
            reacte lest cost posite.
          </p>

          <div className="flex mt-5 gap-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-xl border bg-gray-100 border-white focus:outline-none"
            />
            <button className="bg-blue-500 rounded-xl text-white px-4 hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-purple-500 hover:font-bold cursor-pointer">Home</li>
            <li className="hover:text-purple-500 hover:font-bold cursor-pointer">About Us</li>
            <li className="hover:text-purple-500 hover:font-bold cursor-pointer">Services</li>
            <li className="hover:text-purple-500 hover:font-bold cursor-pointer">Gallery</li>
            <li className="hover:text-purple-500 hover:font-bold cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-start lg:text-star">Contact Us</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              122 PetCare Street
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              info@petcare.com
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              +880 123 450 7999
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex justify-center items-center md:justify-start lg:justify-start gap-2 hover:text-purple-500 hover:font-bold cursor-pointer">
              <FaTachometerAlt className="text-blue-500" />
              View Dashboard
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2 hover:text-purple-500 hover:font-bold cursor-pointer">
              <IoCalendarOutline className="text-blue-500" />
              Manage Appointments
            </li>
            <li className="flex justify-center md:justify-start  lg:justify-start items-center gap-2 hover:text-purple-500 hover:font-bold cursor-pointer">
              <MdPets className="text-blue-500" />
              Manage Pets
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2 hover:text-purple-500 hover:font-bold cursor-pointer">
              <HiOutlineUserGroup className="text-blue-500" />
              Manage Users
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm border-t mt-5 border-gray-400 pt-3">
        © 2026 PetCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
