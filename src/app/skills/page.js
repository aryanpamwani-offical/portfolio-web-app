import HeadingComp from '@/components/items/heading/heading'
import Skills from '@/components/items/skills/skills'
import React from 'react'

const page = () => {
  return (
    <>
    <HeadingComp
 heading={"Skills"}
 subheading={"My Skills"}
 />
    <Skills/>
    </>
  )
}

export default page