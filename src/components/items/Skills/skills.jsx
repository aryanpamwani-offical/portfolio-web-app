import React from 'react'
import SkillItem from './SkillItem'
import skillData from './skillData'

const Skills = ({animation}) => {
  return (
    <section className='lg:mx-20 md:mx-15 sm:mx-0' data-aos={animation}>
      <div className='container mx-auto mb-5 mt-10 px-4 sm:px-6 lg:px-8'>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillData.map((data, key) => (
            <SkillItem
              key={key}
              imgUrl={data.imgUrl}
              lanuageName={data.languageName}
              cssAdd={key === 9 || key === 4 ? "icon-dark" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills