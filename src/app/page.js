// "use client";

import HeroSection from "@/components/items/HeroSection/HeroSection";

import AboutComp from "@/components/items/About/about";
import Contact from "@/components/items/Contact/contact";

import HeadingComp from "@/components/items/Heading/heading";
import Project from "@/components/items/projects/project";
import Skills from "@/components/items/Skills/skills";



 export  const metadata = {
  title: "Home | Aryan Pamwani",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",

};




export default function Home() {

  /**
   * This is contact form component made in nextjs.Your task to replace it to the shadcn form in which these thing must follow:
   * 1. Input box must have border-[color:var(--grey-004)] & LightTheme: text-[--grey-002] dark:text-[--grey-006]
   * 2. Label must of LightTheme: text-[--grey-001] dark:text-[--grey-007]
   */
  return (
  <div >

 
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
