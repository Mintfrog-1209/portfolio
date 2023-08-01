import React from 'react'
import SkillItem from './SkillItem'
import Html from '../public/skills/html.png'
import Css from '../public/skills/css.png'
import JavaScript from '../public/skills/javascript.png'
import ReactJs from '../public/skills/react.png'
import NextJs from '../public/skills/nextjs.png'
import Tailwind from '../public/skills/tailwind.png'
import TypeScript from '../public/skills/typescript.png'
import Unity from '../public/skills/unity.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full p-[100px] bg-[#B9F3FC]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-4xl tracking-widest uppercase text-[#379237]'>
          Skills
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 py-4'>
          <SkillItem src={Html} name="HTML5"/>
          <SkillItem src={Css} name="CSS3"/>
          <SkillItem src={JavaScript} name="JavaScript"/>
          <SkillItem src={ReactJs} name="React"/>
          <SkillItem src={NextJs} name="Next.js"/>
          <SkillItem src={Tailwind} name="Tailwind"/>
          <SkillItem src={TypeScript} name="TypeScript"/>
          <SkillItem src={Unity} name="Unity"/>
        </div>
      </div>
    </div>
  )
}

export default Skills