"use client";
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';

const SkillItem = ({lanuageName,imgUrl,cssAdd}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <div className={`group flex flex-col items-center p-6 rounded-xl ${lightTheme ? 'bg-[var(--grey-007)] border-[var(--grey-006)]' : 'bg-[var(--grey-002)] border-[var(--grey-002)]'} border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 transition-theme`}>
      <div className="relative transition-transform duration-300 group-hover:scale-110">
        <Image 
          src={imgUrl} 
          width={80} 
          height={80} 
          className={lightTheme ? `m-auto aspect-square` : `m-auto ${cssAdd} aspect-square`} 
          alt={lanuageName}
        />
      </div>
      <p className={`text-center mt-4 font-bold inter lg:text-xl md:text-lg sm:text-base text-sm space-grotesk uppercase ${lightTheme ? 'text-gray-900' : 'text-gray-100'} transition-theme`}>
        {lanuageName}
      </p>
    </div>
  )
}

export default SkillItem