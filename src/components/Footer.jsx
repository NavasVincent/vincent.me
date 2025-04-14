import React from "react";
import { motion } from "framer-motion"; 
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6 w-full text-center mt-8">
        <p className="text-sm">
          &copy; 2024 Vincent Navas. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-6">
          <motion.a
            href="https://ph.linkedin.com/in/vincent-navas-8690b4125"
            className="hover:underline transition transform hover:scale-110"
            whileHover={{ scale: 1.1, color: "#0077b5" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/NavasVincent"
            className="hover:underline transition transform hover:scale-110"
            whileHover={{ scale: 1.1, color: "#333" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>
        </div>
      </footer>
    </>
  );
};

export { Footer };
