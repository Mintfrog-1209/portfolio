import React from 'react'
import Image from 'next/image'

type detailProps = {
  content: string;
  title: string;
}
const DetailItem = (props: detailProps) => {
  return (
    <div className="py-6 px-2 shadow-xl rounded-xl bg-[#F6F4EB]">
      <div className="grid grid-cols-3 gap-4 justify-center ">
        <div className="m-auto">
          <div className='text-2xl '>{props.title}</div>
        </div>
        <div className="flex flex-col col-span-2 whitespace-pre-line">
          <div className='text-xl whitespace-pre-wrap'>{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default DetailItem