import { useState } from "react";
import { Header } from "./components/Header";
import { HeroMe } from "./components/HeroMe";
import { About } from "./components/About";
import { Experience } from "./components/TimelineExperience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { WhatIdo } from "./components/WhatIdo";
import {GetInTouch} from "./components/GetInTouch"

function App() {
  return (
    <div className="font-sans bg-gray-50 font-regular text-[12px] z-30">
           <Header />
      <div class="container-fluid !mt-[-66px]">
        <div className="background"> 
          <HeroMe />
        </div>
      </div>

      <About />
      <WhatIdo />
      <Experience />
      <Skills />
      <GetInTouch/>


      <Footer /> 


   </div>
  );
}

export default App;
