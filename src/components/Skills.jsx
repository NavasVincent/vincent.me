import React, { useState, useEffect } from "react";
const Skills = () => {
  const skills = [
    {
      "Frontend Development": [
        "HTML",
        "NEXT JS",
        "CSS",
        "TAILWIND CSS",
        "JAVASCRIPT",
        "MUI",
        "REACT JS",
        "JQUERY",
        "WORDPRESS",
      ],
    },
    { "Backend Development": ["NODE JS", "PHP", "EXPRESS JS", "PYTHON"] },
    { "Testing & Tools": ["CYPRESS", "VS CODE", "Git (GitLab and GitHub)"] },
    { Database: ["MYSQL", "POSTGRESQL"] },

    { "Design & Prototyping": ["FIGMA", "PHOTOSHOP"] },
  ];

  return (
    <section className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto py-8 mt-5 gap-[50px]">
      <div className="flex flex-col items-center gap-1 ml-6 pt-[70px]">
        <h2 className="text-[24px] font-medium mb-2">Skills & Expertise</h2>
        <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-center">
          Experienced in frontend development with HTML, CSS, JavaScript,
          ReactJS, NextJS, Tailwind CSS, MUI, and jQuery. Proficient in backend
          technologies including NodeJS, PHP, Python, ExpressJS, and Laravel.
          Skilled in databases like MySQL, MongoDB, and PostgreSQL. Familiar
          with version control (Git, GitHub, GitLab), testing (Cypress), and
          development tools like VSCode. Knowledgeable in design and prototyping
          with Figma and Photoshop.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 w-full justify-center">
        {skills.map((category, index) => {
          const categoryName = Object.keys(category)[0]; // Get category name
          const categorySkills = Object.values(category)[0]; // Get skills list

          // Define positioning logic
          const isFrontend = categoryName === "Frontend Development";
          const isBackend = categoryName === "Backend Development";
          const isTesting = categoryName === "Testing & Tools";
          const isDatabase = categoryName === "Database";
          const isPrototyping = categoryName === "Design & Prototyping";

          return (
            <div
              key={index}
              className={`flex flex-col items-center 
        ${isFrontend ? "row-span-2 col-start-1 row-start-1" : ""} 
        ${isBackend ? "col-start-2 row-start-1" : ""} 
        ${isTesting ? "col-start-3 row-start-1" : ""} 
        ${isDatabase ? "col-start-2 row-start-2" : ""} 
        ${isPrototyping ? "col-start-3 row-start-2" : ""}`}
            >
              <h3 className="text-[18px] font-medium mb-5">{categoryName}</h3>
              <div className="grid grid-cols-2 gap-3">
                {categorySkills.map((skill, i) => {
                  const isLastItem =
                    categorySkills.length % 2 !== 0 &&
                    i === categorySkills.length - 1;
                  return (
                    <span
                      key={i}
                      className={`border border-[#F59E0B] text-[#F59E0B] px-4 py-2 rounded-full text-[12px] text-center whitespace-nowrap shadow-card font-regular
                ${
                  isLastItem
                    ? "col-span-2 flex justify-center w-[max-content] items-center justify-self-center"
                    : ""
                }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export { Skills };
