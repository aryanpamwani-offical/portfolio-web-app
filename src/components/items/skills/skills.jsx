
import React from 'react'
import SkillItem from '../skillitems/SkillItem'

const Skills = ({animation}) => {
  return (
    
    <section className='lg:mx-20 md:mx-15 sm:mx-0' data-aos={animation}>
    <div className='flex flex-col w-full mb-5 mt-10 lg:p-12 md:p-6 sm:p-3 p-0 '>
       
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"https://i.ibb.co/2YcxWVW/html5.png"}
           lanuageName={"Html"}
           />
         <SkillItem
           imgUrl={"https://i.ibb.co/MVp70L3/cssLogo.png"}
           lanuageName={"Css"}
           />
           <SkillItem
           imgUrl={"https://i.ibb.co/BKmtqNS/jsLogo.png"}
           lanuageName={"JavaScript"}
           />
           <SkillItem
           imgUrl={"https://i.ibb.co/3W1T1z9/material-Logo.png"}
           lanuageName={"Material UI"}
           />
        </div>
        <div className="flex flex-row my-1  justify-evenly ">
            <SkillItem 
            imgUrl={"https://i.ibb.co/6tnJ750/next-js-seeklogo.png"}
            lanuageName={"Next Js"}
            />
            <SkillItem 
            imgUrl={"https://i.ibb.co/Jvj5mzd/reactjs-logo-icon.png"}
            lanuageName={"React Js"}
            />
            <SkillItem 
            imgUrl={"https://i.ibb.co/yB7dThY/tailwind-Logo.png"}
            lanuageName={"Tailwind css"}
            />
              <SkillItem 
            imgUrl={"https://i.ibb.co/4Z8M674/OIP.jpg"}
            lanuageName={"Typescript"}
            />
           
        </div>
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"https://i.ibb.co/vmswnbn/python.png"}
           lanuageName={"Python"}
           />
         <SkillItem
           imgUrl={"https://i.ibb.co/s9VzLxd/express.png"}
           lanuageName={"Express Js"}
           />
           <SkillItem
           imgUrl={"https://i.ibb.co/2NXq63R/cplus.png"}
           lanuageName={"C++"}
           />
           <SkillItem
           imgUrl={"https://i.ibb.co/yqBbPjB/mongodb.png"}
           lanuageName={"Mongodb"}
           />
        </div>
    </div></section>
  )
}

export default Skills