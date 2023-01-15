import {ArrowLeft  } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const ProgressBar = () => {
    
    const [progressWidth, setProgressWidth] = useState(0);
    const progressStyle = () => {
        return {
          width: `${progressWidth}%`,
          transition: "width 600ms",
        };
      };

  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 ">
      <div className="flex gap-10 items-center">
        <div onClick={() => setProgressWidth(0)}>
          <ArrowLeft size={24} />

        </div>
        <div className="h-4 w-1/2 bg-zinc-200 rounded-full max-sm:w-4/6">
          <p
            className="w-0 h-full bg-[#7f65ff] rounded-full"
            style={progressStyle()}
          ></p>
        </div>
      </div>
      <Outlet/>
    </div>
    </section>
  );
};

export default ProgressBar;
