"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
  return (
    <div>
      <h1>hello world</h1>
    <Carousel autoPlay interval={2000} infiniteLoop showIndicators={false} showThumbs={false} className='md:w-[80vw] md:h-[50vh] '>
    <div>
        <img src="/cars/cx5.jpg" className='w-300  h-[50vh]' />
        <p className="legend">Mazda CX5</p>
    </div>
    <div>
        <img src="/cars/tx.jpg" className='w-300  h-[50vh]'   />
        <p className="legend">Toyota TX</p>
    </div>
    <div>
        <img src="/cars/lexus.jpg" className='w-300  h-[50vh]'  />
        <p className="legend">Lexus</p>
    </div>
</Carousel>
</div>
  )
}

export default CarouselSection