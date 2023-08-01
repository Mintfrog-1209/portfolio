import React from "react";
import Image, { StaticImageData } from "next/image";

type SkillProps = {
  src: StaticImageData;
  name: string;
};

const SkillItem = (props: SkillProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#50dc50]">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={props.src} width="80" height="80" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
