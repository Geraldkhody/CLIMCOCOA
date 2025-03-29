import { useState } from "react";
import DropdownArrow from "@/assets/dropdown_arrow.svg";
import style from "./Navbar.module.css";
import { Close, Hamburger } from "../../../Constant";
// import { a } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Summary", path: "/about/summary" },
      { name: "State of Art and Rationale", path: "/about/state_of_art" },
    ],
  },
  { name: "Resources", path: "/resource" },
  {
    name: "Project",
    dropdown: [{ name: "Research", path: "#" }],
  },
  {
    name: "People",
    dropdown: [
      { name: "Participants Management", path: "#" },
      { name: "Project Members", path: "#" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="wrapper">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a to="/" className="text-lg md:text-xl lg:text-2xl font-bold cursor-pointer">
            CLIMCOCOA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:text-sm lg:text-[16px] md:space-x-5 lg:space-x-10">
            {navLinks.map((link, index) => (
              <div key={index} className="relative cursor-pointer">
                {link.dropdown ? (
                  <>
                    <span onClick={() => toggleDropdown(index)} className={`${style.navLink} flex items-center space-x-2 hover:text-green-100`}>
                      <span>{link.name} </span>
                      <span>
                        <img src={DropdownArrow} alt="dropdown arrow" />
                      </span>
                    </span>
                    {dropdownOpen === index && (
                      <div className="absolute -left-1/3 mt-2 bg-white text-gray-800 border border-green-600 rounded-md shadow-md min-w-52 ">
                        {link.dropdown.map((sublink, subIndex) => (
                          <a
                            key={subIndex}
                            href={sublink.path}
                            className="block px-4 py-2 hover:bg-green-600 hover:text-green-100 text-sm"
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.path} className="hover:text-green-100">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden"
          >
            <div className={`${style.hamburger} text-white`}>
              {isMobileOpen ? <Close /> : <Hamburger />}
              
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
      </div>
        {isMobileOpen && (
          <div className="absolute bg-green-800 w-full md:hidden space-y-2 pb-4 pl-4 border">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center text-white hover:text-gray-300 w-full space-x-2"
                    >
                      <div>{link.name} </div>
                      <span>
                        <img src={DropdownArrow} alt="dropdown arrow" />
                      </span>
                    </button>
                    {dropdownOpen === index && (
                      <div className="bg-white text-gray-800 border rounded-md shadow-md w-full mt-2">
                        {link.dropdown.map((sublink, subIndex) => (
                          <a
                            key={subIndex}
                            to={sublink.path}
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a to={link.path} className="block hover:text-gray-300">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
    </nav>
  );
};

export default Navbar;
