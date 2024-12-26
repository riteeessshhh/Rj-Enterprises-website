import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [navbarBtn, setNavbarBtn] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-xl">
      {/* Navbar for smaller devices */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4">
          <span className="text-3xl font-semibold text-white pl-10 tracking-wider">
            RJ Enterprises
          </span>
          <button
            className="text-white bg-blue-600 rounded-md p-2"
            onClick={() => setNavbarBtn(!navbarBtn)}
          >
            <BiMenu size={24} />
          </button>
        </div>
        {navbarBtn && (
          <div className="bg-gray-800 text-gray-300">
            <ul className="flex flex-col border-t border-gray-700">
              <li className="border-b border-gray-700 pl-8 p-4">
                <a href="/" className="hover:text-blue-400">Home</a>
              </li>
              <li className="border-b border-gray-700 pl-8 p-4">
                <a href="/about" className="hover:text-blue-400">About</a>
              </li>
              <li className="border-b border-gray-700 pl-8 p-4">
                <a href="/contact" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Navbar for larger devices */}
      <div className="hidden lg:flex justify-around items-center px-16 py-6 bg-gray-900 border-b border-gray-800">
        <span className="text-4xl font-semibold tracking-wider capitalize text-white">
          RJ Enterprises
        </span>
        <ul className="flex gap-24 text-xl">
          <li>
            <a href="/" className="text-gray-300 hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;