import React from "react";
import heroImage from '@/assets/Hero/cocoa-tree-Ghana-e1499164059353-800x445.jpg';

const Hero = () => {
  return (
    <div
      className="relative h-[calc(100vh-8rem)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mx-8 mb-6">
            Building Resilience for Ghana's Cocoa Future
          </h1>
          <p className="text-sm sm:text-[16px] md:text-lg mx-6 mb-8">
            Understanding the impacts of climate change on cocoa production and
            empowering farmers with innovative agroforestry solutions
          </p>
          <a href="#" className="bg-green-700 text-white text-xs sm:text-ms md:text-[16px]  py-3 px-8 rounded-lg  font-semibold hover:bg-green-700 transition duration-300">
            Explore the CLIMCOCOA Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
