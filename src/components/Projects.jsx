import React from "react";
import { motion } from "framer-motion";
import OmismChat from "../assets/omism-chat.png";
import CVLayout from "../assets/9cf4d780-c291-443c-81eb-d6cb3abe8939.png";
import npmUtils from "../assets/npm-react-utils.png";

import { Each, Show,truncateText } from "@bluelens/react-utils";

import { handleCalendlyPopup } from "../Functions/tools";
import FeatherIcon from "feather-icons-react";
const Projects = () => {
  const projects = [
    {
      title: "OMISM Chat",
      subtitle: "Video Chat Web APP",
      image: OmismChat,
      figmaLink:
        "https://www.figma.com/design/34o97RHCYwhuJxiRaFEDvj/OMISM-MOBILE-APP?node-id=53-2&t=IvuaNjJaZjZerKPs-0",
      demoLink: "https://omism.chat/",
    },
    {
      title: "Vincent.me",
      subtitle: "Portfolio",
      image: CVLayout,
      figmaLink:
        "https://www.figma.com/design/QsOrD375iWhB38c5xA3iAw/VIncent-Navas-CV?node-id=0-1&m=dev&t=fThD8rcxos2HTUyc-1",
      demoLink: "https://navasvincent.github.io/vincent.me/",
    },
    {
      title: "@bluelens/react-utils",
      subtitle: "NPM Package",
      image: npmUtils,
      figmaLink: false,
      demoLink: "https://www.npmjs.com/package/@bluelens/react-utils",
    } 
    // Add more items here...
  ];
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
      <div className="flex flex-row gap-6 lg:flex-col lg:p-[20px]">
        <Each
          of={projects}
          render={(project, idx) => {
            return (
              <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
              }} 
                className="bg-[#fff] rounded-[20px] px-5 pb-5 pt-2 z-40 shadow-md cursor-pointer "
              whileHover={{ scale: 1.05 }}
            > 
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium text-[18px]">
                    {project.title}
                  </label>
                  <label className="text-[#94A3B8]">{project.subtitle}</label>
                </div>
                <div className="w-[350px] overflow-hidden flex border justify-center items-center h-[182px] rounded-[10px] p-2 mt-2">
                  <img
                    src={project.image}
                    className="h-full object-contain box-border"
                  />
                </div>
               
                <div className="flex flex-row justify-between items-center mt-4 ">
                <Show.When isTrue={project.figmaLink}>
                  <div className="flex flex-row gap-1">
                    <FeatherIcon
                      icon="figma"
                      size={20}
                      fill="#fff"
                      stroke="#000"
                      strokeWidth={2}
                    />
                    <span className="flex flex-col">
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer" 
                      >
                        <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                          {truncateText(project?.figmaLink, 20)}
                        </label>
                      </a>
                    </span>
                  </div>
                  </Show.When>
                  <span className="flex flex-col">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <label className="text-[#94A3B8] flex flex-row gap-1 hover:underline hover:text-[dodgerblue] cursor-pointer">
                      <FeatherIcon
                          icon="external-link"
                          size={16}
                          fill="#fff"
                          stroke="#94A3B8"
                          strokeWidth={1}
                        />  Demo

                      </label>
                    </a>
                  </span>
                </div>
              </motion.div>
            );
          }}
        />
      </div>
    </motion.section>
  );
};

export { Projects };
