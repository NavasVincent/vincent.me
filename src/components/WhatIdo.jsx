import React, { useState } from "react";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";

import { Each, Show,truncateText } from "@bluelens/react-utils";
const cardDetails = [
  {
    title: "UI/UX",
    icon: "pen-tool",
    description:
      "Creating user-friendly, visually appealing interfaces that provide seamless and engaging experiences. I conduct user research, wireframing, and prototyping to design intuitive layouts and interactions, ensuring the product is easy to use and meets both user needs and business goals.",
  },
  {
    title: "Frontend/Backend",
    icon: "settings",
    description:
      "I specialize in creating reusable components that ensure consistency, scalability, and maintainability across web applications. By leveraging modern tools like React, I build modular UI elements that can be easily reused across different parts of the application, optimizing development time and enhancing overall code quality. I collaborate with designers and back-end developers to integrate these components seamlessly, ensuring a smooth and responsive user experience across all devices. On the backend, I design and implement efficient server-side logic, database management, and API integrations to ensure seamless communication between systems, delivering secure and scalable solutions.",
  },
  {
    title: "Web Design",
    icon: "layout",
    description:
      "I create visually appealing, user-friendly website designs that reflect the brand's identity and goals. I focus on designing responsive, accessible layouts that provide a seamless experience across all devices. I collaborate with clients and developers to ensure that designs are both functional and aesthetically pleasing, while also optimizing for performance and usability.",
  },
  {
    title: "Graphic Design",
    icon: "compass",
    description:
      "Create visually engaging designs for both digital and print media. I focus on developing brand identities, marketing materials, advertisements, and event graphics that effectively communicate the message. Whether it's designing logos, banners, or promotional materials, I ensure that the designs are impactful, creative, and aligned with the brand’s goals.",
  },
  {
    title: "Web Development",
    icon: "monitor",
    description:
      "I build and maintain dynamic, user-friendly websites and applications using modern web technologies like HTML, CSS, JavaScript, and PHP. I focus on creating responsive and interactive web experiences while ensuring functionality, performance, and cross-browser compatibility. By working closely with clients and teams, I ensure that the end product meets both technical and business requirements.",
  },
  {
    title: "Photography",
    icon: "camera",
    description:
      "Photography is a passion of mine where I enjoy capturing moments, emotions, and the beauty of the world through the lens. Whether it’s shooting portraits, nature, or events, I strive to create compelling images that tell a story and evoke feelings.",
  },
];

const WhatIdo = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full flex flex-col items-center max-w-[1150px] m-auto py-8 px-4 md:px-4 mt-5" id="services">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h2 className="text-[22px] sm:text-[24px] font-medium">What I do</h2>
        <p className="text-[#94A3B8] text-[12px] sm:text-[14px] leading-relaxed">
          I design and develop websites, create engaging graphic designs,
          capture moments through photography, and build user-friendly web
          applications.
        </p>
      </motion.div>

      <div className="grid md:flex md:flex-col lg:grid-cols-2 grid-cols-3 gap-6 w-full z-30">
      <Each
          of={cardDetails}
          render={(card, index) => {
 return <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-5 rounded-[10px] bg-white shadow-lg flex flex-col justify-between gap-2 transition-all duration-300 hover:shadow-xl h-[fit-content] cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="flex flex-row gap-2 items-center text-[18px]">
                <FeatherIcon icon={card.icon} size={24} stroke="#F59E0B" />
                {card.title}
              </span>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                // style={{
                //   maxHeight: expanded[index] ? "500px" : "60px",
                // }}
              >
                <p className="text-[#94A3B8] text-[12px] sm:text-[14px] leading-relaxed mt-2">
                  {expanded[index] ?  card?.description: truncateText(card.description, 120) }
                </p>
              </div>
            </div>
            <button
              className="text-[12px] flex flex-row items-center gap-2 mt-2 transition-all duration-300 hover:text-brand-primary"
              onClick={() => toggleExpand(index)}
            >
              {expanded[index] ? "Show Less" : "Read More"}
              <FeatherIcon
                icon={expanded[index] ? "arrow-up" : "arrow-right"}
                size={12}
              />
            </button>
          </motion.div>
          }} />
      </div>
    </section>
  );
};

export { WhatIdo };
