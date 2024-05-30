import Image from 'next/image'
import React from 'react'

const CardBrands = ({id,model,imgUrl}) => {
  return (
    <div className=' '>
    <div className='flex flex-row items-center justify-center '>
        <Image src={imgUrl} alt="models" width={50} height={50} /> 
    </div>
</div>


  )
}

export default CardBrands