import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets, assets1 } from "../assets/assets";



const About =()=>{
  return(
    <motion.div 
     initial={{opacity: 0, y:50} }
     whileInView={{opacity: 1, y:0}}
     transition={{duration:0.6, ease: 'easeOut'}}
     viewport={{once:true}}
     id="about"
     className="py-20 bg-dark-200"
     >
      <div className="container  mx-0 px-6 ">
        {/* heading  */}
        <h2 className="text-3xl font-bold text-center mb-4 ">About  <span className="text-[#0ea5e9]">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Get to know more about my background and passion</p>

        {/* image + my journey  */}
       <div className="flex flex-col md:flex-row items-start gap-12">

  {/* image */}
  <div className="md:w-2/5 rounded-lg overflow-hidden">
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      src={assets.myphoto}
      className="w-full h-full object-cover"
      alt="profile"
    />
  </div>

  {/* content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="md:w-3/5"
  >
    <div className="rounded-2xl p-8">
      <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

      <p className="text-gray-300 mb-6">
        I am a B.Tech Computer Science Engineering graduate (2025) with a strong interest in web development.
      </p>

      <p className="text-gray-300 mb-6">
        I am a passionate Frontend Developer with strong skills in React.js, JavaScript, and modern UI frameworks.
        I love building responsive and user-friendly web applications that provide a smooth user experience.
        I enjoy turning ideas into real web products using clean and efficient code.
      </p>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutInfo.map((data, index) => (
          <div
            key={index}
            className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="text-[#0ea5e9] text-4xl mb-4">
              <data.icon />
            </div>

            <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
            <p className="text-gray-300">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
</div>

      </div>

    </motion.div>
  )
}

export default About