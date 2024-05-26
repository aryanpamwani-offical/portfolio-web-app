import SeoComp from '@/components/items/SeoComponent/SeoComp'
import AboutComp from '@/components/items/about/about'
import HeadingComp from '@/components/items/heading/heading'
import React from 'react'

const page = () => {
  return (
    <>
     <SeoComp
  title={"Home | About"}

  
  />
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