import React from "react";
import style from "./Banner.module.css";

const Banner = ({text, bannerImage}) => {
  return (
    <div
      className="relative w-full bg-cover bg-top h-36 sm:h-48 md:h-72 lg:h-[23rem] "
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
        <div className=" absolute  inset-0 bg-black/60 ">
          <div className="wrapper h-full flex justify-center items-center ">
            <p className={`${style.header} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white `}>{text}</p>
          </div>
        </div>
    </div>
  );
};

export default Banner;
