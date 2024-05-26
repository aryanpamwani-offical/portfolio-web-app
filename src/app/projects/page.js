import SeoComp from '@/components/items/SeoComponent/SeoComp'
import HeadingComp from '@/components/items/heading/heading'
import Project from '@/components/items/projects/project'
import React from 'react'

const page = () => {
  return (
    <>
     <SeoComp
  title={"Home | Projects"}

  
  />
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