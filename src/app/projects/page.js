
import HeadingComp from '@/components/items/HeroSection/Heading/heading'
import Project from '@/components/items/projects/project'
import React from 'react'
export  const metadata = {
  title: "Projects | Aryan Pamwani",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",

};
const page = () => {
  return (
    <>
  
    <HeadingComp
 heading={"Projects"}
 subheading={"My Projects"}
 animation={"fade-up"}
 />
    <Project/>
    </>
  )
}

export default page