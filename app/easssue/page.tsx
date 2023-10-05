import Image from "next/image";
import React from "react";
import EasssueImage from "../../public/projects/easssue3.png";
import EasssueImage2 from "../../public/projects/easssue2.png";
import DetailItem from "@/components/DetailItem";
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
          src={EasssueImage}
          alt="/"
          placeholder="blur"
        />
        <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2">easssue</h1>
          <h2 className="py-2">
            사용자 관심 키워드 및 실시간 키워드를 통한 뉴스 제공 크롬 확장
            프로그램
          </h2>
          <p className="text-xl py-8">
          네이버 등의 포털사이트에서 실시간 검색어가 사라져 이슈 파악이 어려운 점을 개선해보기 위해 시작한 프로젝트입니다. 별도의 웹사이트가 아닌, 크롬 확장 프로그램으로 개발해 접근성을 더 높이고 크롬 확장 프로그램이 지원하는 다양한 기능을 활용하고자 하였습니다.<br/>
          주요 기능으로는 크롬 새 탭 페이지에서 북마크, 키워드 별 맞춤 뉴스, 뉴스 조회 기록에 따른 지표를 제공하며, naver와 google에서 실시간 인기 키워드 표시 기능, 또한 뉴스 페이지에서 해당 뉴스를 3줄 요약한 내용과 핵심 키워드 등을 워드 클라우드로 제공합니다.<br/>
          TypeScript를 이용하여 개발을 진행하였으며, 웹 페이지가 아닌 확장 프로그램을 만들면서 DOM 조작, 크롬 api가 제공하는 기능을 활용한 다양한 기능들을 개발 하는 경험을 할 수 있어서 재미 있고 의미 있는 프로젝트 였습니다. 또한 개발 완료한 확장 프로그램을 배포하는 과정에서 사용자 권한 사용을 이유로 배포 반려를 여러번 당했지만 해당 내용을 수정하고 성공적으로 배포를 완료하며 단순히 기능을 구현하는 것 이외에 보안, 사용자 권한 이용 등의 사항도 중요하다는 것을 알게 되었습니다.<br/>
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 py-4 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 py-4 items-center content-center">
          <DetailItem title="기간" content="2022.10.10~2022.11.18, 2023.01.05~2023.02.14(10주)"/>
          <DetailItem
            title="담당 역할"
            content="프론트엔드 엔지니어, 최종발표"
          />
          <DetailItem
            title="구현 사항"
            content={`1. TypeScript를 활용한 크롬 확장 프로그램의 새 탭 페이지 개발\n2. Naver, Google 등 페이지에 DOM 조작 기능 활용하여 실시간 인기 키워드 컴포넌트 삽입\n3. 크롬 웹 스토어에 확장 프로그램 배포`}
          />
          <DetailItem title="활용 기술" content="TypeScript, React" />
          <DetailItem
            title="깃허브 주소"
            content="https://github.com/Mintfrog-1209/Easssue"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src={EasssueImage2}
            alt="/"
            placeholder="blur"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
