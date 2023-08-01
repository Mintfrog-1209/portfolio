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
    <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] bg-[#50dc50]'>
    <Image className='rounded-xl group-hover:opacity-10' height='400' width='400' src={props.src} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center py-3'>{props.title}</h3>
        <Link href={props.url}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem