"use client";
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';

const SkillItem = ({lanuageName,imgUrl,cssAdd}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <>
      <div className="flex flex-col  ">
            
                <Image src={imgUrl} width={80} height={80} className={lightTheme?`m-auto `:`m-auto ${cssAdd}`} alt='skills'/>
                <p className='text-center mt-2 font-bold inter lg:text-2xl md:text-2xl sm:text-xl text-xs my-6 space-grotesk uppercase'>{lanuageName}</p>
            </div>
    </>
  )
}

export default SkillItem