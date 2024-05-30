import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const CarList = ({ cars }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <motion.div 
    initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}}
    className="flex flex-wrap justify-center items-center cursor-pointer">
      {cars.map((car) =>
        car.model.slice(0, 4).map((model,index) => (
          <div
            
            key={model.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 items-center"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={model.imgUrl}
                alt={model.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{model.name}</h3>
                <div className="flex justify-between items-center mb-2 ">
                  <div className="flex items-center">
                    <Image
                      src={"/car-seat.png"}
                      alt="speedometer"
                      width={10}
                      height={10}
                    />
                    <p className="text-xs">4seater</p>
                  </div>
                  <div className="flex items-center ml-4">
                    <Image
                      src={"/steering-wheel.png"}
                      alt="speedometer"
                      width={10}
                      height={10}
                    />
                    <p className="text-xs">Auto</p>
                  </div>
                  <div className="flex items-center ml-4">
                    <Image
                      src={"/speedometer.png"}
                      alt="speedometer"
                      width={10}
                      height={10}
                    />
                    <p className="text-xs">12KM/L</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">
                    Starting at ksh.{model.price}/hr
                  </span>
                </div>
                <div className="flex justify-center gap-5 items-center ">
                  <Link
                    href={"/filter"}
                    className="p-2 bg-orange-500 text-white text-xs rounded-full "
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </motion.div>
  );
};

export default CarList;
