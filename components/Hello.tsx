import React from 'react'

const Hello = () => {
  return (
    <div id='home' className='w-full h-screen text-center p-8  bg-gradient-to-t from-[#3DDAD7] to-[#2A93D5]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-10'>
        <div>
          <h1 className='py-4 text-[#F6F4EB]'>
            안녕하세요!
          </h1>
            <h1 className='py-2 text-[#F6F4EB]'>Front-end 웹 개발자 <span className='text-black'>한유빈</span>입니다.</h1>

          <h2 className='py-4 text-[#F6F4EB] sm:max-w-[70%] m-auto'>
            서비스를 사용하는 유저의 입장이 되어 어떻게 하면 더 빠르고 &nbsp; 편하게 서비스를 이용할 수 있을지 항상 고민하고 있습니다.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hello