"use client"
import React from 'react'
import ImageComp from './ImageComp'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <section className='flex lg:flex-row md:column-reverse sm:column-reverse column-reverse  lg:w-full  lg:h-[45vh] md:h-auto sm:h-auto h-auto lg:content-center  md:mb-14 sm:mb-14 '>
     
      <HeroText animation={"fade-right"}/>

      <ImageComp animation={"fade-left"}/>
  
    </section>
  )
}

export default HeroSection