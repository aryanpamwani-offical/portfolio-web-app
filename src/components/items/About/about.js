"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const AboutComp = ({animationRight,animationLeft}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <section className='flex lg:w-full lg:flex-row md:flex-col sm:flex-col flex-col  lg:content-center mb-12 '>
<main className="flex content-center items-center justify-center lg:w-1/2 md:w-full   " data-aos={animationRight}>
    <div className='lg:pl-6 lg:ml-30 w-3/4 justify-center m-auto items-center'>

    <Image src={'/logo.jpg'} width={400} height={700} loading='lazy' className='rounded-3xl m-auto ' alt='about'/>
    </div>
</main>

<div className="flex flex-col content-center m-auto lg:w-1/2 md:w-full lg:justify-end w-full p-5 pr-6 mr-20 lg:text-xl md:text-xl sm:text-2xl texl-xl"  data-aos={animationLeft}>
   
   <p className='text-base open-sans'>

   👋 Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.

   </p>
   <h3 className='text-3xl font-bold lg:mt-8 mt-4 mb-6 roboto'>Professional Skills:

</h3>
<p className='text-base open-sans'>MERN Stack Developer: Proficient in building web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. I enjoy working on both front-end and back-end development, bringing ideas to life through code.
Let’s connect and collaborate on exciting projects! 🤝🎨🚀</p>
<div className='mt-4 mb-5 lg:m-0 lg:mt-8 md:mt-4 m-auto w-full lg:w-44'>

<Link href={"/about"}><Button size="lg" className="md:w-full sm:w-full w-full inter" variant={lightTheme?'default':'dark'}>Read More</Button></Link>
</div>
</div>


</section>
  )
}

export default AboutComp