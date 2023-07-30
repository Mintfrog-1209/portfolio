import React from 'react'

const Hello = () => {
  return (
    <div id='home' className='w-full h-screen text-center p-8'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            안녕하세요!
          </h1>
          <h1 className='py-2 text-gray-700'>Front-end 웹 개발자 한유빈입니다.</h1>

          <h2 className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            서비스를 사용하는 유저의 입장이 되어 어떻게 하면 더 빠르고 편하게 서비스를 이용할 수 있을지 항상 고민하고 있습니다.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hello