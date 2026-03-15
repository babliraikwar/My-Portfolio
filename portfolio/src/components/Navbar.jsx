import React, { useState } from "react";
import {FaBars, FaXmark} from "react-icons/fa6"

const  Navbar=()=>{

  const [showMenu, setshowMenu] =useState(false)
return (
  <nav className="flex w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
   <div className="container mx-auto flex justify-between items-center">
     <div>
      <a href="#" className=" text-3xl font-bold text-white">
         Babli 
        <span className=" text-[#0ea5e9]">Raikwar</span>
        <div className="w-4 h-4 bg-[#0ea5e9] rounded-full"></div>
      </a>
     </div> 

     <div className="hidden md:flex space-x-10">
      <a href="/My-Portfolio/#home" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Home</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/My-Portfolio/#about" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>About Me</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/My-Portfolio/#skills" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Skills</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/My-Portfolio/#projects" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Projects</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/My-Portfolio/#experience" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Experience</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/My-Portfolio/#contact" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Contact</span>
        <span className="absolute left-0 -bottom-1  w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
      </a>
     </div>
     {/* mobile button  */}
     <div className="md:hidden ">
     {
     showMenu ?

    <FaXmark onClick={()=>setshowMenu(!showMenu)}
     className="text-2xl cursor-pointer"
    />:
     <FaBars onClick={()=>setshowMenu(!showMenu)}
     className="text-2xl cursor-pointer"/>
     }
    
    </div>
   </div>
  {/* mobile menu  */}

  {
    showMenu && (
      <div className="md:hidden absolute top-full left-0 w-full bg-dark-300 p-6 flex flex-col space-y-6 text-center">
         
      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#home" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Home</span>
      </a>

      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#about" className=" relative text-white/80 transition duration-300 text-[#0ea5e9] group">
        <span>About Me</span>
      </a>

      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#skills" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Skills</span>
      </a>

      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#projects" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Projects</span>
      </a>

      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#experience" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Experience</span>
      </a>

      <a onClick={()=>setshowMenu(!showMenu)} href="/My-Portfolio/#contact" className=" relative text-white/80 transition duration-300 hover:text-[#0ea5e9] group">
        <span>Contact</span>

      </a>
     
      </div>
    )
  }
   
  </nav>
)
}

export default Navbar