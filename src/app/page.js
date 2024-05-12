import HeroSection from "@/components/items/HeroSection/HeroSection";
import AboutComp from "@/components/items/about/about";
import Contact from "@/components/items/contact/contact";

import HeadingComp from "@/components/items/heading/heading";
import Project from "@/components/items/projects/project";
import Skills from "@/components/items/skills/skills";

export default function Home() {
  return (
  <>
  
<HeroSection/>


<HeadingComp
 heading={"About"}
 subheading={"My Introduction"}
 margin={"my-20"}
 />
 <AboutComp/>
 <HeadingComp
 heading={"Skills"}
 subheading={"My Skills"}
 margin={"my-20"}
 />
 <Skills/>
 <HeadingComp
 heading={"Projects"}
 subheading={"My Projects"}
 margin={"my-20"}
 />
 <Project/>
 <HeadingComp
 heading={"Get In Touch"}
 subheading={"Contact Us"}
 margin={"my-20"}
 />
 <Contact/>
 
 
  </>
  );
}
