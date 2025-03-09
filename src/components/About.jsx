import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/me2.png";

const About = () => {
  return (
    <section className="w-full flex lg:flex-col  lg:items-center flex-row gap-6 items-center justify-between max-w-[1150px] mx-auto py-12 px-4">
      
      {/* Image Section */}
      <div className="relative w-[280px] md:w-[300px] flex-shrink-0">
        <motion.img
          src={img2}
          className="w-full rounded-lg"
          alt="Profile"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} // Slight scale-up on hover
        />

        {/* Floating Info Card */}
        <motion.div
          className="absolute bottom-6 right-0 left-[120px] md:left-[50%] z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col gap-1 bg-white shadow-lg rounded-lg p-4 w-[180px] md:w-[200px] text-center leading-none border border-gray-200">
            <h1 className="uppercase text-[14px] font-semibold text-gray-900">
              Software Engineer
            </h1>
            <span className="text-[11px] text-gray-500">
              5+ Years Experience
            </span>
            <span className="text-[9px] text-gray-400">
              (2 Years as Junior Developer)
            </span>
          </div>
        </motion.div>
      </div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col gap-4 text-left max-w-[600px] lg:items-center "
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-[24px] font-semibold text-gray-900">
          I'm a Passionate Software Engineer
        </h2>
        <p className="text-gray-600 text-[14px] leading-relaxed">
          I'm a passionate Software Engineer with a strong foundation in both
          frontend and backend technologies. I specialize in creating dynamic,
          user-friendly applications, utilizing my skills in JavaScript,
          ReactJS, NodeJS, and various other frameworks. Driven by a love for
          problem-solving and innovation, I am dedicated to writing clean,
          efficient code that enhances user experiences and optimizes
          performance.
          <br />
          <br />
          I enjoy working in teams, where we can solve problems and succeed
          together. I’m always looking to grow as a software engineer,
          focusing on delivering quality solutions that truly make an impact.
        </p>

        {/* Hire Me Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 uppercase text-brand-primary border border-solid border-brand-primary px-8 py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 w-[fit-content]"
        >
          Hire me
        </motion.button>
      </motion.div>
    </section>
  );
};

export { About }; 