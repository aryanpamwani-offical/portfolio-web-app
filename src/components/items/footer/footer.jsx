import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div
    className='flex flex-col justify-center m-auto items-center  mt-20 shadow shadow-slate-600 w-full'
    >
        <Image src={'https://i.ibb.co/RGF1mW7/navlogo.png'} width={220} height={220} alt='logo'/>
        <div className="flex flex-row jusify-between  my-5">
            <Image src={'https://i.ibb.co/2SFbNJB/github.png'} width={40} height={40} className='mx-2' alt='social'></Image>
            <Image src={'https://i.ibb.co/cx501zr/linkedin.png'} width={40} height={40} className='mx-2' alt='social'></Image>
            <Image src={'https://i.ibb.co/NnBp9k7/twitterx.png'} width={40} height={40} className='mx-2' alt='social'></Image>
        </div>
    </div>
  )
}

export default Footer