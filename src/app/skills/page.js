
import HeadingComp from '@/components/items/Heading/heading'
import Skills from '@/components/items/Skills/skills'
import React from 'react'
export  const metadata = {
  title: "Skills | Aryan Pamwani",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",

};
const page = () => {
  return (
    <>
 
    <HeadingComp
 heading={"Skills"}
 subheading={"My Skills"}
 />
    <Skills
    animation={"zoom-in-up"}
    />
    </>
  )
}

export default page