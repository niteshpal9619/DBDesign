import React from "react";
import { useState } from "react";
import logo from "../Images/RDD_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav
        className="border-gray-200 dark:bg-gray-900"
        style={{ backgroundColor: "#3382C9" }}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-1 p-3">
          <div className="flex items-center space-x-4 cursor-pointer">
            <img className="h-8 w-8 rounded-full" src={logo} alt="" />
            <h3 className="text-white font-semibold">DB DESIGNER</h3>          
          </div>
          <div></div>
          <UserProfileDropdown />
        </div>
      </nav>
    </>
  );
};

function UserProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative left-[15%]">
      {/* Profile button */}
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <div
          className="h-10 w-10 flex items-center justify-center bg-gray-300 rounded-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-full w-full rounded-full flex items-center justify-center bg-white border-2 border-gray-300">
            <div
              style={{ backgroundColor: "rgb(65, 148, 90)" }}
              className="h-8 w-8 rounded-full flex items-center justify-center text-gray-800"
            >
              N
            </div>
          </div>
          {isHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-1 bg-gray-800 text-sm text-white rounded-md">
              Profile
            </div>
          )}
        </div>
        <span className="text-gray-800"></span>
        <svg
          className="h-4 w-4 fill-current text-gray-600"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-10">
          <div className="py-2 px-4">
            <div className="text-gray-800 font-semibold mb-2">Nitesh Pal</div>
            <div className="text-gray-600 mb-4 text-sm">mssnv42@gmail.com</div>
            <div className="border-b border-gray-300 mb-4"></div>
            <Link
              to="/dashboard"
              className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faChartPie} className="mr-2" />
              Dashboard
            </Link>
            <Link
              to="/account"
              className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Account
            </Link>
            <div className="border-b border-gray-300"></div>
            <Link
              to="/logout"
              className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
