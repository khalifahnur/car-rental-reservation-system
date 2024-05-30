"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "../Btn/TabButton";
import {motion} from 'framer-motion'

const TAB_DATA = [
    {
      title: "24 Hour Car Delivery",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Book your car anytime and we will deliver it direclty to you.</li>
        </ul>
      ),
    },
    {
      title: "Best Price Guaranteed",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Find a lower price ? We will refund you 100% differential.</li>
        </ul>
      ),
    },
    {
      title: "24/7 Technical Support",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Have a question? Contact support anytime when you have a problem.</li>
        </ul>
      ),
    },
  ];

export default function OurServices() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <motion.div className="flex flex-col md:flex-row items-center justify-center p-4 mt-10" initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}}>
      <div
        className="blob w-1/2 h-100 overflow-hidden md:w-1/2 p-4"
        style={{
          borderRadius: "45% 55% 55% 45% / 65% 35% 65% 35%",
          backgroundColor: "gray",
        }}
      >
        <img
          src="/cars/porsche.jpeg"
          alt="Description of Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 p-4 md:ml-10  ">
        <h1 className="mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Service</h1>
      <div className="flex flex-col mt-3 gap-5 ">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              {""} 24 Hour Car Delivery{""}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              {""} Best Price Guaranteed{""}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("certifications")}
              active={tab === "certifications"}
            >
              {""} 24/7 Technical Support{""}
            </TabButton>
          </div>
          <div className="mt-8 flex flex-row">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        
      </div>
    </motion.div>
  );
}
