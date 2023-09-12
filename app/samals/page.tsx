import Image from "next/image";
import React from "react";
import SamalsImage from "../../public/projects/samals4.png";
import SamalsImage2 from "../../public/projects/samals2.png";
import DetailItem from '@/components/DetailItem';
import Link from "next/link";

const home = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#E7CEA6] to-[#EDFAFD] min-h-screen">
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={SamalsImage}
          alt="/"
          placeholder='blur'
        />
        <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2">SAMALS</h1>
          <h2 className="py-2">멸종 위기 동물 보호를 위한 NFT 플랫폼</h2>
          <p className="text-xl py-8">
          멸종 위기 동물에 대한 경각심을 높이기 위해 NFT와 메타버스를 이용해보면 어떨까라는 생각에서 출발한 프로젝트입니다. 전용 토큰을 이용해 뽑기를 진행하면 무작위로 멸종 위기 동물의 모습이 그려져 있는 NFT를 획득할 수 있으며, 획득한 NFT를 Unity로 구현한 나만의 섬에서 움직이는 3D 동물 그래픽으로 확인할 수 있도록 하였습니다.<br/>
          이번 프로젝트에서는 동물 NFT를 움직이는 동물로 Unity안에서 구현하고, 구현한 Unity 서비스를 WebGL을 활용하여 React로 개발한 웹사이트에 옮기는 역할을 맡았습니다. Unity는 기존의 프론트엔드 라이브러리나 프레임워크랑은 느낌이 많이 달랐기 때문에 처음 학습하는데 시간이 많이 소요됐지만 결과물을 완성할 수 있어서 뿌듯했습니다. 하지만 멀티플레이어 기능을 구현하는 것 까지는 시간이 부족해 기존 유저 와 유저, 유저와 동물 간의 상호작용을 구현하려던 계획에서 미니홈피 형식으로 나의 섬을 꾸미고 상대방의 섬을 방문하는 방식으로 계획을 수정한 점이 아쉬웠습니다.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="기간" content="2022.8.29~2022.10.7(6주)"/>
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
