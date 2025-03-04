import React, { useState, useEffect } from "react";
 const Footer = ()=> {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">
        &copy; 2023 Vincent Navas. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="https://linkedin.com/in/vincent" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/vincent" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
  }
export { Footer };
  