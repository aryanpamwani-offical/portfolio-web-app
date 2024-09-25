'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navItems } from './NavData'
import { useSelector } from 'react-redux'

const NavPc = () => {
  const lightTheme=useSelector((state)=>state.themeKey);
 
  
  
  
  return (
  <>
  <div className={lightTheme?"lg:flex md:flex sm:hidden hidden flex-row flex-wrap bg-inherit w-full h-24 border-b fixed content-center z-50":"lg:flex md:flex sm:hidden hidden flex-row flex-wrap bg-inherit w-full h-24 border-b  fixed content-center z-50"}>
    <div className="flex content-center justify-start w-1/3 p-5 ">
        <Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp" width={90} height={90}className='  pl-6 ml-10' alt='logo' priority={true}/> 
    </div>
    <div className="flex lg:flex md:flex sm:flex  content-center justify-end w-2/3 my-auto " >
        <ul className="flex flex-row space-grotesk content-center mr-5 pr-14">
       
       { navItems?.slice(0,4).map((items,key)=>{
        
         return <li key={key} className=''>
          <Link href={items.location}  className='flex font-medium mt-2 mr-5 px-1.5 py-1 opens-sans rounded-md hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white  focus:bg-blue-700 focus:text-white'>
          
          {items.name}
</Link>        </li>
         })}
        {navItems?.slice(4,5).map((items,key )=>{

         return <Link href={items.location} key={key} >
           <Button variant={lightTheme?'default':'dark'} className="inter">{items.name}</Button>
          </Link>
           })}
        </ul>
    </div>
      
  </div>
  </>
  )
}

export default NavPc