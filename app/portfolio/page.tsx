import Image from "next/image";
import React from "react";
import Lotus from "../lotus.png"
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
          src={Lotus}
          alt="/"
          placeholder='blur'
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2">포트폴리오</h1>
          <h2 className="py-2">
            지금 보고계신 이 페이지
          </h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="담당 역할" content="프론트엔드 엔지니어, 배포"/>
          <DetailItem title="구현 사항" content="자기 소개, 보유 기술, 진행한 프로젝트"/>
          <DetailItem title="활용 기술" content="TypeScript, Next.js, React"/>
          <DetailItem title="깃허브 주소" content="https://github.com/Mintfrog-1209/portfolio"/>
        </div>
        <div>
        <Image
          className="rounded-lg"
          src={Lotus}
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
