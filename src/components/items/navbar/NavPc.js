'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import { navItems } from './NavData'

const NavPc = () => {
 
 
  
  
  
  return (
  <>
  <div className="lg:flex md:flex sm:hidden hidden flex-row flex-wrap bg-white w-full h-24 shadow-md shadow-gray-400 fixed content-center z-50">
    <div className="flex content-center justify-start w-1/3 p-5 ">
        <Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp" width={90} height={90} loading='lazy' className='  pl-6 ml-10' alt='logo'/> 
    </div>
    <div className="flex lg:flex md:flex sm:flex  content-center justify-end w-2/3 my-auto " >
        <ul className="flex flex-row space-grotesk content-center mr-5 pr-14">
       
       { navItems?.slice(0,4).map((items,key)=>{
        
         return <Link href={items.location} key={key} className='flex'> <li className="mt-2 mr-5 hover:font-bold font-medium">
          {items.name}
        </li></Link>
         })}
        {navItems?.slice(4,5).map((items,key )=>{

         return <Link href={items.location} key={key} className="">
           <Button variant='default'>{items.name}</Button>
          </Link>
           })}
        </ul>
    </div>
      
  </div>
  </>
  )
}

export default NavPc