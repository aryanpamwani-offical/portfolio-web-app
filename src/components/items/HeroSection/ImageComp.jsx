import Image from 'next/image'
import React from 'react'

const ImageComp = ({animation}) => {
  return (
    <div className="flex flex-col lg:w-4/4 content-center justify-center items-center m-auto lg:mr-20 " data-aos={animation}>
   
   <Image src="https://i.ibb.co/RGF1mW7/navlogo.png" width={300} height={300} alt='hero' loading='lazy'/>
        
</div>
  )
}

export default ImageComp