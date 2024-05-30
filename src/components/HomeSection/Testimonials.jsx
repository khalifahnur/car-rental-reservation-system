"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {motion} from 'framer-motion'



function Testimonial({ username, image }) {
  return (
    <div className="flex flex-col items-center p-8 border border-gray-200 shadow-md rounded-lg bg-gradient-to-br from-blue-500 via-yellow-500 to-blue-500 ">
      <div className='w-20'>
      <img
        className="rounded-full mb-4 w-20 h-20"
        src={image}
        alt="avatar"
        
      />
      </div>
      
      <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores, illo molestias, perferendis ipsum enim architecto</p>
      <h1 className="text-gray-600 text-center font-semibold mt-2">{username}</h1>
    </div>
  );
}

export default function Testimonials() {
  const[user,setUser] = useState([]);

  async function getFakeUsers() {
    try {
      const response = await axios.get("/api/users");
      //return response.data;
      return setUser(response.data);
    } catch (error) {
      console.error("error occured",error);
      return []; 
    }
  }
  
   
  useEffect(()=>{
    getFakeUsers()
  },[])

  // console.log("users data",user)


  const testimonials = [
    {
      name: 'Richie Sandreas',
      quote:
        'Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
      rating: 5.5,
    },
    {
      name: 'Precious Hamilton',
      quote:
        'Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
      rating: 5.5,
    },
    {
      name: 'Harold R. Morris',
      quote:
        'Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
      rating: 5.5,
    },
  ];

  return (
    <motion.section initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}} className="flex flex-col items-center justify-center mx-auto px-4 py-8 text-white">
  <div>
    <h2 className="mb-5 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      What People Say About Us?
    </h2>
  </div>
  <div className='flex items-center justify-center w-full'>
    <Carousel
      showThumbs={false}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      className="w-full md:w-3/4 lg:w-1/2"
      autoPlay
      centerMode
    >
      {user.map((user, index) => (
        <Testimonial key={index} image={user.image} username={user.username} />
      ))}
    </Carousel>
  </div>
</motion.section>


  );
}
