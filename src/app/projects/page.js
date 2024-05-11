import HeadingComp from '@/components/items/heading/heading'
import Project from '@/components/items/projects/project'
import React from 'react'

const page = () => {
  return (
    <>
    <HeadingComp
 heading={"Projects"}
 subheading={"My Projects"}
 />
    <Project/>
    </>
  )
}

export default page