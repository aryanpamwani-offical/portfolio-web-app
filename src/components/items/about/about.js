import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const AboutComp = () => {
  return (
    <section className='flex lg:w-full lg:flex-row md:flex-col sm:flex-col flex-col  Lg:content-center mb-12 '>
<main className="flex content-center items-center justify-center lg:w-1/2 md:w-full   ">
    <div className='lg:pl-6 lg:ml-30 w-3/4 justify-center m-auto items-center'>

    <Image src={'https://i.ibb.co/XSJw7xT/main.jpg'} width={400} height={700} className='rounded-3xl m-auto' alt='about'/>
    </div>
</main>

<div className="flex flex-col content-center m-auto lg:w-1/2 md:w-full lg:justify-end w-full p-5 pr-6 mr-20 lg:text-xl md:text-xl sm:text-2xl texl-xl">
   
   <p>

   👋 Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.

   </p>
   <h3 className='text-xl font-bold mt-5 mb-2'>Professional Skills:

</h3>
<p>MERN Stack Developer: Proficient in building web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. I enjoy working on both front-end and back-end development, bringing ideas to life through code.
Let’s connect and collaborate on exciting projects! 🤝🎨🚀</p>
<div className='mt-2 mb-5 lg:m-0 m-auto'>

<Link href={"/about"}><Button >Read More</Button></Link>
</div>
</div>

</section>
  )
}

export default AboutComp