import React from 'react';
import {motion} from 'framer-motion'

const CarButton = ({ makes, activeMake, setActiveMake }) => {
  return (
    <motion.div className="flex" initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}}>
      {makes.map((make, index) => (
        <button
          key={index}
          className={`mr-4 px-1 py-1 md:px-4 md:py-2 text-sm rounded-full ${activeMake === make ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setActiveMake(make)}
        >
          {make}
        </button>
      ))}
    </motion.div>
  );
};

export default CarButton;
