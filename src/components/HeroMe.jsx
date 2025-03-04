import React, { useState, useEffect } from "react";
import img from "../assets/Rectangle-bg.png"
import img1 from "../assets/me1.png"
 const HeroMe = ()=> {
    return (
      <section
        className="bg-no-repeat bg-cover bg-center w-full h-[703px] flex flex-row justify-between items-center  px-4 "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-row justify-between max-w-[1150px] w-full m-auto items-center relative">
          
          <div>
            <h2 className="text-[40px] font-bold text-black uppercase">Hey! I'M</h2>
            <h2 className="text-[40px] font-bold text-white uppercase">
              VINCENT BOTALON NAVAS
            </h2>
            <h4 className="text-[20px] font-light text-white">
              SOFTWARE ENGINEER | FRONTEND DEVELOPER
            </h4>
            <div className="flex flex-row gap-3 mt-6">
            <button className="uppercase bg-brand-primary text-white px-8 py-2 rounded">Hire me</button>
            <button className="uppercase border-2 border-solid border-white text-white px-4 py-2 rounded">Contact Me</button>
            </div>
          </div> 
          <img src={img1}  className="w-[300px] z-50" width="300"/>
         
        </div> 
      </section>
    );
  }
export { HeroMe };

 
