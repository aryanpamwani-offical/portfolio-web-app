
import React from 'react'
import SkillItem from '../skillitems/SkillItem'

const Skills = ({animation}) => {
  return (
    
    <section className='lg:mx-20 md:mx-15 sm:mx-0' data-aos={animation}>
    <div className='flex flex-col w-full mb-5 mt-10 lg:p-12 md:p-6 sm:p-3 p-0 '>
       
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922634/html5_ebxj4i.png"}
           lanuageName={"Html"}
           />
         <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922691/cssLogo_ren2ec.png"}
           lanuageName={"Css"}
           />
           <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922688/jsLogo_talofw.png"}
           lanuageName={"JavaScript"}
           />
           <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922716/material-Logo_eaejac.png"}
           lanuageName={"Material UI"}
           />
        </div>
        <div className="flex flex-row my-1  justify-evenly ">
            <SkillItem 
            imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922736/next-js-seeklogo_trs43v.png"}
            lanuageName={"Next Js"}
            />
            <SkillItem 
            imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922781/reactjs-logo-icon_q06uez.png"}
            lanuageName={"React Js"}
            />
            <SkillItem 
            imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922771/tailwind-Logo_o27mh9.png"}
            lanuageName={"Tailwind css"}
            />
              <SkillItem 
            imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922822/OIP_wdyunl.jpg"}
            lanuageName={"Typescript"}
            />
           
        </div>
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922825/python_jzeacp.png"}
           lanuageName={"Python"}
           />
         <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922844/express_q0zlod.png"}
           lanuageName={"Express Js"}
           />
           <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922864/cplus_xhdafl.png"}
           lanuageName={"C++"}
           />
           <SkillItem
           imgUrl={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922864/cplus_xhdafl.png"}
           lanuageName={"Mongodb"}
           />
        </div>
    </div></section>
  )
}

export default Skills