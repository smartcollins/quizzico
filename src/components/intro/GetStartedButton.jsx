import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../assets/data_two";


const GetStartedButton = () => {
  return (
    <div className="uppercase text-white space-y-4 mt-10 max-sm:mt-15 max-sm:space-y-5 w-full flex items-center flex-col justify-center">
      <Link to={ROUTE_PATHS.OCCUPATION} className="w-[270px] max-sm:w-[90%]">
        <button className=" shadow-sm shadow-[#6949ff] px-3 w-full uppercase text-sm bg-[#6949ff] block py-3 rounded-[30px]  hover:opacity-75 hover:bg-white hover:text-[#6949ff] hover:border-2 border-[#6949ff]">
          get started
        </button>
      </Link>
      <Link to={ROUTE_PATHS.SIGNIN} className="w-[270px] max-sm:w-[90%]">
        <button className=" shadow-sm shadow-[#bbb] px-3 w-full uppercase text-sm text-[#6949ff]  py-3 rounded-[30px] block  bg-[#f0edff] hover:opacity-75 border-2 border-[#6949ff]">
          i already have an account
        </button>
      </Link>
    </div>
  );
};

export default GetStartedButton;
