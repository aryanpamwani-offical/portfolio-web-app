"use client";

import React from 'react'
import { useSelector } from 'react-redux';

const ThemeMaker = ({children}) => {
    const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <div className={lightTheme?"bg-white text-black relative h-screen":"bg-black text-white relative h-[100vh"}>

        {children}
    </div>
  )
}

export default ThemeMaker