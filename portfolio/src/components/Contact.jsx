import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGit, FaGithub, FaLinkedin, FaMapMarker, FaPhone, FaTwitter } from "react-icons/fa";

const Contact =()=>{
  return (
    <motion.div
    initial={{opacity: 0, y:50} }
    whileInView={{opacity: 1, y:0}}
    transition={{duration:0.6, ease: 'easeOut'}}
    viewport={{once:false, amount:0.2}}
    id="contact"
    className="py-20 bg-dark-200 scroll-mt-24"
    >
      <div className=" container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-4 "> 
          Get in <span className=" text-[#0ea5e9]"> Touch </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
         Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
       {/* contact form  */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className=" block text-gray-300 mb-2"> 
                  Your Name</label>
                  <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg py-3 outline-none"
                  type="text"  />
              </div>



              <div>
                <label htmlFor="email" className=" block text-gray-300 mb-2"> 
                  Email Address</label>
                  <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg py-3 outline-none"
                  type="email"  />
              </div>

              <div>
                <label htmlFor="message" className=" block text-gray-300 mb-2"> 
                Your Message</label>
                  <textarea
                  className="w-full h-40  bg-dark-300 border border-dark-400 rounded-lg py-3 outline-none"
                  type="text"  />
              </div>

            <div>
              <a
href="https://wa.me/918817478158"
target="_blank"
className="w-full inline-block text-center px-6 py-3 bg-green-500 rounded-lg font-medium hover:bg-green-600 transition duration-300"
>
Send on WhatsApp
</a>
            </div>
             
            </form>
          </div>

        {/* contact information  */}
         <div className="space-y-8 ">
           <div className=" flex items-start">
            <div className="text-[#0ea5e9] text-2xl mr-4"> 
              <FaMapMarker />
            </div>
            <div>
              <h3 className=" text-lg font-semibold mb-2 ">Location</h3>
              <p className=" text-gray-400">Ahmedabad, Gujarat, India</p>
            </div>
           </div>

            <div className=" flex items-start">
            <div className="text-[#0ea5e9] text-2xl mr-4"> 
              <FaEnvelope />
            </div>
            <div>
              <h3 className=" text-lg font-semibold mb-2 ">Email</h3>
              <p className=" text-gray-400">babliraikwar.in@gmail.com</p>
            </div>
           </div>

            <div className=" flex items-start">
            <div className="text-[#0ea5e9] text-2xl mr-4"> 
              <FaPhone />
            </div>
            <div>
              <h3 className=" text-lg font-semibold mb-2 ">Phone</h3>
              <p className=" text-gray-400">+91 8817478158</p>
            </div>
           </div>

           <div className=" pt-4">
             <h3 className=" text-lg font-semibold mb-4">
              Follow Me
             </h3>
             <div className="flex space-x-4">
              <a href="https://github.com/babliraikwar" className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white transition duration-300">
                <FaGithub />
              </a>

               <a href="https://www.linkedin.com/in/bableeraikwar/" className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white transition duration-300">
                <FaLinkedin />
              </a>

               <a href="#" className=" w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white transition duration-300">
                <FaTwitter />
              </a>
             </div>            
           </div>
         </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact