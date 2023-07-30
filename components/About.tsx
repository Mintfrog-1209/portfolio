import React from "react";
import Image from "next/image";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <div id="about" className="w-full p-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-4xl tracking-widest uppercase text-[#379237]">
          About
        </p>
        <div className="grid grid-cols-3 py-4">
          <AboutItem title="이름" content="한유빈" src="name" />
          <AboutItem title="생년월일" content="1997.12.09" src="birthday" />
          <AboutItem title="이메일" content="hyb120934@gmail.com" src="email" />
          <AboutItem
            title="거주지"
            content="대구광역시 수성구"
            src="location"
          />
          <AboutItem
            title="학력"
            content="경북대학교 전자공학부"
            src="graduate"
          />
          <AboutItem
            title="GitHub"
            content="https://github.com/Mintfrog-1209"
            src="github"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
