import React from 'react'
import Contact from "@/components/items/contact/contact";
import HeadingComp from "@/components/items/heading/heading";
import SeoComp from '@/components/items/SeoComponent/SeoComp';
const page = () => {
  return (
    <>
     <SeoComp
  title={"Home | Contact Us"}

  
  />
    <HeadingComp
 heading={"Get In Touch"}
 subheading={"Contact Us"}
 />
 <Contact/>
    </>
  )
}

export default page