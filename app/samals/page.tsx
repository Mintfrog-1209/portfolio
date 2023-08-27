import Image from "next/image";
import React from "react";
import SamalsImage from "../../public/projects/samals4.png";
import SamalsImage2 from "../../public/projects/samals2.png";
import DetailItem from '@/components/DetailItem';
import Link from "next/link";

const home = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#E7CEA6] to-[#EDFAFD] min-h-screen">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={SamalsImage}
          alt="/"
          placeholder='blur'
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2">SAMALS</h1>
          <h2 className="py-2">멸종 위기 동물 보호를 위한 NFT 플랫폼</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="담당 역할" content="프론트엔드, Unity 엔지니어"/>
          <DetailItem title="구현 사항" content={`1. 보유하고 있는 동물 NFT를 Unity 안에서 움직이는 3D 동물 그래픽으로 확인 가능한 서비스 구현\n2. 구현한 Unity 서비스를 WebGL을 활용하여 React기반의 웹사이트에 이식`}/>
          <DetailItem title="활용 기술" content="React, WebGL, Unity"/>
          <DetailItem title="깃허브 주소" content="https://github.com/Mintfrog-1209/SAMALS"/>
        </div>
        <div>
        <Image
          className="rounded-lg"
          src={SamalsImage2}
          alt="/"
          placeholder="blur"
          objectFit='contain'
        />
        </div>
      </div>
    </div>
  );
};

export default home;
