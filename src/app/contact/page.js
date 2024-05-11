import React from 'react'
import Contact from "@/components/items/contact/contact";
import HeadingComp from "@/components/items/heading/heading";
const page = () => {
  return (
    <>
    <HeadingComp
 heading={"Get In Touch"}
 subheading={"Contact Us"}
 />
 <Contact/>
    </>
  )
}

export default page