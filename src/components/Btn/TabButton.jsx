import React from 'react'

export default function TabButton({active, selectTab, children}) {
    const buttonClasses = active?'text-orange-500 border-b border-orange-500 w-1/2 py-2 border-b-2 rounded-full':'text-[#000]'
  return (
    <button 
    onClick={selectTab}
    className='font-semibold'>
        <p className={`mr-3 font-semibold hover:text-orange-500 ${buttonClasses}`}>
        {children}
        </p>
        
    </button>
  )
}
 