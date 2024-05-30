import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const CarShowcase = () => {

  return (
    <motion.div initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}} className="flex items-center justify-between bg-gradient-to-r from-blue-400 to-blue-200 text-white mx-20 px-4 py-2 rounded-lg">
      <div className='flex flex-col items-center text-center'>
        <h2 className="text-xl md:text-4xl font-bold">Ready To Get Started?</h2>
        <p className="mt-4 md:text-lg text-md">We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.</p>
        <button className="mt-6 md:px-6 md:py-2 px-2 py-2 bg-white text-blue-600 font-semibold rounded-full flex items-center text-center">
          Contact Us
          <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      <div className="relative md:w-1/2 md:h-64 w-20 h-20 ">
        <Image src="/cars/mahindra.jpg" layout="fill" objectFit="cover" alt="Car" className='rounded-badge' />
      </div>
    </motion.div>
  )
}

export default CarShowcase


