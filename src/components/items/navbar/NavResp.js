'use client'
import React,{useState} from 'react'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
import Link from 'next/link'
import { navItems } from './NavData'
import Image from 'next/image'


const NavResp = () => {
  const [status,setStatus]=useState(false)
  return (
  <>
  <div className={status?"lg:hidden md:hidden sm:flex flex flex-row flex-wrap bg-white w-full h-screen shadow-md shadow-gray-400 fixed  z-50":"lg:hidden md:hidden sm:flex flex flex-row flex-wrap bg-white w-full h-24 shadow-md shadow-gray-400 fixed  z-50"}>
    <div className="flex  justify-start w-1/3 m-auto h-15 p-5 content-start h-24">
        <Image src="https://i.ibb.co/RGF1mW7/navlogo.png"  width={80} height={80} className='w-20   pl-6 ml-5' alt='logo'/> 
    </div>
    <div className="flex  justify-end w-2/3   p-5 content-end" onClick={()=>setStatus(!status)}>

        <Image src={"https://i.ibb.co/GF7M6bJ/menu.png"} width={56} height={56} className='w-14   my-auto pl-6 ml-5' priority={true} alt='menu'/> 
    </div>
    
    
        <ul className={status?"flex flex-col space-grotesk content-center items-center   justify-center m-auto w-full":"hidden"}>
        { navItems?.slice(0,4).map((items,key)=>{
        
        return  <Link href={items.location} key={key}> <li className="flex flex-col content-center m-auto my-5 hover:font-bold font-medium">
            {items.name}
          </li></Link>
           })}
        {navItems?.slice(4,5).map((items,key)=>{

return   <Link href={items.location} key={key} className="flex flex-col content-center m-auto my-5">
<Button variant='default' >{items.name}</Button>
</Link>
         })}
        </ul>
    </div>
    
 
  </>
  )
}

export default NavResp