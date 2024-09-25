'use client'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'

const ProjectItems = ({WebName,WebImgUrl,WebGit,WebUrl}) => {
  
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <>
    
    <div className="flex lg:w-4/5 w-full border-[2px]  h-5/6 rounded-2xl mb-5 mx-4">
      <div className='flex  justify-center content-center m-auto  w-full mb-10  '>
        <div className="flex flex-col aspect-video  p-6 w-full items-center text-center">
          <Image src={WebImgUrl} width={500} height={500} className='lg:w-3/5 w-full h-[250px] rounded-3xl mt-7' alt="projects" ></Image>
          <h3 className='text-2xl roboto font-bold uppercase my-5'>{WebName}</h3>
          <div className="flex lg:flex-row  flex-col text-center justify-center mx-auto">
            <div className='  mx-3'>

              <Link href={WebGit}> <Button size="sm" variant={lightTheme?'default':'dark'} className="w-4/5 px-11 mb-4 inter">Github</Button></Link>
            </div>
            <div>

              <Link href={WebUrl}> <Button size="sm" variant={lightTheme?'default':'dark'} className="inter">Visit Website</Button></Link>
            </div>
          </div>
        </div>
</div>
</div>
           
    </>
  )
}

export default ProjectItems