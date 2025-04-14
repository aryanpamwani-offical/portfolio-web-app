"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <div
    className={lightTheme?'flex flex-col justify-center m-auto bg-inherit  text-inherit items-center  border-t mt-20  w-full'
    :"flex flex-col justify-center m-auto bg-black  text-inherit items-center border-t  mt-20  w-full"}>
        <Image src={'/logo.jpg'} width={220} height={220} alt='logo' className='rounded-full h-24 w-24 mt-5'  priority={true}/>
        <div className="flex flex-row jusify-between  my-5 ">
            <Link href={"https://github.com/aryanpamwani-offical"}>
            <Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922910/github_daezwy.png'} 
            width={40} height={40}
             className={lightTheme?'mx-2':'mx-2 icon-dark'} 
            alt='social' loading='lazy'></Image></Link>
            <Link href={"https://www.linkedin.com/in/aryanpamwani"}>
            <Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922969/linkedin_fjw1l4.webp'} 
            width={40} height={40} 
            className={lightTheme?'mx-2':'mx-2 icon-dark'} 
            alt='social' loading='lazy'></Image></Link>
            <Link href={"https://twitter.com/aryanpamwanii"}>
            <Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922997/twitterx_qd3jp1.png'} 
            width={40} height={40} 
            className={lightTheme?'mx-2':'mx-2 icon-dark'} 
            alt='social' loading='lazy'></Image></Link>
        </div>
    </div>
  )
}

export default Footer