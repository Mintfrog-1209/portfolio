import React from "react";
import Image, { StaticImageData } from "next/image";

type SkillProps = {
  src: StaticImageData;
  name: string;
};

const SkillItem = (props: SkillProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={props.src} width="80" height="80" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className='text-2xl'>{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
