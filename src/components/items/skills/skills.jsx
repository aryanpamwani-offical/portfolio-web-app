import Image from 'next/image'
import React from 'react'
import SkillItem from '../skillitems/SkillItem'

const Skills = () => {
  return (
    
    <section className='lg:mx-20 md:mx-15 sm:mx-0'>
    <div className='flex flex-col w-full mb-5 mt-10 lg:p-12 md:p-6 sm:p-3 p-0 '>
       
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"/html5.png"}
           lanuageName={"Html"}
           />
         <SkillItem
           imgUrl={"/cssLogo.png"}
           lanuageName={"Css"}
           />
           <SkillItem
           imgUrl={"/jsLogo.png"}
           lanuageName={"JavaScript"}
           />
           <SkillItem
           imgUrl={"/materialLogo.png"}
           lanuageName={"Material UI"}
           />
        </div>
        <div className="flex flex-row my-1  justify-evenly ">
            <SkillItem 
            imgUrl={"/next-js-seeklogo.svg"}
            lanuageName={"Next Js"}
            />
            <SkillItem 
            imgUrl={"/reactjs_logo_icon.png"}
            lanuageName={"React Js"}
            />
            <SkillItem 
            imgUrl={"/tailwindLogo.png"}
            lanuageName={"Tailwind css"}
            />
              <SkillItem 
            imgUrl={"/OIP.jpg"}
            lanuageName={"Typescript"}
            />
           
        </div>
        <div className="flex flex-row my-1  justify-between ">
            <SkillItem
           imgUrl={"/python.png"}
           lanuageName={"Python"}
           />
         <SkillItem
           imgUrl={"/express.png"}
           lanuageName={"Express Js"}
           />
           <SkillItem
           imgUrl={"/cplus.png"}
           lanuageName={"C++"}
           />
           <SkillItem
           imgUrl={"/mongodb.png"}
           lanuageName={"Mongodb"}
           />
        </div>
    </div></section>
  )
}

export default Skills