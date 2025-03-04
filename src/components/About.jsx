import React, { useState, useEffect } from "react";
import img2 from "../assets/me2.png";
const About = () => {
  return (
    <section className=" w-full  gap-3 flex flex-row justify-between items-start  max-w-[1150px] m-auto w-full py-8 mt-5">
      <div className="w-full relative">
        <div className=" w-[300px]">
          <img src={img2} className="w-full relative" />
        </div>
        <div className="absolute bottom-6 right-0 left-[200px] z-20">
          <div className="flex flex-col gap-1 bg-white shadow-card rounded-[10px] p-4 w-[200px] text-center leading-none">
            <h1 className="uppercase text-[14px] font-semibold ">
              Software Engineer
            </h1>
            <span className="text-[10px] text-[#94A3B8] font-regular">
              5+ Years Experience
            </span>
            <span className="text-[8px] text-[#BBC4D2] font-regular">
              (2 Years as Junior Developer)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 ml-6 pt-[60px]">
        <h2 className="text-[24px] font-medium mb-4">
          I'm a Passionate Software Engineer
        </h2>
        <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed">
          I'm a passionate Software Engineer with a strong foundation in both
          frontend and backend technologies. I specialize in creating dynamic,
          user-friendly applications, utilizing my skills in JavaScript,
          ReactJS, NodeJS, and various other frameworks. Driven by a love for
          problem-solving and innovation, I am dedicated to writing clean,åç
          efficient code that enhances user experiences and optimizes
          performance. My focus is on continuous learning and staying updated
          with the latest trends in software development to deliver impactful
          solutions that exceed client expectations.
          <br /> <br />I enjoy working in teams, where we can solve problems and
          succeed together. I’m always looking to grow as a software engineer,
          focusing on delivering quality solutions that truly make an impact.
        </p>
        <button className="mt-4 uppercase text-brand-primary border border-solid border-brand-primary w-[150px] px-8 py-2 rounded hover:bg-brand-primary hover:text-white">
          Hire me
        </button>
      </div>
    </section>
  );
};
export { About };
