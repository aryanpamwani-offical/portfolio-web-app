import Image from 'next/image'
import React from 'react'

const ImageComp = ({animation}) => {
  return (
    <div className="flex flex-col  content-center justify-center items-center m-auto lg:mr-20  w-3/4 p-5" data-aos={animation}>
   
   <Image src="/logo.jpg" width={300} height={300} alt='hero' className='rounded-2xl  ' priority={true}/>
        
</div>
  )
}

export default ImageComp