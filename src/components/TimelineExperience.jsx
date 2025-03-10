import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Boomai from "../assets/boom-ai.png";
import Boomsourcing from "../assets/boomsourcing.png";
import DigitalEngine from "../assets/digital-engine.png";
import LiberyCenter from "../assets/liberty-center.png";
import Wylog from "../assets/wylog.png";
const timeLineExperience = [
  {
    jobTitle: "Software Engineer",
    companyLogo: Boomai,
    employmentType: "Full-time",
    companyName: "Boom.ai",
    employmentPeriod: "February 14, 2022 - Present",
    jobDescription:
      "As a Software Engineer, I create reusable components, solve coding problems, and handle backend queries for our CRM site. I also develop WordPress plugins with Gravity Forms, manage data, and store it in the CRM. Using GitLab and ReactJS, I ensure smooth functionality and performance, while collaborating with team members and other departments to deliver quality features and maintain the system efficiently",
  },
  {
    jobTitle: "Junior Developer",
    companyLogo: Boomsourcing,
    employmentType: "Full-time",
    companyName: "Boomsourcing",
    employmentPeriod:
      "May 15, 2018 - March 27, 2019 & January 25, 2021 - February 14, 2022",
    jobDescription:
      "As a Junior Developer, I focused on learning and building foundational skills in both frontend and backend development. This included courses in HTML, CSS, JavaScript, and other frontend technologies, as well as Python for backend development. I worked on honing my coding skills and understanding best practices in software development",
  },
  {
    jobTitle: "Frontend Developer",
    companyLogo: DigitalEngine,
    employmentType: "Freelance",
    companyName: "Degital Engine",
    employmentPeriod: "August 11, 2020 - October 31, 2020",
    jobDescription:
      "As a Frontend Developer, I transform design concepts into fully functional, responsive websites using WordPress and Elementor. I ensure seamless integration across both desktop and mobile platforms, collaborating with designers and back-end teams to optimize performance, maintain cross-browser compatibility, and deliver user-friendly, visually appealing websites that work flawlessly on all devices.",
  },
  {
    jobTitle: "Graphic Artis",
    employmentType: "Full-time",
    companyLogo: LiberyCenter,
    companyName: "LCC Department Store",
    employmentPeriod: "June 12, 2018 - May  13, 2019",
    jobDescription:
      "As a Graphic Artist, I created graphic designs for advertising, including both outdoor and indoor promotions. I worked on event designs, such as fun runs, producing materials ranging from banners to shirts and other promotional items. My focus was on delivering visually appealing designs that effectively communicated the brand's message across various platforms.",
  },
  {
    jobTitle: "Web Designer",
    employmentType: "Internship",
    companyLogo: Wylog,
    companyName: "Wylog.Inc",
    employmentPeriod: "December 06, 2017 - April 08, 2018",
    jobDescription:
      "As a Web Designer Intern, I was responsible for creating multiple-page designs, starting from logos to full page layouts. I collaborated with developers to bring designs to life, communicated directly with clients to understand their vision, and worked on maintaining and updating website content and designs using WordPress.",
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
    <section className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto py-8 mt-5 gap-[50px]">
      <div className="flex flex-col items-center gap-1 ml-6 pt-[70px]">
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
        <div class=" mx-auto w-full overflow-auto overflow-y-hidden">
          <div class="relative w-full">
            <div class="running-light absolute h-full flex items-center justify-center left-[50%] translate-x-[-50%] ml-[-1px]"></div>
            <div class="absolute h-full left-[50%] translate-x-[-50%] border-l-[1px] border-dashed border-[94A3B8]"></div>

            {timeLineExperience.map((item, index) => {
              const isEven = index % 2 === 0;
              if (isEven) {
                return (
                  <div class="relative flex flex-row flex flex-row w-full">
                    <div class="flex flex-col items-end w-1/2 pr-10">
                      <img
                        src={item.companyLogo}
                        alt="Boom.ai Logo"
                        class=" h-9 "
                      />

                      <h3 class="text-[16px] font-medium">
                        {item.companyName}
                      </h3>
                      <p class="text-gray-600 text-[10px] text-nowrap">
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
                    <div class="absolute mt-3  flex items-center justify-center left-[50%] translate-x-[-50%] w-5 h-5 bg-white rounded-full border-[1px] border-dashed border-[94A3B8]">
                      <div class=" w-3 h-3 bg-[#F59E0B] rounded-full"> </div>
                    </div>
                    <div className="flex flex-col   pl-10  w-1/2">
                      <h4 class="text-[18px] mt-2 flex  items-end gap-2">
                        {item.jobTitle}
                        <p class="text-[#94A3B8] font-light text-[11px]">
                          ({item.employmentType})
                        </p>
                      </h4>
                      <p class="text-[#94A3B8] font-light text-[12px] leading-relaxed text-left pb-10 ">
                        {item.jobDescription}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div class=" relative flex flex-row flex flex-row w-full">
                    <div className="flex flex-col  items-end 0 pr-10 border-dashed  w-1/2">
                      <h4 class="text-[18px] mt-2 flex  items-end gap-2">
                        {item.jobTitle}
                        <p class="text-[#94A3B8] font-light text-[11px]">
                          ({item.employmentType})
                        </p>
                      </h4>
                      <p class="text-[#94A3B8] font-light text-[12px] leading-relaxed text-right pb-10 ">
                        {item.jobDescription}
                      </p>
                    </div>
                    <div class="absolute mt-3 flex items-center justify-center left-[50%] translate-x-[-50%] w-5 h-5 bg-white rounded-full border-[1px] border-dashed border-[94A3B8]">
                      <div class=" w-3 h-3 bg-[#F59E0B] rounded-full"> </div>
                    </div>
                    <div class="flex flex-col items-start w-1/2 pl-10">
                      <img
                        src={item.companyLogo}
                        alt="Boom.ai Logo"
                        class="h-9"
                      />

                      <h3 class="text-[16px] font-medium">
                        {item.companyName}
                      </h3>
                      <p class="text-gray-600 text-[10px] text-nowrap">
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
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience };
