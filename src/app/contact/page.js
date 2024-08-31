import React from 'react'
import Contact from "@/components/items/contact/contact";
import HeadingComp from "@/components/items/heading/heading";

export  const metadata = {
  title: "Contact | Aryan Pamwani",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",

};
const page = () => {
  return (
    <>
     
    <HeadingComp
 heading={"Get In Touch"}
 subheading={"Contact Us"}
 animation={"fade-up"}
 />
 <Contact
  animation={"fade-up"}
  />
    </>
  )
}

export default page