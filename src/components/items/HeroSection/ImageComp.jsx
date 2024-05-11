import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
  return (
    <div className="flex flex-col lg:w-2/4 content-center justify-center items-center m-auto lg:mr-20 ">
   
   <Image src="/navlogo.png" width={300} height={300}/>
        
</div>
  )
}

export default ImageComp