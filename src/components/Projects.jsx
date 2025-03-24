import React from "react";
import { motion } from "framer-motion";
import OmismChat from "../assets/omism-chat.png";
import { handleCalendlyPopup } from "../Functions/tools";
import FeatherIcon from "feather-icons-react";
const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto py-8 mt-5 gap-[50px]"
      id="contact-me"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center gap-1 pt-[70px] md:mx-4"
      >
        <h2 className="text-[24px] font-medium mb-2">
          Let’s take a look at my
          <span className="text-brand-primary"> Portfolio! </span>
        </h2>
        <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-center">
          Welcome to my portfolio! This is a collection of my work, showcasing
          my journey as a Software Engineer and Frontend Developer. From
          building high-performance websites and custom WordPress solutions to
          developing responsive web applications and integrating complex APIs,
          this portfolio reflects my passion for crafting efficient,
          user-friendly digital experiences. Take a look and see how my skills
          in ReactJS, Tailwind CSS, Node.js, and modern frameworks come together
          to create seamless, responsive designs. Let's build something amazing
          together!
        </p>
      </motion.div>
     <div className="flex flex-row gap-6">
     <div className="bg-[#fff] rounded-[20px] px-5 pb-5 pt-2  z-30  shadow-md" >
      <div className="flex flex-row justify-between items-center ">
          <label className="font-medium text-[18px]">OMISM Chat</label>
          <label className="text-[#94A3B8]">Video Chat Web APP</label>
        </div>
        <img
          src={OmismChat}
          className="w-[400px]  rounded-[10px] border " //border-[4px] border-brand-primary 
        />
     
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row gap-3  ">
            {/* <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"github"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://github.com/NavasVincent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Repository
                  </label>
                </a>
              </span>
            </div> */}
            <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"figma"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://www.figma.com/design/34o97RHCYwhuJxiRaFEDvj/OMISM-MOBILE-APP?node-id=53-2&t=IvuaNjJaZjZerKPs-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Figma Design
                  </label>
                </a>
              </span>
            </div>
          </div>
          <span className="flex flex-col">
            <a
              href="https://omism.chat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                DEMO
                <FeatherIcon
                  icon={"external-link"}
                  size={16}
                  fill="#fff"
                  stroke="#94A3B8"
                  strokeWidth={1}
                />
              </label>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-[#fff] rounded-[20px] px-5 pb-5 pt-2  z-40  shadow-md" >
      <div className="flex flex-row justify-between items-center ">
          <label className="font-medium text-[18px]">OMISM Chat</label>
          <label className="text-[#94A3B8]">Video Chat Web APP</label>
        </div>
        <img
          src={OmismChat}
          className="w-[400px]  rounded-[10px] border " //border-[4px] border-brand-primary 
        />
     
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row gap-3  ">
            {/* <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"github"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://github.com/NavasVincent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Repository
                  </label>
                </a>
              </span>
            </div> */}
            <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"figma"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://www.figma.com/design/34o97RHCYwhuJxiRaFEDvj/OMISM-MOBILE-APP?node-id=53-2&t=IvuaNjJaZjZerKPs-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Figma Design
                  </label>
                </a>
              </span>
            </div>
          </div>
          <span className="flex flex-col">
            <a
              href="https://omism.chat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                DEMO
                <FeatherIcon
                  icon={"external-link"}
                  size={16}
                  fill="#fff"
                  stroke="#94A3B8"
                  strokeWidth={1}
                />
              </label>
            </a>
          </span>
        </div>
      </div>
      
      <div className="bg-[#fff] rounded-[20px] px-5 pb-5 pt-2  z-40 shadow-md" >
      <div className="flex flex-row justify-between items-center ">
          <label className="font-medium text-[18px]">OMISM Chat</label>
          <label className="text-[#94A3B8]">Video Chat Web APP</label>
        </div>
        <img
          src={OmismChat}
          className="w-[400px]  rounded-[10px] border " //border-[4px] border-brand-primary 
        />
     
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row gap-3  ">
            {/* <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"github"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://github.com/NavasVincent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Repository
                  </label>
                </a>
              </span>
            </div> */}
            <div className="flex flex-row gap-3">
              <FeatherIcon
                icon={"figma"}
                size={20}
                fill="#fff"
                stroke="#000"
                strokeWidth={2}
              />{" "}
              <span className="flex flex-col">
                <a
                  href="https://www.figma.com/design/34o97RHCYwhuJxiRaFEDvj/OMISM-MOBILE-APP?node-id=53-2&t=IvuaNjJaZjZerKPs-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                    Figma Design
                  </label>
                </a>
              </span>
            </div>
          </div>
          <span className="flex flex-col">
            <a
              href="https://omism.chat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                DEMO
                <FeatherIcon
                  icon={"external-link"}
                  size={16}
                  fill="#fff"
                  stroke="#94A3B8"
                  strokeWidth={1}
                />
              </label>
            </a>
          </span>
        </div>
      </div>
      
     </div>
    </motion.section>
  );
};

export { Projects };
