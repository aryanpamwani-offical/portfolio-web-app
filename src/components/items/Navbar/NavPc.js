'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navItems } from './NavData'
import { useSelector } from 'react-redux'

const NavPc = () => {
  const lightTheme=useSelector((state)=>state.themeKey);
 
  let items=navItems.length;
  
  
  
  return (
  <>
 <nav className={lightTheme?"navbar nav-light transition-theme":"navbar nav-dark transition-theme"}>
    <div className="flex content-center justify-start w-1/3 p-5 ">
        <Link href={"/"}><Image src="/logo.jpg" width={90} height={90}className=' rounded-full  ml-10' alt='logo' priority={true}/> </Link>
    </div>
    <div className="flex lg:flex md:flex sm:flex  content-center justify-end w-2/3 my-auto " >
        <ul className="flex flex-row space-grotesk content-center mr-5 pr-14">
       
       { navItems?.slice(items-6,items-1).map((items,key)=>{
        
         return <li key={key} className=''>
          <Link href={items.location}  className='flex font-medium mt-2 mr-5 px-1.5 py-1 opens-sans  relative inter underline-effect'>
          
          {items.name}
            </Link>
            </li>
         })}
        {navItems?.slice(items-1,items).map((items,key )=>{

         return <Link href={items.location} key={key} >
           <Button variant={lightTheme?'default':'dark'} className="inter transition-theme" >{items.name}</Button>
          </Link>
           })}
        </ul>
    </div>
      
  </nav> 
   </>
  )
}

export default NavPc