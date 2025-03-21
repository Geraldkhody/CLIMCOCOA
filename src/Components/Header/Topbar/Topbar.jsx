import React, { useState } from "react";
import Mail from "@/assets/mail.svg";
import Phone from "@/assets/Phone.svg";
import Search from "@/assets/Search.svg";
import style from "./Topbar.module.css";

const Topbar = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="w-full border-b bg-green-700 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-8 md:min-h-12 flex flex-col sm:flex-row space-y-2 sm:space-y-0 py-1 justify-between items-center text-xs md:text-sm   ">
        {/* Left Side */}
        <div className="w-full flex items-center justify-between relative z-10 ">
          <div className="flex flex-col sm:flex-row sm:items-center space-x-2 md:space-x-4 ">
            <span className="flex items-center space-x-2">
              <img src={Mail} alt="mail svg" className="w-3.5 md:w-5 " />
              <span>climcocoae@ug.edu.gh</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="flex items-center space-x-2">
              <img src={Phone} alt="phone svg" className="w-3.5 md:w-5 " />
              <span>{`(+233) 279943213`}</span>
            </span>
          </div>
          {/* Right side */}
          <div className="sm:hidden ml-auto " onClick={toggleSearch}>
            <img
              src={Search}
              alt=""
              className="bg-green-100 px-2 py-1 rounded-full"
            />
          </div>

          <div className="w-64 sm:w-[25%] hidden sm:flex items-center border border-gray-300 text-black rounded-md px-3 py-1 bg-green-100">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent w-full focus:outline-none flex-grow "
            />
            {/*=========  Search  =========*/}
            <div className="text-white cursor-pointer ">
              <img src={Search} alt="" className="pl-2 " />
            </div>
          </div>
        </div>

        {showSearch && (
          <div className={`${style.inputField} w-64 sm:w-[25%] sm:hidden flex items-center border border-gray-300 text-black rounded-md px-3 py-1 bg-green-100`}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${style.input} bg-transparent w-full focus:outline-none flex-grow `}
            />
            <div className="text-white ">
              <img src={Search} alt="" className="pl-2 " />
            </div>
          </div>
        ) }
      </div>
    </div>
  );
};

export default Topbar;
