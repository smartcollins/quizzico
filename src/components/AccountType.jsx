import React, { useState } from "react";
import face from "../images/face.png";
import { ArrowArcLeft, ArrowLeft } from "phosphor-react";

const AccountType = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  /**
   * *this is ajajjajjajajkkakk 
   * todo:jdjdjdjdjdjdjdj
   * ?kimdmmdmdm
   * !kkdddkdkdk
   * @returns 
   */

  const progressStyle = () => {

    return {
      width: `${progressWidth}%`,
      transition: "width 600ms",
    };
  };

  return (
    <section className="flex w-full justify-center h-screen">
      <div className="w-1/2 bg-white border-2 border-red-300 h-full max-md:w-full px-5 py-4 space-y-6">
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
        <h2 className="text-center font text-3xl font-[700] flex items-center">
            What type of account do you like to create?
            <span className="  ">
                <img src={face} alt="" />
            </span>
        </h2>
      </div>
    </section>
  );
};

export default AccountType;
