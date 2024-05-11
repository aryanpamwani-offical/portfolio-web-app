import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div
    className='flex flex-col justify-center m-auto items-center  mt-20 shadow shadow-slate-600 w-full'
    >
        <Image src={'/navlogo.png'} width={220} height={220}/>
        <div className="flex flex-row jusify-between  my-5">
            <Image src={'/github.png'} width={40} height={40} className='mx-2'></Image>
            <Image src={'/linkedin.png'} width={40} height={40} className='mx-2'></Image>
            <Image src={'/twitterx.png'} width={40} height={40} className='mx-2'></Image>
        </div>
    </div>
  )
}

export default Footer