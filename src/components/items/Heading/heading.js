import React from 'react'

const HeadingComp = ({heading,subheading,margin ,animation}) => {
  return (
    <div className={`flex flex-col justify-center items-center m-auto ${margin} `} data-aos={animation}>
        <h3 className='opens-sans text-4xl font-bold uppercase'>{heading}</h3>
        <p className='inter text-gray-500'>{subheading}</p>
        <div className='w-20 bg-slate-600 h-1 mb-10 '></div>
    </div>
  )
}

export default HeadingComp