'use client'
import React,{useState,useEffect} from 'react'
import {  projectData} from "./projectData";
import ProjectItems from './ProjectItems'
import { useSelector } from 'react-redux';

const Project = () => {
  const [current, setCurrent] = useState(0);
 
  const lightTheme=useSelector((state)=>state.themeKey);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === projectData.length - 1 ? 0 : current + 1);
    }, 4000); 

    return () => clearInterval(interval); 
  }, [current])
    function nextSlide() {
        setCurrent(current === projectData.length - 1 ? 0 : current + 1);
    }
   
    function prevSlide() {
        setCurrent(current === 0 ? projectData.length - 1 : current - 1);
    }
  return (
    <div className="flex justify-evenly p-5 items-center h-screen">
      <div className={lightTheme?"left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer":"left-arrow bg-slate-800 hover:bg-slate-600  hover:text-white p-2 rounded-lg cursor-pointer"} onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
  <div className='flex  justify-center items-center m-auto  w-full mb-10  '>
  {projectData.map(
                    (data, index) =>
                        current === index && (
<ProjectItems
key={data.id}
WebName={data.name}
WebImgUrl={data.imgurl}
WebGit={data.gitUrl}
WebUrl={data.linkUrl}
/>
                          
                          
                        )
                )}


</div>
<div className={lightTheme?"right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer":"right-arrow bg-slate-800 hover:bg-slate-600 hover:text-white p-2 rounded-lg cursor-pointer"} onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
</div>
   
  )
}

export default Project