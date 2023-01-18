import { ArrowRight } from "phosphor-react";
import React from "react";

const DiscoverHeader = ({caption}) => {
  return (
    <div className="flex w-full  justify-between my-6 px-4">
      <h2 className="font-[700] text-2xl">{caption}</h2>
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="text-blue-600 block text-xl text-clip">View all</span>{" "}
        <span>
          <ArrowRight color="blue" size={24}/>
        </span>
      </div>
    </div>
  );
};

export default DiscoverHeader;
