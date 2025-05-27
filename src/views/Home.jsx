import { useState } from "react";
import { Header } from "../components/Header";
import { HeroMe } from "../components/HeroMe";
import { About } from "../components/About";
import { Experience } from "../components/TimelineExperience";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
import { WhatIdo } from "../components/WhatIdo";
import { GetInTouch } from "../components/GetInTouch";
import {Projects} from "../components/Projects" 

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 font-regular text-[12px] z-30">
      {/* <Header /> */}
      <div className="container-fluid !mt-[-66px]">
        <div className="background">
          <HeroMe />
        </div>
      </div>
    {/* <GenderReveal/> */}
      <About />
      <WhatIdo />
      <Experience />
      <Skills />
      <Projects/>
      <GetInTouch />

      {/* <Footer />  */}
    </div>
  );
};

export { Home };
