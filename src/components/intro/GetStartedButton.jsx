import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../assets/data_two";


const GetStartedButton = () => {
  return (
    <div className=" uppercase text-white space-y-4 mt-10 max-sm:mt-15 max-sm:space-y-5 w-full flex items-center flex-col justify-center">
      <Link to={ROUTE_PATHS.OCCUPATION} className="w-270px max-sm:w-11/12">
        <button className=" shadow-sm shadow-purple px-3 w-full uppercase text-sm bg-purple block py-3 rounded-full  hover:opacity-75 hover:bg-white hover:text-purple hover:border-2 border-purple ">
          get started
        </button>
      </Link>
      <Link to={ROUTE_PATHS.SIGNIN} className="w-270px max-sm:w-11/12">
        <button className=" shadow-sm shadow-purple-100 px-3 w-full uppercase text-sm text-purple  py-3 rounded-full block  bg-lwhite hover:opacity-75 border-2 border-purple border-unset">
          i already have an account
        </button>
      </Link>
    </div>
  );
};

export default GetStartedButton;
