import React from "react";
import { Link } from "react-router-dom";

interface LandingProps {
  pitchDesk: boolean;
  create: boolean;
}

function Landing(props: LandingProps) {
  return (
    <div>
      <div className="pt-32 sm:pt-52">
        <div className="flex container mx-auto px-1 flex-col mt-7 items-center">
          <h1 className="text-center text-5xl md:text-7xl font-bold primaryTextColor tracking-wide sm:leading-[4rem]">
          A smart AI-powered platform for{" "}
            <span className="colorText"> Event managers to streamline </span>{" "}
            planning and management.
          </h1>
          <p className="text-center mt-4 text-lg text-gray-800 sm:mt-10 sm:text-2xl primaryTextColor">
            
A cutting-edge platform powered by advanced AI technology, empowering users with intelligent insights and automated solutions for enhanced productivity and decision-making.
          </p>

          <Link
            className="text-lg primaryColor text-white mt-16 px-16 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-100 hover:bg-[#bd3957]"
            to="/home"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
