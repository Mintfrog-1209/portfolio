import Image from "next/image";
import React from "react";
import DetailItem from '@/components/DetailItem';
import GroundImage from "../../public/projects/ground3.png";
import GroundImage2 from "../../public/projects/ground2.png";


const home = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#E7CEA6] to-[#EDFAFD] min-h-screen">
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1" 
          layout="fill"
          objectFit="contain"
          src={GroundImage}
          alt="/"
          placeholder="blur"
        />
        <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2">GROUND</h1>
          <h2 className="py-8">
            개인의 운동 경험을 기록하고 공유하는 SNS 서비스
          </h2>
        </div>
      </div>

    <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="담당 역할" content="팀장, 프론트엔드 엔지니어, 최종발표"/>
          <DetailItem title="구현 사항" content="아이디 비밀번호 찾기 기능 구현, 게시글 및 댓글 CRUD 기능 구현"/>
          <DetailItem title="활용 기술" content="React, Firebase Storage"/>
          <DetailItem title="깃허브 주소" content="https://github.com/Mintfrog-1209/GROUND"/>
        </div>
        <div>
        <Image
          className="rounded-lg"
          src={GroundImage2}
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
