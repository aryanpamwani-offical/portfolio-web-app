'use client'
import React from 'react'
import { useSelector } from 'react-redux'
const HeadingComp = ({heading,subheading,margin ,animation}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <div className={`flex flex-col justify-center items-center m-auto ${margin} `} data-aos={animation}>
        <h3 className='opens-sans text-4xl font-bold uppercase'>{heading}</h3>
        <p className={lightTheme?'inter text-gray-500':'inter text-gray-300'}>{subheading}</p>
        <div className={lightTheme?'w-20 bg-slate-600 h-1 mb-10 ':'w-20 bg-slate-400 h-1 mb-10 '}></div>
    </div>
  )
}

export default HeadingComp  