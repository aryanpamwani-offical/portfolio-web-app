'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import ProjectItems from './ProjectItems'

const Project = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (
  <div className='flex justify-center m-auto  w-full mb-10  '>

  
    <Carousel
      plugins={[plugin.current]}
      className=" w-2/3"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
 <CarouselContent>
       
          <CarouselItem >
          
              <ProjectItems
              WebImgUrl={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922550/project-One_tghpsw.png'}
              WebName={"Portfolio Website"}
              WebGit={"https://github.com/aryanpamwani-offical/portfolio-web-app"}
              WebUrl={"/"}
              />
          </CarouselItem>
          <CarouselItem >
          <ProjectItems
              WebImgUrl={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922569/project-Two_subflq.png'}
              WebName={"Ecomerce Website"}
              WebGit={"https://github.com/aryanpamwani-offical/ecomerce-web-app-client"}
              WebUrl={"https://ecomerce-web-app-client.vercel.app/"}
              />
              
          </CarouselItem>
          <CarouselItem >
          <ProjectItems
              WebImgUrl={'https://res.cloudinary.com/dttek3gqg/image/upload/v1724922597/project-Three_omjebq.png'}
              WebName={"Chat App Website"}
              WebGit={"https://github.com/aryanpamwani-offical/Pamwani-Chat-App-Client-Side"}
              WebUrl={"https://selfconnect-chat-web-app.vercel.app/"}
              />
              
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
</Carousel>
</div>
   
  )
}

export default Project