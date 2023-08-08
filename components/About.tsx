import React from "react";
import Image from "next/image";
import AboutItem from "./AboutItem";
import Name from "../public/about/name.png"
import Birthday from "../public/about/birthday.png"
import Email from "../public/about/email.png"
import Location from "../public/about/location.png"
import Graduate from "../public/about/graduate.png"
import Github from "../public/about/github.png"

const About = () => {
  return (
    <div id="about" className="w-full p-[100px] bg-gradient-to-t from-[#AED9DA] to-[#3DDAD7]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-4xl tracking-widest uppercase text-[#F6F4EB] pb-4">
          About
        </p>
        <div className="grid grid-cols-3 py-4 gap-8">
          <AboutItem title="이름" content="한유빈" src={Name} />
          <AboutItem title="생년월일" content="1997.12.09" src={Birthday} />
          <AboutItem title="이메일" content="hyb120934@gmail.com" src={Email} />
          <AboutItem
            title="거주지"
            content="대구광역시 수성구"
            src={Location}
          />
          <AboutItem
            title="학력"
            content="경북대학교 전자공학부"
            src={Graduate}
          />
          <AboutItem
            title="GitHub"
            content="https://github.com/Mintfrog-1209"
            src={Github}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
