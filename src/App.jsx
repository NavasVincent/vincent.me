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
      <Footer />
    </div>
  );
}

export default App;
