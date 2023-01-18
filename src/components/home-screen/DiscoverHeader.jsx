import { ArrowRight } from "phosphor-react";
import React from "react";

const DiscoverHeader = ({caption}) => {
  return (
    <div className="flex w-full  justify-between my-4">
      <h2 className="font-[700] text-lg">{caption}</h2>
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="text-blue-600 block">View all</span>{" "}
        <span>
          <ArrowRight color="blue" />
        </span>
      </div>
    </div>
  );
};

export default DiscoverHeader;
