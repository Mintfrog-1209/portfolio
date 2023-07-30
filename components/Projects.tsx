import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full p-[100px]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='text-4xl tracking-widest uppercase text-[#379237] py-4'>
          Projects
        </h1>
        <div className='grid md:grid-cols-2 gap-8 py-4'>
          <ProjectItem
            title='GROUND'
            src='ground'
            url='/ground'
          />
          <ProjectItem
            title='있슈(easssue)'
            src='easssue'
            url='/easssue'

          />
          <ProjectItem
            title='SAMALS'
            src='samals3'
            url='/samals'

          />
          <ProjectItem
            title='포트폴리오'
            src='portfolio'
            url='/twitch'

          />
        </div>
      </div>
    </div>
  )
}

export default Projects