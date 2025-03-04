import { useState } from "react";
import { Header } from "./components/Header";
import { HeroMe } from "./components/HeroMe";
import { About } from "./components/About";
import { Experience } from "./components/TimelineExperience";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { WhatIdo } from "./components/WhatIdo";

function App() {
  return (
    <div className="font-sans bg-gray-50 font-regular">
      <div class="container-fluid">
        <div className="background">

          {/* <div className="ripple-background z-0">
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle mediun shade4"></div>
            <div className="circle small shade5"></div>
          </div> */}
          {/* <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div> */}

          <Header />
          <HeroMe />
        </div>
      </div>

      <About />
      <WhatIdo />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
