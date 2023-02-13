import { ArrowRight } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { cssValues } from "../../assets/staticValues";

const DiscoverHeader = ({caption, page}) => {
  return (
    <div className="flex w-full  justify-between my-6 px-4 max-sm:px-1">
      <h2 className="font-[700] text-2xl max-sm:text-xl trunate max-sm:w-40 capitalize">{caption}</h2>
      <div className="flex items-center gap-3 cursor-pointer">
        <Link to={page} className="text-blue-600 block text-xl text-clip">View all</ Link>{" "}
        <span>
         
          <ArrowRight color="blue" size={cssValues.iconSize}/>
        </span>
      </div>
    </div>
  );
};

export default DiscoverHeader;
