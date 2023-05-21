import React from "react";
import { X } from "phosphor-react";


const Nav = ({icon1, icon2, icon3}) => {
  return (
    <div className="flex justify-between py-5 px-2">
      <span>
        <X className="text-2xl font-bold cursor-pointer"/>
      </span>
     <div className="flex items-center gap-2">
     <span>{icon1 && icon1}</span>
      <span> {icon2 && icon2}</span>
      <span> {icon3 && icon3}</span>
     </div>
    </div>
  );
};

export default Nav;
