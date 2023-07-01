import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer(): JSX.Element {
  return (
    <>
      <div className="bg-purple-300/80 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-3">
          <ul>
            <p className="text-black font-bold text-3xl pb-6">
              Planner<span className="text-yellow-900">AI</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Features</p>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Intelligent Scheduling
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Venue & Supplier Recommendations
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Smart Budgeting
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              RSVP Management
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              About Us
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Contact Us
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Feedback
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Blogs
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:bg-black text-black hover:text-white px-3 py-2 rounded-md font-medium">
              Testimonials
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
