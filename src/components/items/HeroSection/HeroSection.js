"use client"
import React from 'react'
import ImageComp from './ImageComp'
import HeroText from './HeroText'
import {  motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className='flex lg:flex-row md:column-reverse sm:column-reverse column-reverse  lg:w-full  lg:h-[45vh] md:h-auto sm:h-auto h-auto lg:content-center  md:mb-14 sm:mb-14 '>
     
      <HeroText/>
      <motion.div
initial={{opacity:0,y:0,x:15}}
animate={{opacity:1,y:0,x:0}}
exit={{opacity:0,y:15,x:15}}
transition={{delay:0.50}}
>
      <ImageComp/>
    </motion.div>
    </section>
  )
}

export default HeroSection