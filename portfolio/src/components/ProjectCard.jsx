import React from "react";

const ProjectCard =({title , description, image, tech,demo, code})=>{
  return(
    <div className=" bg-dark-300 rounded-2xl overflow-hidden  hover:-translate-y-2  transitionduration-300 cursor-pointer">
      <img src={image} alt={title} className=" w-full h-60 object-cover" />
        <div className="p-6"> 
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index)=>(
              <span key={index} className=" px-3 py-1 bg-dark-400 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
         <div className=" flex gap-2">
           <a href={demo} className="flex-1 text-center px-4 py-2 text-sm md:text-lg bg-[#0ea5e9] rounded-lg font-medium hover:bg-[#bae6fd] transition duration-300">
            Live Demo
           </a>
           <a href={code} className="flex-1  text-center text-sm px-4  md:text-lg py-2 border-2 border-[#0ea5e9] font-medium rounded-lg hover:bg-[#173a4e] transition duration-300" >
            Code
            </a>
         </div>
        </div>
    </div>
  )
}

export default ProjectCard