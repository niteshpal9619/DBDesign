import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import RDDLogo from '../Images/RDD_logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
            <img src={RDDLogo} alt="" className="w-10 h-10 mr-2 rounded-full" />
        </Link>

        
        <div className="md:flex md:items-center hidden">
          <NavLink
            to="/product"
            className="text-white px-3 py-2 rounded hover:bg-gray-700 relative"
            onClick={toggleProductDropdown}
          >
            Product  <FontAwesomeIcon icon={faChevronDown} />
            {isProductDropdownOpen && (
              <div className="absolute top-full left-0 w-full md:w-48 bg-white rounded shadow-md overflow-hidden mt-1 z-50">
                <Link
                  to="/product/feature1"
                  className="block text-gray-700 py-2 px-4 hover:bg-gray-100"
                >
                  Feature 1
                </Link>
                <Link
                  to="/product/feature2"
                  className="block text-gray-700 py-2 px-4 hover:bg-gray-100"
                >
                  Feature 2
                </Link>
              </div>
            )}
          </NavLink>
          <NavLink
            to="/UseCases"
            className="text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            Use Cases
          </NavLink>
          <NavLink
            to="/Resources"
            className="text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            Resources
          </NavLink>
          <NavLink
            exact
            to="/PricingSection"
            className="text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            Pricing
          </NavLink>
          <NavLink
            exact
            to="/Login"
            className="text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            Sign up Free
          </NavLink>
        </div>
        <button
          id="menu-btn"
          className="md:hidden focus:outline-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11M13 18V16H20M4 6V8H20"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-full pb-20 ${
          isOpen ? "transform translate-y-0" : "transform translate-y-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="bg-gray-800 opacity-100 transition duration-300 ease-in-out absolute inset-x-0 top-0 h-full"></div>
        <div className="bg-white px-4 py-8 rounded shadow-xl">
          <NavLink
            to="/product"
            className="block text-xl text-gray-700 py-2 px-4 hover:bg-gray-100"
          >
            Product
          </NavLink>
          <NavLink
            to="/use-cases"
            className="block text-xl text-gray-700 py-2 px-4 hover:bg-gray-100"
          >
            Use Cases
          </NavLink>
          <NavLink
            to="/resources"
            className="block text-xl text-gray-700 py-2 px-4 hover:bg-gray-100"
          >
            Resources
          </NavLink>
          <NavLink
            exact
            to="/pricing"
            className="block text-xl text-gray-700 py-2 px-4 hover:bg-gray-100"
          >
            Pricing
          </NavLink>
          <NavLink
            exact
            to="/pricing"
            className="block text-xl text-gray-700 py-2 px-4 hover:bg-gray-100"
          >
            Sign up Free
          </NavLink>
        </div>
      </div>
    </nav>         
    </>    
  );
};
export default Navbar;
