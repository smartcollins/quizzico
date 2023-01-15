import React from "react";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
  return (
    <div className="uppercase text-white space-y-4 mt-16 w-full flex items-center flex-col justify-center">
     <Link to={'/occupation'}>
     <button className=" shadow-sm shadow-[#6949ff] px-3 w-[270px] uppercase text-sm bg-[#6949ff] block py-3 rounded-[30px] max-sm:w-[90%] hover:opacity-75 hover:text-[13px]">
        get started
      </button>
     </Link>
      <button className=" shadow-sm shadow-[#bbb] px-3 w-[270px] uppercase text-sm text-[#6949ff]  py-3 rounded-[30px] block max-sm:w-[90%] bg-[#f0edff] hover:opacity-75 hover:text-[13px]">
        i already have an account
      </button>
    </div>
  );
};

export default GetStartedButton;
