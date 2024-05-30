"use client"
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, BellAlertIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
    {
        id:1,
        title: "How it works",
        path: "#how-it-works",
      },
    {
      id:2,
      title: "About",
      path: "#about",
    },
    {
        id:3,
      title: "Contact",
      path: "#contact",
    },
    {
        id:4,
        title: "Book Now",
        path: "/signup",
      },
  ];

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const TOP_OFFSET = 50;

  useEffect(() => {
    const handleScroll = () => {
      //console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const NavbarHandler=()=>{
    setNavbarOpen(!navbarOpen)
    setShowBackground(!showBackground)
  }
    
  return (
    <nav className={`fixed w-full top-0 left-0 right-0 px-6 py-1 z-40 ${showBackground ? "bg-white border border-[#fff] shadow-md text-white " : "bg-transparent-500 text-black "} bg-opacity-100`}>
        <div className='flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2'>
            <Link href={'/'} className='text-2xl md:text-2xl font-semibold text-white'>
            <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen?(
                        <button onClick={NavbarHandler} className='flex items-center py-2 px-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ):(
                        <button onClick={NavbarHandler} className='flex items-center py-2 px-3 border rounded border-black text-black hover:text-[#e8e8e8] hover:border-[#e8e8e8]'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0 '>      
                    {navLinks.map((item,index)=>(
                        <li key={index}>
                            <NavLink href={item.path} title={item.title} id={item.id} showBackground  />
                        </li>
                        
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen && <MenuOverlay Links={navLinks} />}
    </nav>

  )
}

export default Navbar