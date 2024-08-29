import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div
    className='flex flex-col justify-center m-auto items-center  mt-20 shadow shadow-slate-600 w-full'
    >
        <Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp'} width={220} height={220} alt='logo' loading='lazy'/>
        <div className="flex flex-row jusify-between  my-5">
            <Link href={"https://github.com/aryanpamwani-offical"}><Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922910/github_daezwy.png'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
            <Link href={"https://www.linkedin.com/in/aryanpamwani"}><Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922969/linkedin_fjw1l4.webp'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
            <Link href={"https://twitter.com/aryanpamwanii"}><Image src={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922997/twitterx_qd3jp1.png'} width={40} height={40} className='mx-2' alt='social' loading='lazy'></Image></Link>
        </div>
    </div>
  )
}

export default Footer