import React from 'react'
import ProjectItem from './ProjectItem'
import Ground from '../public/projects/ground.png'
import Easssue from '../public/projects/easssue.png'
import Samals from '../public/projects/samals3.png'
import Portfolio from '../public/projects/portfolio.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full p-[100px] bg-[#B9F3FC]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='text-4xl tracking-widest uppercase text-[#379237] py-4'>
          Projects
        </h1>
        <div className='grid md:grid-cols-2 gap-8 py-4'>
          <ProjectItem
            title='GROUND'
            src={Ground}
            url='/ground'
          />
          <ProjectItem
            title='있슈(easssue)'
            src={Easssue}
            url='/easssue'

          />
          <ProjectItem
            title='SAMALS'
            src={Samals}
            url='/samals'

          />
          <ProjectItem
            title='포트폴리오'
            src={Portfolio}
            url='/twitch'

          />
        </div>
      </div>
    </div>
  )
}

export default Projects