import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavPc = () => {
  return (
  <>
  <div className="lg:flex md:flex sm:hidden hidden flex-row flex-wrap bg-white w-full h-24 shadow-md shadow-gray-400 fixed content-center z-50">
    <div className="flex content-center justify-start w-1/3 p-5 ">
        <Image src="/navlogo.png" width={90} height={90} className='  pl-6 ml-5'/> 
    </div>
    <div className="flex lg:flex md:flex sm:flex  content-center justify-end w-2/3 my-auto " >
        <ul className="flex flex-row space-grotesk content-center mr-5 pr-14">
        <Link href={'/'}> <li className="mt-2 mr-5  font-medium">
            Home
          </li></Link>
          <Link href={'/about'}> <li className="mt-2 mr-5  font-medium">
            About
          </li></Link>
          <Link href={'/skills'}> <li className="mt-2 mr-5  font-medium">
           Skills
          </li></Link>
          <Link href={'/projects'}><li className="mt-2 mr-8  font-medium" >
           Projects
          </li></Link>
          <Link href={"/contact"} className="">
           <Button variant='default'>Get in Touch</Button>
          </Link>
        </ul>
    </div>
  </div>
  </>
  )
}

export default NavPc