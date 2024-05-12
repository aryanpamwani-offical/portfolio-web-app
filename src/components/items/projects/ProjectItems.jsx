'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const ProjectItems = ({WebName,WebImgUrl,WebGit,WebUrl}) => {
  return (
    <>
    <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 w-full">
                    <Image src={WebImgUrl} width={500} height={500}className='w-11/12 rounded-3xl mt-7' alt="projects" ></Image>
                  <h3 className='text-2xl roboto font-bold uppercase my-5'>{WebName}</h3>
                  <div className="flex text-center justify-center mx-auto">
                    <div className='  mx-3'>

                    <Link href={WebGit}> <Button size="sm">Github</Button></Link>
                    </div>
                    <div>

                   <Link href={WebUrl}> <Button  size="sm">Visit Website</Button></Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
           
    </>
  )
}

export default ProjectItems