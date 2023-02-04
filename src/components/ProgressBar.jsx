import {ArrowLeft  } from "phosphor-react";
import React, { useState } from "react";

import {  useSelector } from "react-redux";
import {barSelection} from "../redux/bar-features/barSlice";

import { Link, Outlet, useNavigate } from "react-router-dom";

const ProgressBar = () => {
const progressWidth = useSelector(barSelection);   
  const navigate = useNavigate();
  console.log(progressWidth);

    const progressStyle = () => {
        return {
          width: `${progressWidth}%`,
          transition: "width 600ms",
        };
      };

  return (
    // <section className="flex w-full justify-center h-screen pt-5">
    <section className="flex w-full justify-center h-full">
      {/* <div className="w-1/2  h-full max-md:w-full px-5 py-4 "> */}
      <div className="w-1/2  h-full max-md:w-full py-4 ">
      <div className="flex gap-10 items-center">
        <div onClick={() => navigate(-1)}>
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
