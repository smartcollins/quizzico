import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

const AccountType = ({ mapContent, accountHeader, emoji, pathName, handleProgessWidth }) => {
  /**
   * *created a progress bar for the top section progress
   * todo: i guess you try to install better comment extensioin to write and view my comment, for easy understanding
   * ?this progress bar should be moved to the redux section to be accessible to the create account page. what do you thing?
   * !kkdddkdkdk
   * @returns
   */

  const renderCategories = mapContent.map(({ icon, title, color }) => (
    <li key={title} className="hover:bg-zinc-100 rounded-xl" onClick={handleProgessWidth}>
      <Link to={pathName} className="flex items-center   w-6/6">
        <div className="p-3  rounded-l-xl" style={{ background: color }}>
          <span className="flex items-center justify-center w-10 h-10  bg-[#61616134]  rounded-full">
            {icon}
          </span>
        </div>
        <div className=" h-16 py-3 px-5 rounded-r-xl w-[90%] border-y border-r border-slate-300">
          {" "}
          <h3 className="text-xl py-1 capitalize font-semibold">{title}</h3>
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <h2 className="text-center font text-3xl font-[700] max-sm:text-2xl mt-8 mb-4">
        <span>{accountHeader}</span> <span className="text-2xl">{emoji}</span>
      </h2>
      <p className="text-center font-extralight">
        You can skip if you are not sure.
      </p>
      <ul className="space-y-5 my-10">{renderCategories}</ul>
      <div className="flex justify-center mt-5">
        <Link className=" w-full">
        <button
          className="shadow-sm shadow-[#bbb] px-3  w-full uppercase text-sm
         text-[#6949ff]  py-3 rounded-[30px] block bg-[#f0edff] 
         hover:opacity-75 hover:text-[13px]"
        >
          skip
        </button> </Link>
      </div>
    </>
  );
};

export default AccountType;