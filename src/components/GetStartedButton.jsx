import React from "react";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
  /**
   * !in the i already have account button put link to your created account page
   *
   */
  return (
    <div className="uppercase text-white space-y-4 mt-16 w-full flex items-center flex-col justify-center">
      <Link to={"/occupation"} className="w-[270px] max-sm:w-[90%]">
        <button className=" shadow-sm shadow-[#6949ff] px-3 w-full uppercase text-sm bg-[#6949ff] block py-3 rounded-[30px]  hover:opacity-75 hover:text-[13px]">
          get started
        </button>
      </Link>
      <Link to={"/occupation"} className="w-[270px] max-sm:w-[90%]">
        <button className=" shadow-sm shadow-[#bbb] px-3 w-full uppercase text-sm text-[#6949ff]  py-3 rounded-[30px] block  bg-[#f0edff] hover:opacity-75 hover:text-[13px]">
          i already have an account
        </button>
      </Link>
    </div>
  );
};

export default GetStartedButton;
