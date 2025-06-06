'use client'
import React from 'react'
import { projectData } from "./projectData";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const MAX_WORDS = 15;

const truncateText = (text) => {
  const words = text.split(' ');
  if (words.length <= MAX_WORDS) return text;
  return words.slice(0, MAX_WORDS).join(' ') + '...';
};

const Project = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  
  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-stretch lg:p-10 p-5">
        {projectData.map((item) => (
          <Card 
            key={item.id} 
            className={`h-full flex flex-col ${lightTheme ? "bg-[--grey-007] !border-[var(--grey-006)]" : "bg-[--grey-002] !border-[var(--grey-002)]"} !border`}
          >
            <CardHeader className="flex-grow">
              <CardTitle className={`${lightTheme ? "text-[--grey-001]" : "text-[--grey-007]"} font-open-sans`}>
                {item.name}
              </CardTitle>
              <CardDescription className={`${lightTheme ? "text-[--grey-001]" : "text-[--grey-007]"}  font-inter  group relative`}>
                {truncateText(item.description)}
                {item.description.split(' ').length > MAX_WORDS }
              </CardDescription>
              <div className='flex flex-row gap-2 !mt-5 font-open-sans'>
                <Link href={item.linkUrl} target='_blank' passHref>
                  <Button variant={lightTheme ? "default_borderless" : "dark_borderless"}>
                    <ExternalLink />
                  </Button>
                </Link>
                <Link href={item.gitUrl} target='_blank' passHref>
                  <Button variant={lightTheme ? "default_border" : "dark_border"}>
                    <GitHubIcon />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            
            <CardContent className="flex flex-col items-center justify-center flex-grow p-0">
              <div className="w-full h-[200px] relative overflow-hidden">
                <Image 
                  src={item.imgurl} 
                  alt={item.name} 
                  fill
                  className="object-contain rounded-lg h-auto !w-auto m-auto" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-2 justify-center mt-4">
              <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922736/next-js-seeklogo_trs43v.png"} width={30} height={30} alt='nextjs' className={`${lightTheme ? "" : "icon-dark"}`}/>
              <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922781/reactjs-logo-icon_q06uez.png"} width={30} height={30} alt='express' className={`${lightTheme ? "filter grayscale contrast-300 brightness-0" : "filter grayscale contrast-200"}`}/> 
              <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922771/tailwind-Logo_o27mh9.png"} width={30} height={30} alt='tailwind' className={`${lightTheme ? "filter grayscale contrast-300 brightness-0" : "filter grayscale contrast-200"}`}/>
              <Image src={"https://img.icons8.com/ios/50/express-js.png"} width={30} height={30} alt='express' className={`${lightTheme ? "" : "icon-dark"}`}/>
              <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922881/mongodb_ahxx3e.png"} width={40} height={30} alt='mongodb' className={`${lightTheme ? "filter grayscale contrast-300 brightness-0" : "filter grayscale contrast-200"}`}/>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Project