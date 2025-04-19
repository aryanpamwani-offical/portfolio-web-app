
import React from 'react'
import SkillItem from './SkillItem'

import skillData from './skillData'
const Skills = ({animation}) => {
  return (
    
    <section className='lg:mx-20 md:mx-15 sm:mx-0 lg:p-10 p-5' data-aos={animation}>
    <div className='flex flex-col w-full  mb-5 mt-10 lg:p-12 md:p-6 sm:p-3 p-0 '>
       
        <div className="flex flex-row my-1  justify-between ">
          {skillData.slice(0,4).map((data,key)=>{
           return  <SkillItem
           key={key}
             imgUrl={data.imgUrl}
             lanuageName={data.languageName}
             />
          })}
         
        </div>
        <div className="flex flex-row my-1  justify-evenly ">
        {skillData.slice(4,5).map((data,key)=>{
           return  <SkillItem
           key={key}
             imgUrl={data.imgUrl}
             lanuageName={data.languageName}
             cssAdd={"icon-dark"}
             />
          })}
        {skillData.slice(5,8).map((data,key)=>{
           return  <SkillItem
           key={key}
             imgUrl={data.imgUrl}
             lanuageName={data.languageName}
             />
          })}
        </div>
        <div className="flex flex-row my-1  justify-between ">
        {skillData.slice(8,12).map((data,key)=>{
           return  <SkillItem
           key={key}
             imgUrl={data.imgUrl}
             lanuageName={data.languageName}
             />
          })}
        </div>
    </div></section>
  )
}

export default Skills