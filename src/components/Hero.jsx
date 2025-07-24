import React from 'react';
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row text-gray-800 my-5 border border-gray-400">
      {/* Hero left-side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 uppercase">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our BestSellers</p>
          </div>
          <h1 className="prata-regular text-3xl lg:text-5xl sm:py-3 leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 uppercase">
            <p className="font-semibold text-sm md:text-base">New Arrivals</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img src={assets.hero_img} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero
