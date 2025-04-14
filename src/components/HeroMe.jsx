import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/Rectangle-bg.png";
import img1 from "../assets/me1.png";
import FeatherIcon from "feather-icons-react";
import { handleCalendlyPopup } from "../Functions/tools";
import MyCv from "../assets/Vincent_Navas_CV.pdf";
const HeroMe = () => {
  const fullText = "VINCENT BOTALON NAVAS";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [cursorColor, setCursorColor] = useState("text-white");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const delayBeforeDelete = 5000;
    const delayBeforeTyping = 3000;

    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        if (isDeleting) {
          setCursorColor("text-white");
          setTimeout(() => {
            setCursorColor("text-white");
            setIsDeleting(false);
          }, delayBeforeTyping);
        } else {
          setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [index, isDeleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = MyCv; // Update with the correct path
    link.download = "Vincent-Navas-CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="bg-no-repeat bg-cover bg-center w-full h-[703px] flex items-center px-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex justify-between max-w-[1150px] w-full m-auto items-center text-center lg:text-center lg:flex-col-reverse pt-[66px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left lg:text-center"
        >
          <motion.h2
            className="text-[40px] font-bold text-black uppercase lg:text-[30px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hey! I'M
          </motion.h2>
          <motion.h2
            className="text-[40px] font-bold text-white uppercase lg:text-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {displayText}
            <span
              className={`${cursorColor} ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
          </motion.h2>
          <motion.h4
            className="text-[20px] font-light text-white lg:text-[14px]"
            initial={{ opacity: 0, letterSpacing: "-5px" }}
            animate={{ opacity: 1, letterSpacing: "0px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            Crafting Seamless Experiences through Code and Creativity.
          </motion.h4>
          <div className="flex flex-row gap-3 mt-6 lg:justify-center justify-start md:flex-col md:px-[100px]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="uppercase bg-orange-600 text-white px-8 py-2 rounded transition-all duration-300 hover:bg-brand-primary"
              onClick={handleCalendlyPopup}
            >
              Book a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="uppercase border-2 border-solid border-white text-white px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-brand-primary"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-row gap-2 uppercase border-2 border-solid border-white text-white px-4 py-2 rounded transition-all duration-300 justify-center"
              onClick={downloadCV}
            >
              <FeatherIcon
                icon={"download"}
                size={16}
                // fill="#fff"
                stroke="#fff"
                strokeWidth={2}
                className=""
              />
              Download CV
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          src={img1}
          className="w-[250px] z-50 md:w-[200px]"
          width="300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut", delay: 0.3 },
            x: { duration: 0.8, ease: "easeOut", delay: 0.3 },
            y: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </section>
  );
};

export { HeroMe };
