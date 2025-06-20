'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { navItems } from './NavData'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { MdOutlineClose } from "react-icons/md";

const NavResp = () => {
  const [status, setStatus] = useState(false);
  const lightTheme = useSelector((state) => state.themeKey);
  let items=navItems.length;
  return (
    <>
        <nav className={`transition-all duration-1000 ease-in-out fixed w-full border-b transition-theme ${lightTheme?"border-[color:var(--grey-006)]":"border-[color:var(--grey-004)]"} z-50 ${status ? ' lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-inherit' : 'h-28 lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-inherit'}`}>
        <div className="flex justify-start w-full p-5 h-28">
        <Link href={"/"}><Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1744781034/logo_zk1qty.webp'} width={80} height={80} className='w-20 rounded-full ml-10' alt='logo' priority={true} /></Link>
        <div className="flex justify-end w-full p-5" onClick={() => setStatus(!status)}>
{!status? <div className='flex flex-col'>
 <div className=' flex flex-col items-center gap-[10px] my-auto '>
        <div className={`${lightTheme ? "bg-[var(--grey-001)]":"bg-[var(--grey-007)]"} w-8 h-[2px] rounded-md mb-2"`}></div>
         <div className={`${lightTheme ? "bg-[var(--grey-001)]":"bg-[var(--grey-007)]"} w-8 h-[2px] rounded-md mb-1"`}></div>
        </div> 
       
</div>
        
:<MdOutlineClose  className={`${lightTheme ? 'w-14 text-[var(--grey-001)]' : 'w-14 icon-dark'} my-auto pl-6 ml-5 text-4xl text-[var(--grey-001)]`}  alt='menu'/>}
        </div>
        </div>

        <ul className={`flex flex-col space-grotesk transition-all ease-in-out ${status ? 'opacity-100 translate-y-0 duration-1000' : 'opacity-0 -translate-y-10 duration-100'} content-center items-center justify-center m-auto w-full pointer-events-none`}>
          {status && (
            <>
              {navItems?.slice(items-items.length,items-1).map((items, key) => (
                <li className="flex flex-col duration-1000 transition nav-animate-open ease-in-out content-center m-auto my-5 hover:font-bold font-medium pointer-events-auto" key={key}>
                  <Link href={items.location} onClick={() => setStatus(false)} className='duration-1000 transition nav-animate-open ease-in-out opens-sans rounded-md relative inter underline-effect'>
                    {items.name}
                  </Link>
                </li>
              ))}
              {navItems?.slice(items-1,items).map((items, key) => (
                <Link href={items.location} key={key} className="flex flex-col content-center m-auto my-5 pointer-events-auto" onClick={() => setStatus(false)}>
                  <Button variant={lightTheme ? 'default' : 'dark'} className="inter">{items.name}</Button>
                </Link>
              ))}
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavResp;
