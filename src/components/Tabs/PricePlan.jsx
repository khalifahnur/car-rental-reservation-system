import React from 'react'

const PricePlan = ({price}) => {
  const dayPrice = 24 * price;
  const monthPrice = (24 * price) * 30;

  return (
<div className='flex flex-row justify-center space-x-10'>
  <div className='border border-orange-500 bg-orange-500 rounded-lg flex flex-col justify-center items-center p-4'>
    <p className='text-center text-[#000] font-medium text-sm'>Hour</p>
    <p className='text-center text-[#000] font-medium text-sm'>Ksh.{price}</p>
  </div>
  <div className='border border-orange-500  rounded-lg flex flex-col justify-center items-center p-4'>
    <p className='text-center text-[#000] font-medium text-sm'>Day</p>
    <p className='text-center text-[#000] font-medium text-sm'>Ksh.{dayPrice}</p>
  </div>
  <div className='border border-orange-500 rounded-lg flex flex-col justify-center items-center p-4'>
    <p className='text-center text-[#000] font-medium text-sm'>Month</p>
    <p className='text-center text-[#000] font-medium text-sm'>Ksh.{monthPrice}</p>
  </div>
</div>

  )
}

export default PricePlan