"use client";

import HeroSection from "@/components/items/HeroSection/HeroSection";
import SeoComp from "@/components/items/SeoComponent/SeoComp";
import AboutComp from "@/components/items/about/about";
import Contact from "@/components/items/contact/contact";

import HeadingComp from "@/components/items/heading/heading";
import Project from "@/components/items/projects/project";
import Skills from "@/components/items/skills/skills";


import { useSelector } from "react-redux";



export default function Home() {

  const lightTheme=useSelector((state)=>state.themeKey);
  return (
  <div className={lightTheme?"bg-white text-black relative":"bg-black text-white relative"}>
  <SeoComp
  title={"Home | Aryan Pamwani"}

  
  />
 
<HeroSection/>


<HeadingComp
 heading={"About"}
 subheading={"My Introduction"}
 margin={"my-20"}
 animation={"fade-up"}
 />
 <AboutComp
 animationRight={"fade-right"}
 animationLeft={"fade-left"}

 />
 <HeadingComp
 heading={"Skills"}
 subheading={"My Skills"}
 margin={"my-20"}
 animation={"fade-up"}

 />
 <Skills
  animation={"zoom-in-up"}
 />
 <HeadingComp
 heading={"Projects"}
 subheading={"My Projects"}
 margin={"my-20"}
 animation={"fade-up"}
 />
 <Project
 
 />
 <HeadingComp
 heading={"Get In Touch"}
 subheading={"Contact Us"}
 margin={"my-20"}
 animation={"fade-up"}
 />
 <Contact
  animation={"fade-up"}
 />

  </div>
  );
}
