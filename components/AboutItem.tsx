import Image, { StaticImageData } from 'next/image'

type AboutProps = {
  content: string;
  src: StaticImageData;
  title: string;
}

const AboutItem = (props:AboutProps) => {
  return (
    <div className='py-6 pr-10 rounded-xl shadow-xl shadow-gray-400 bg-[#F6F4EB]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto justify-start'>
                <Image src={props.src} width='80' height='80' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-2xl py-2'>{props.title}</h3>
                <div>{props.content}</div>
              </div>
            </div>
      </div>
  )
}

export default AboutItem