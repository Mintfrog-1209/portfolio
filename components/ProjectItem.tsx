import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectProps = {
  title: string;
  src: StaticImageData;
  url: string;
}
const ProjectItem = (props: ProjectProps) => {
  return (
    <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-[#EDFAFD] to-[#3DDAD7] bg-[#F6F4EB]'>
    <Image className='rounded-xl group-hover:opacity-10' height='400' width='400' src={props.src} alt='/' /> 
    <div className='py-6 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h2 className='text-white tracking-wider text-center py-6'>{props.title}</h2>
        <Link href={props.url}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>더 보기</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem