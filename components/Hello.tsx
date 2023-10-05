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

          <h2 className='py-6 text-[#F6F4EB] sm:max-w-[84%] m-auto'>
           빠른 습득력과 다양한 기술 스택을 활용한 프로젝트 경험을 살려 많은 사용자가 편리하고 빠르게 이용할 수 있는 서비스를 만드는 것이 목표입니다.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hello