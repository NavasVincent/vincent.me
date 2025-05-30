import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import { scrollToSection } from "../Functions/tools";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background when scrolling down
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const socialMedia = [
    {
      icon: "linkedin",
      url: "https://ph.linkedin.com/in/vincent-navas-8690b4125",
    },
    { icon: "instagram", url: "https://www.instagram.com/vhincenavas" },
    { icon: "facebook", url: "https://www.facebook.com/Vhince.Navs/" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-0 left-0 w-full z-50 py-4 shadow-lg transition-all duration-300 ${
            isScrolled
              ? "bg-white text-brand-primary"
              : "bg-transparent text-white"
          }`}
        >
          <div className="flex flex-row justify-between items-center max-w-[1150px] m-auto w-full lg:px-4">
            <h1 className="text-[15px] font-bold">VINCENT.</h1>

            {/* Mobile Menu Button */}
            <button
              className="lg:block hidden  "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FeatherIcon
                icon="menu"
                size={24}
                strokeWidth={2}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="lg:hidden flex flex-row items-center gap-6 text-[13px]">
              {[
                "About Me",
                "Services",
                "Experience",
                "Skills",
                "Contact Me",
              ].map((item, index) => {
                const sectionId = item
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .trim();

                return (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="relative cursor-pointer transition-all duration-300 group"
                    onClick={() => scrollToSection(sectionId)}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                  </motion.span>
                );
              })}
              {socialMedia.map((icon, index) => (
                                 <motion.a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white text-brand-primary cursor-pointer transition"
                  
                  >
                    <FeatherIcon
                      icon={icon.icon}
                      size={18}
                      fill="#fff"
                      stroke="#fd8a42"
                      strokeWidth={1.5}
                    />
                  </motion.a>
                   
                  ))}
           
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-[300px] h-full bg-white text-brand-primary flex flex-col items-center justify-center shadow-lg  "
              >
                <button
                  className="absolute top-5 right-5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FeatherIcon icon="x" size={24} strokeWidth={2} />
                </button>

                {["Home", "About Me", "Experience", "Contact Me"].map(
                  (item, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-lg font-medium py-2 cursor-pointer transition-all"
                    >
                      {item}
                    </motion.span>
                  )
                )} 
                <div className="flex gap-4 mt-6">
                  {socialMedia.map((icon, index) => (
                    <motion.a
                      key={index}
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-brand-primary text-white cursor-pointer transition"
                    >  
             
                        <FeatherIcon
                          icon={icon.icon}
                          size={20}
                          // fill="#fff"
                          stroke="white"
                          strokeWidth={2}
                        />
                      </motion.a> 
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export { Header };
