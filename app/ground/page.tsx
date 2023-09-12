import Image from "next/image";
import React from "react";
import DetailItem from '@/components/DetailItem';
import GroundImage from "../../public/projects/ground3.png";
import GroundImage2 from "../../public/projects/ground2.png";


const home = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#E7CEA6] to-[#EDFAFD] min-h-screen">
      <div className="w-full h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
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
          <p className="text-xl py-8">
          SSAFY에서 첫번째로 진행한 팀프로젝트 입니다. 당시 유행한 오운완(오늘 운동 완료) 이라는 단어에서 영감을 받아 하루 한 운동을 인증하는 SNS 서비스를 만들어서 다른 사람들의 자세 등도 참고하고 자신의 동기부여에도 도움이 될 수 있도록 하면 어떨까라는 아이디어를 통해 개발하게 되었습니다.
          <br/>주요 기능으로는 회원가입 및 게시글 및 댓글 CRUD, 게시물 및 유저 검색기능, 활동 기반 운동 지표 제공 등이 있으며 그 중 아이디, 비밀번호 찾기 기능, 게시글 및 댓글 CRUD 기능을 맡아서 개발하였습니다.<br/>
          SSAFY에서는 Vue를 학습하였지만 이번 프로젝트에서는 React를 사용해 개발하였으며, React를 공부하고 개발을 진행하는 과정에서 Vue와 React와의 차이를 경험할 수 있었습니다. 또한 게시글 작성 시 이미지 및 동영상 첨부를 위해 Firebase Storage를 이용하였는데, 기능 구현에는 성공하였지만 로딩 속도나 이미지 크기등을 최적화 하지 못해서 아쉬움이 남았습니다.
          </p>
        </div>
      </div>

    <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="기간" content="2022.07.11~2022.08.19(6주)"/>
          <DetailItem title="담당 역할" content="팀장, 프론트엔드 엔지니어, 최종발표"/>
          <DetailItem title="구현 사항" content={`1. 아이디 비밀번호 찾기 기능 구현\n2. 게시글 및 댓글 CRUD 기능 구현`}/>
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
