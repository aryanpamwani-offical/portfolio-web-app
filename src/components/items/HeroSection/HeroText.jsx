'use client'
import React from 'react'
import Typewriter from "typewriter-effect";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const HeroText = ({animation}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <main data-aos={animation} className="flex flex-col content-center md:items-center sm:items-center lg:m-auto lg:w-3/4 lg:justify-start lg:items-start  lg:ml-36 md:content-center md:justify-center md:ml-0 sm:ml-0 md:w-full w-full sm:w-full mt-5 mb-14">
    <div className='lg:text-2xl font-bold  lg:w-3/4 lg:justify-start lg:m-0 lg:items-start md:text-2xl md:content-center  md:ml-0 sm:ml-0 md:w-full w-full ml-0 flex flex-col m-auto justify-center items-center'> 
    <span className='flex roboto'>{`I'm`}  <p className='text-red-500 ml-2 mr-1 space-grotesk '>Aryan</p>! </span>
    <div className='flex flex-col '> <div className='flex flex-row roboto'> & a<div className="ml-2 text-blue-600 inter">
      <Typewriter
            options={{
              strings: ['Full Stack Developer', 'UI/UX Designer'],
              autoStart: true,
              loop: true,
            }}
        /></div></div></div>
        <div className='leading-10 mt-4'>
            <Link href={"/contact"}><Button variant={lightTheme?'default':'dark'} className="inter">Hire Me</Button></Link>
        </div>
     </div>
</main>
  )
}

export default HeroText