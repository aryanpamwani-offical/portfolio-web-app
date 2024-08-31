"use client"
import Image from 'next/image'
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { toggleTheme } from "@/Features/themeSlice";
const ThemeChooser = () => {
    const lightTheme=useSelector((state)=>state.themeKey);
    const dispatch=useDispatch()
  return (
    <div 
  onClick={()=>{dispatch(toggleTheme())}}
  className={lightTheme?"fixed w-20 h-16 rounded-2xl bg-black text-white z-40 bottom-8 right-8  shadow-md flex items-center justify-evenly ":"fixed w-20 h-16 rounded-2xl bg-white z-40 bottom-8 right-8  shadow-md flex items-center justify-evenly "}>
   {
    lightTheme?<Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1725012231/brightness_eru1xy.png"} width={32} height={32} className="icon-dark" alt='dark'/>
    :
    <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1725012256/moon_zneurl.png"} width={32} height={32} alt='light'/>
   }
  </div>
  )
}

export default ThemeChooser