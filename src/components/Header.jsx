import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
const Header = () => {
  return (
    <header className=" text-white py-4 text-center  absolute top-0 w-full z-10">
      <div className="flex flex-row justify-between items-center max-w-[1150px] m-auto w-full">
        <h1 className="text-[15px] font-bold">VINCENT.</h1>
        <div className="flex flex-row items-center gap-3 text-[13px]">
          {["Home", "About Me", "Experince", "Contact Me"].map(
            (item, index) => {
              return (
                <span className="" key={index}>
                  {item}{" "}
                </span>
              );
            }
          )}

          <span className="p-2 rounded-full bg-base-white">
            <FeatherIcon
              icon={"linkedin"}
              size={18}
              //  onClick={}
              fill="#fff"
              stroke="#000"
              strokeWidth={1}
            />
          </span>
          <span className="p-2 rounded-full bg-base-white">
            <FeatherIcon
              icon={"instagram"}
              size={18}
              //  onClick={}
              fill="#fff"
              stroke="#000"
              strokeWidth={1}
            />
          </span>
          <span className="p-2 rounded-full bg-base-white">
            <FeatherIcon
              icon={"facebook"}
              size={18}
              //  onClick={}
              fill="#fff"
              stroke="#000"
              strokeWidth={1}
            />
          </span>
        </div>
      </div>
    </header>
  );
};
export { Header };
