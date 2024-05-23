import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[white] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="block sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <MenuIcon sx={{ color: "black" }} />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[#173535] bg-opacity-75 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-50`}
      >
        <div className="relative w-full h-full bg-[#173535] flex flex-col">
          <button
            onClick={toggleMenu}
            className="absolute top-4 left-4 text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute top-4 right-20 text-white text-xl">
            <img src="/logo.png" alt="Logo" className="h-30 w-50" />
          </div>
          <div className="mt-auto mb-20 w-full flex flex-col items-center space-y-8 px-4">
            <a
              href="#"
              className="block text-white hover:text-gray-300 w-full text-center"
            >
              Venue
            </a>
            <a
              href="#"
              className="block text-white hover:text-gray-300 w-full text-center"
            >
              Vendors
            </a>
            <a
              href="#"
              className="block text-white hover:text-gray-300 w-full text-center"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
