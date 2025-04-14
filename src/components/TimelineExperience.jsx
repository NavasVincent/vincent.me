import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Boomai from "../assets/boom-ai.png";
import Boomsourcing from "../assets/boomsourcing.png";
import DigitalEngine from "../assets/digital-engine.png";
import LiberyCenter from "../assets/liberty-center.png";
import Wylog from "../assets/wylog.png";
import { motion } from "framer-motion";

import { Each, Show } from "@bluelens/react-utils";

const timeLineExperience = [
  {
    jobTitle: "Software Engineer",
    companyLogo: Boomai,
    employmentType: "Full-time",
    companyName: "Boom AI Solutions OPC",
    employmentPeriod: "February 14, 2022 - Present",
    jobDescription: `Build reusable components to simplify development for the team, transform UI designs into
      functional pages, create APIs using Node.js, Create API using Nodes js and ntegrate APIs with
      the frontend, work on backend queries for a C RM site, and create W ordPress plugins with
      Gravity Forms. I also manage data, customi z e form designs, and store it in the CRM`,
  },
  {
    jobTitle: "Junior Developer",
    companyLogo: Boomsourcing,
    employmentType: "Full-time",
    companyName: "Boomsourcing",
    employmentPeriod:
      "May 15, 2018 - March 27, 2019 & January 25, 2021 - February 14, 2022",
    jobDescription: `Build websites and UI components using frameworks like ReactJS, integrate APIs to connect
      the frontend with backend ser vices, and ensure seamless user interactions with efficient
      performance`,
  },
  {
    jobTitle: "Frontend Developer",
    companyLogo: DigitalEngine,
    employmentType: "Freelance",
    companyName: "Degital Engine",
    employmentPeriod: "August 11, 2020 - October 31, 2020",
    jobDescription:
      "I transform design concepts into fully functional, responsive websites using WordPress and Elementor. I ensure seamless integration across both desktop and mobile platforms, collaborating with designers and back-end teams to optimize performance, maintain cross-browser compatibility, and deliver user-friendly, visually appealing websites that work flawlessly on all devices.",
  },
  {
    jobTitle: "Graphic Artis",
    employmentType: "Full-time",
    companyLogo: LiberyCenter,
    companyName: "LCC Department Store",
    employmentPeriod: "June 12, 2018 - May  13, 2019",
    jobDescription:
      "I created graphic designs for advertising, including both outdoor and indoor promotions. I worked on event designs, such as fun runs, producing materials ranging from banners to shirts and other promotional items. My focus was on delivering visually appealing designs that effectively communicated the brand's message across various platforms.",
  },
  {
    jobTitle: "Web Designer",
    employmentType: "Internship",
    companyLogo: Wylog,
    companyName: "Wylog.Inc",
    employmentPeriod: "December 06, 2017 - April 08, 2018",
    jobDescription:
      "I was responsible for creating multiple-page designs, starting from logos to full page layouts. I collaborated with developers to bring designs to life, communicated directly with clients to understand their vision, and worked on maintaining and updating website content and designs using WordPress.",
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto py-8 mt-5 gap-[50px]"
      id="experience"
    >
      <div className="flex flex-col items-center gap-1 pt-[70px] md:mx-4">
        <h2 className="text-[24px] font-medium mb-2">Work Experience</h2>
        <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-center">
          I have experience as a Software Engineer, Junior Developer, Graphic
          Designer, and Web Design Intern. I’ve worked on both front-end and
          back-end development, created graphic designs for advertising and
          events, and collaborated with teams to build and maintain websites. My
          roles have helped me develop a strong mix of technical and creative
          skills. I also have experience with Agile/Scrum development
          methodology.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className=" mx-auto w-full overflow-auto overflow-y-hidden">
          <div className="relative w-full lg:hidden">
            <motion.div
              className="running-light absolute h-full flex items-center justify-center left-[50%] translate-x-[-50%] ml-[-1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <div className="absolute h-full left-[50%] translate-x-[-50%] border-l-[1px] border-dashed border-[94A3B8]"></div>
            <Each
              of={timeLineExperience}
              render={(item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <Show>
                    <Show.When isTrue={isEven}>
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.15 + 0.3,
                          duration: 0.5,
                        }}
                        className="relative flex flex-row w-full  cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex flex-col items-end w-1/2 pr-10">
                          <img
                            src={item.companyLogo}
                            alt="Boom.ai Logo"
                            className="h-9"
                          />
                          <h3 className="text-[16px] font-medium">
                            {item.companyName}
                          </h3>
                          <p className="text-gray-600 text-[10px] text-nowrap">
                            {item.employmentPeriod
                              .split(" & ")
                              .map((period, idx) => (
                                <React.Fragment key={idx}>
                                  {period}
                                  <br />
                                </React.Fragment>
                              ))}
                          </p>
                        </div>
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.15 + 0.3,
                            duration: 0.5,
                          }}
                          className="absolute mt-3 flex items-center justify-center left-[49.2%] translate-x-[-50%] w-5 h-5 bg-white rounded-full border-[1px] border-dashed border-[94A3B8]"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                        </motion.div>
                        <div className="flex flex-col pl-10 w-1/2">
                          <h4 className="text-[18px] mt-2 flex items-end gap-2">
                            {item.jobTitle}
                            <p className="text-[#94A3B8] font-light text-[11px]">
                              ({item.employmentType})
                            </p>
                          </h4>
                          <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-left pb-10">
                            {item.jobDescription}
                          </p>
                        </div>
                      </motion.div>
                    </Show.When>
                    <Show.Else>
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.15 + 0.3,
                          duration: 0.5,
                        }}
                        className="relative flex flex-row w-full cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex flex-col items-end pr-10 w-1/2">
                          <h4 className="text-[18px] mt-2 flex items-end gap-2">
                            {item.jobTitle}
                            <p className="text-[#94A3B8] font-light text-[11px]">
                              ({item.employmentType})
                            </p>
                          </h4>
                          <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-right pb-10">
                            {item.jobDescription}
                          </p>
                        </div>
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.15 + 0.3,
                            duration: 0.5,
                          }}
                          className="absolute mt-3 flex items-center justify-center left-[49.2%] translate-x-[-50%] w-5 h-5 bg-white rounded-full border-[1px] border-dashed border-[94A3B8]"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                        </motion.div>
                        <div className="flex flex-col items-start w-1/2 pl-10">
                          <img
                            src={item.companyLogo}
                            alt="Boom.ai Logo"
                            className="h-9"
                          />
                          <h3 className="text-[16px] font-medium">
                            {item.companyName}
                          </h3>
                          <p className="text-gray-600 text-[10px] text-nowrap">
                            {item.employmentPeriod
                              .split(" & ")
                              .map((period, idx) => (
                                <React.Fragment key={idx}>
                                  {period}
                                  <br />
                                </React.Fragment>
                              ))}
                          </p>
                        </div>
                      </motion.div>
                    </Show.Else>
                  </Show>
                );
              }}
            />
          </div>

          <div className="hidden lg:block relative px-4">
            <div className="running-light absolute h-full flex items-center justify-center left-[30px] translate-x-[0] ml-[-1px]"></div>
            <div className="absolute h-full left-[30px] translate-x-[0%] border-l-[1px] border-dashed border-[94A3B8]"></div>

            <Each
              of={timeLineExperience}
              render={(item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    className="flex flex-row gap-5 relative group transition-all duration-300"
                  >
                    <div className="mt-10 flex items-center justify-center ml-[7px] w-5 h-5 bg-white rounded-full border-[1px] border-dashed border-[94A3B8] z-30">
                      <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                    </div>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                      // whileHover={{ scale: 1.05 }}
                      className="relative mb-10 p-6 bg-white rounded-lg transition-all duration-300  hover:scale-105 hover:shadow-lg hover:border"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.companyLogo}
                          alt={`${item.companyName} Logo`}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <h3 className="text-lg font-medium">
                            {item.companyName}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {item.employmentPeriod}
                          </p>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold mt-3">
                        {item.jobTitle}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        ({item.employmentType})
                      </p>
                      <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                        {item.jobDescription}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience };
