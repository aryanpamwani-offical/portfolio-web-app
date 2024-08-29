'use client'
import React,{useState} from 'react'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { navItems } from './NavData'
import Image from 'next/image'


const NavResp = () => {
  const [status,setStatus]=useState(false)
  return (
  <>
  <div className={status?"duration-1000 transition nav-animate-open ease-in-out lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-white w-full h-screen shadow-md shadow-gray-400 fixed  z-50":"transition ease-in-out duration-1000 lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-white w-full h-24 shadow-md shadow-gray-400 fixed  z-50 nav-animate-open"}>
    <div className="flex  justify-start w-1/3 m-auto h-15 p-5 content-start h-24">
        <Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp"  width={80} height={80} className='w-20   pl-6 ml-10' alt='logo'loading='lazy'/> 
    </div>
    <div className="flex  justify-end w-2/3   p-5 content-end" onClick={()=>setStatus(!status)}>

        <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922497/menu_crwwxl.png"} width={56} height={56} className='w-14   my-auto pl-6 ml-5' priority={true} alt='menu'/> 
    </div>
    
    
        <ul className={status?"flex flex-col space-grotesk duration-1000 transition nav-animate-open ease-in-out delay-1000 content-center items-center   justify-center m-auto w-full":"hidden nav-animate-ul ease-in-out delay-1000"}>
        { navItems?.slice(0,4).map((items,key)=>{
        
        return  <Link href={items.location} key={key} onClick={()=>setStatus(!status)} className='duration-1000 transition nav-animate-open ease-in-out'> <li className="flex flex-col duration-1000 transition nav-animate-open ease-in-out content-center m-auto my-5 hover:font-bold font-medium">
            {items.name}
          </li></Link>
           })}
        {navItems?.slice(4,5).map((items,key)=>{

return   <Link href={items.location} key={key} className="flex flex-col content-center m-auto my-5" onClick={()=>setStatus(!status)}>
<Button variant='default' >{items.name}</Button>
</Link>
         })}
        </ul>
    </div>
    
 
  </>
  )
}

export default NavResp

