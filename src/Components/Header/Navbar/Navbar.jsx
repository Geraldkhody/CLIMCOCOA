import { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Project Profile", path: "/about/summary" },
      { name: "State of Art and Rationale", path: "/about/state_of_art" },
    ],
  },
  { name: "Publications", path: "/publications" },
  {
    name: "Project",
    dropdown: [
      { name: "Research", path: "/project/research" },
      { name: "Field Works", path: "/project/field-works" },
    ],
  },
  {
    name: "People",
    dropdown: [
      { name: "Project Partners", path: "/people/Partners" },
      { name: "Project Members", path: "/people/project-members" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    !isMobileOpen && setDropdownOpen(null);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navbarRef} className="bg-green-800 text-white shadow-md">
      <div className="wrapper">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-lg md:text-xl lg:text-2xl font-bold cursor-pointer"
          >
            CLIMCOCOA
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:text-sm lg:text-[16px] md:space-x-5 lg:space-x-10">
            {navLinks.map((link, index) => (
              <div key={index} className="relative cursor-pointer">
                {link.dropdown ? (
                  <>
                    <span
                      onClick={() => toggleDropdown(index)}
                      className={`${style.navLink} flex items-center space-x-2 hover:text-green-100`}
                    >
                      <span>{link.name} </span>
                      <span>
                        <ChevronDown />
                      </span>
                    </span>
                    {dropdownOpen === index && (
                      <div className="absolute -left-1/3 mt-2 bg-white text-gray-800 border border-green-600 rounded-md shadow-md min-w-52 ">
                        {link.dropdown.map((sublink, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={sublink.path}
                            className="block px-4 py-2 hover:bg-green-600 hover:text-green-100 text-sm"
                            onClick={closeMobileMenu}
                          >
                            {sublink.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className="hover:text-green-100"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => toggleMobileMenu()} className="md:hidden">
            <div className={`${style.hamburger} text-white`}>
              {isMobileOpen ? <X /> : <Menu />}
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
                      <ChevronDown />
                    </span>
                  </button>
                  {dropdownOpen === index && (
                    <div className="bg-white text-gray-800 border rounded-md shadow-md w-full mt-2">
                      {link.dropdown.map((sublink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={sublink.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={closeMobileMenu}
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className="block hover:text-gray-300"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
