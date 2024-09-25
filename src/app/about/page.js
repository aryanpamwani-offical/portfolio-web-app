
import AboutComp from '@/components/items/About/about'
import HeadingComp from '@/components/items/Heading/heading'
import React from 'react'
export  const metadata = {
  title: "About | Aryan Pamwani",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",

};
const page = () => {
  return (
    <>
     
  <HeadingComp
 heading={"About"}
 subheading={"My Introduction"}
 animation={"fade-up"}

 />
    <AboutComp
    animationRight={"fade-right"}
    animationLeft={"fade-left"}
  
    />
    </>
  )
}

export default page