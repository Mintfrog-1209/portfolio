import React from 'react'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <div id='skills' className='w-full p-[100px]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-4xl tracking-widest uppercase text-[#379237]'>
          Skills
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 py-4'>
          <SkillItem src="html" name="HTML5"/>
          <SkillItem src="css" name="CSS3"/>
          <SkillItem src="javascript" name="JavaScript"/>
          <SkillItem src="react" name="React"/>
          <SkillItem src="nextjs" name="Next.js"/>
          <SkillItem src="tailwind" name="Tailwind"/>
          <SkillItem src="typescript" name="TypeScript"/>
          <SkillItem src="unity" name="Unity"/>
        </div>
      </div>
    </div>
  )
}

export default Skills