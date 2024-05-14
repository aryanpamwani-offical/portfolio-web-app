import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div
    className='flex flex-col justify-center m-auto items-center  mt-20 shadow shadow-slate-600 w-full'
    >
        <Image src={'https://i.ibb.co/RGF1mW7/navlogo.png'} width={220} height={220} alt='logo' loading='lazy'/>
        <div className="flex flex-row jusify-between  my-5">
            <Link href={"https://github.com/aryanpamwani-offical"}><Image src={'https://i.ibb.co/2SFbNJB/github.png'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
            <Link href={"https://www.linkedin.com/in/aryanpamwani"}><Image src={'https://i.ibb.co/cx501zr/linkedin.png'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
            <Link href={"https://twitter.com/aryanpamwanii"}><Image src={'https://i.ibb.co/NnBp9k7/twitterx.png'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
        </div>
    </div>
  )
}

export default Footer