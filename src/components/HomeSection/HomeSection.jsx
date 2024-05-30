"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion'

const HomeSection = () => {
  const backgroundImageSrc = "../../../car.jpeg";
  return (
    <>
      <div className="relative w-full  md:h-[70vh] h-[40vh] overflow-hidden ">
      <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImageSrc})`,
      filter: "blur(3px)",
      backgroundSize: "cover",
    }}
  />
        
        <motion.div initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}} className="absolute py-20 px-20 text-center ">  
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-xl lg:text-4xl lg:leading-normal font-bold sm:text-2xl text-center">
            
            <TypeAnimation
              sequence={["Find", 1000, "Book", 1500, "And Rent",2000]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
            <br />
            <span className="text-transparent bg-clip-text text-black">
              {""} A Car Easily.
            </span>
          </h1>
          <h1 className=" text-black text-xl lg:text-5xl lg:leading-normal font-bold sm:text-2xl text-center">
            Get a car wherever and whenever you need it.
            </h1>
        </motion.div>
        
      </div>
    </>
  );
};

export default HomeSection;
