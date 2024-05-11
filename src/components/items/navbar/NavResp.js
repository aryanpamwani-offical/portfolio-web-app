'use client'
import React,{useState} from 'react'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
import Link from 'next/link'


const NavResp = () => {
  const [status,setStatus]=useState(false)
  return (
  <>
  <div className={status?"lg:hidden md:hidden sm:flex flex flex-row flex-wrap bg-white w-full h-screen shadow-md shadow-gray-400 fixed  z-50":"lg:hidden md:hidden sm:flex flex flex-row flex-wrap bg-white w-full h-24 shadow-md shadow-gray-400 fixed  z-50"}>
    <div className="flex  justify-start w-1/3 m-auto h-15 p-5 content-start h-24">
        <img src="/navlogo.png"  className='w-20   pl-6 ml-5'/> 
    </div>
    <div className="flex  justify-end w-2/3   p-5 content-end" onClick={()=>setStatus(!status)}>

        <img src="/menu.png" className='w-14   my-auto pl-6 ml-5'/> 
    </div>
    
    
        <ul className={status?"flex flex-col space-grotesk content-center items-center   justify-center m-auto w-full":"hidden"}>
        <Link href={'/'}> <li className="flex flex-col content-center m-auto my-5  font-medium">
            Home
          </li></Link>
          <Link href={'/about'}> <li className="flex flex-col content-center m-auto my-5   font-medium">
            About
          </li></Link>
          <Link href={'/skills'}> <li className="flex flex-col content-center m-auto my-5   font-medium">
           Skills
          </li></Link>
          <Link href={'/projects'}><li className="flex flex-col content-center m-auto my-5   font-medium" >
           Projects
          </li></Link>
          <Link href={"/contact"} className="flex flex-col content-center m-auto my-5">
           <Button variant='default' >Get in Touch</Button>
          </Link>
        </ul>
    </div>
    
 
  </>
  )
}

export default NavResp