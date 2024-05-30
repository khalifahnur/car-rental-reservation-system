import React from 'react'
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, PhoneArrowUpRightIcon, ReceiptPercentIcon, TruckIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

const HowItWorks = () => {
  return (
    <motion.div initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.5}} className='min-h-screen flex items-center justify-center px-20'>
    <div className='items-center justify-center flex flex-col'>
        <h2 className="mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">How It Works</h2>
        <p className='px-20 text-center text-3 justify-center font-medium'>At DriveEase, we believe in making your car rental experience as seamless and convenient as possible. Whether planning your weekend getaway, a business trip or simply need a reliable vehicle for your daily commute, we've got you covered.</p>
        <div className='mt-10 grid grid-cols-3 grid-rows-2 gap-4 '>
            
            <div className='p-4 flex flex-col items-center border-2 rounded-t-3xl bg-[#ffffff]'>
                <ClipboardDocumentCheckIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>Easy Booking Process</h3>
                <p className='text-gray-400 text-center'>Browse, select and reserve your vehicle in just a few minutes</p>
            </div>
            <div className='border-2 p-4 flex flex-col items-center rounded-t-3xl bg-[#ffffff]'>
                <ClipboardDocumentCheckIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>Wide range of vehicles</h3>
                <p className='text-gray-400 text-center'>Choose from a range of well maintained vehicle to suit your needs.</p>
            </div>
            <div className='border-2 p-4 flex flex-col items-center rounded-t-3xl bg-[#ffffff]'>
                <CalendarDaysIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>Flexible rental options</h3>
                <p className='text-gray-400 text-center'>Rent by the hour, day, week, month whatever works for you.</p>
            </div>
            <div className='border-2 p-4 flex flex-col items-center rounded-b-3xl bg-[#ffffff]'>
                <TruckIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>Pickup and drop-off</h3>
                <p className='text-gray-400 text-center'>Pickup and drop-off at multiple locations for your convenience.</p>
            </div>
            <div className='border-2 p-4 flex flex-col items-center rounded-b-3xl bg-[#ffffff]'>
                <ReceiptPercentIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>Transparent pricing</h3>
                <p className='text-gray-400 text-center'>No hidden fees-know exactly what you're paying for upfront.</p>
            </div>
            <div className='border-2 p-4 flex flex-col items-center rounded-b-3xl bg-[#ffffff]'>
                <PhoneArrowUpRightIcon className='bg-gray-200 p-2 rounded-full' width={50} height={50} />
                <h3 className='text-black-500'>24/7 customer support</h3>
                <p className='text-gray-400 text-center'>Our customer support team is always available to assist you.</p>
            </div>
        </div>
    </div>
</motion.div>


  )
}

export default HowItWorks