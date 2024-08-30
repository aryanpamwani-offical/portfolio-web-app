'use client'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const ProjectItems = ({WebName,WebImgUrl,WebGit,WebUrl}) => {
  return (
    <>
    
    <div className="flex w-4/5 shadow-md shadow-slate-700 h-[500px] rounded-2xl mb-5">
      <div className='flex  justify-center items-center m-auto  w-full mb-10  '>
        <div className="flex flex-col aspect-square  p-6 w-full items-center text-center">
          <Image src={WebImgUrl} width={500} height={500} className='w-3/5 rounded-3xl mt-7' alt="projects" ></Image>
          <h3 className='text-2xl roboto font-bold uppercase my-5'>{WebName}</h3>
          <div className="flex text-center justify-center mx-auto">
            <div className='  mx-3'>

              <Link href={WebGit}> <Button size="sm">Github</Button></Link>
            </div>
            <div>

              <Link href={WebUrl}> <Button size="sm">Visit Website</Button></Link>
            </div>
          </div>
        </div>
</div>
</div>
           
    </>
  )
}

export default ProjectItems