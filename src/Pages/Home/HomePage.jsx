"use client"
import React from 'react'
import SearchSection from '@/components/HomeSection/SearchSection'
import HomeSection from '@/components/HomeSection/HomeSection'
import CarsSection from '@/components/HomeSection/CarsSection'
import AvailableCars from "@/components/HomeSection/AvailableCars";
import CarShowcase from "@/components/HomeSection/CarShowcase";
import HowItWorks from "@/components/HomeSection/HowItWorks";
import OurServices from "@/components/HomeSection/OurServices";
import Testimonials from "@/components/HomeSection/Testimonials";
import { useAppContext } from '@/context'



const HomePage = () => {
  // const {user} = useAppContext()
  // console.log(user)
  
  return (
    <div>
        <HomeSection />
        <SearchSection />
        <CarsSection />
        <section id='how-it-works'>
         <HowItWorks />
        </section>
        
        <AvailableCars />
        <section id='about'>
         <OurServices />
        </section>
        <section id='contact'>
        <Testimonials />
        <CarShowcase />
        </section>
    </div>
  )
}

export default HomePage