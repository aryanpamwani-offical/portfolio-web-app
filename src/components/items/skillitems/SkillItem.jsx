import React from 'react'
import Image from 'next/image'
const SkillItem = ({lanuageName,imgUrl}) => {
  return (
    <>
      <div className="flex flex-col  ">
            
                <Image src={imgUrl} width={80} height={80} className='m-auto'/>
                <p className='text-center mt-2 font-bold inter lg:text-2xl md:text-2xl sm:text-xl text-xs'>{lanuageName}</p>
            </div>
    </>
  )
}

export default SkillItem