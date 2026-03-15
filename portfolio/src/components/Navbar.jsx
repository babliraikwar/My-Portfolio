import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav className="flex w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8  fixed top-0 left-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        <div>
          <a href="#home" className="text-3xl font-bold text-white">
            Babli
            <span className="text-[#0ea5e9]">Raikwar</span>
            <div className="w-4 h-4 bg-[#0ea5e9] rounded-full"></div>
          </a>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-10">

          <a href="#home" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#about" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>About Me</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#skills" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#projects" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#experience" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        {/* mobile button */}
        <div className="md:hidden">
          {showMenu ?

            <FaXmark
              onClick={() => setshowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />

            :

            <FaBars
              onClick={() => setshowMenu(!showMenu)}
              className="text-2xl cursor-pointer text-white"
            />
          }
        </div>

      </div>

      {/* mobile menu */}
      {
        showMenu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-300 p-6 flex flex-col space-y-6 text-center">

            <a onClick={() => setshowMenu(false)} href="#home" className="text-white/80 hover:text-[#0ea5e9]">Home</a>

            <a onClick={() => setshowMenu(false)} href="#about" className="text-white/80 hover:text-[#0ea5e9]">About Me</a>

            <a onClick={() => setshowMenu(false)} href="#skills" className="text-white/80 hover:text-[#0ea5e9]">Skills</a>

            <a onClick={() => setshowMenu(false)} href="#projects" className="text-white/80 hover:text-[#0ea5e9]">Projects</a>

            <a onClick={() => setshowMenu(false)} href="#experience" className="text-white/80 hover:text-[#0ea5e9]">Experience</a>

            <a onClick={() => setshowMenu(false)} href="#contact" className="text-white/80 hover:text-[#0ea5e9]">Contact</a>

          </div>
        )
      }

    </nav>
  );
}

export default Navbar;