
import { Link } from "react-router-dom";

const AccountType = ({ mapContent, accountHeader, emoji, pathName, handleProgessWidth }) => {

  const renderCategories = mapContent.map(({ icon, title, color }) => (
    <li key={title} className="hover:bg-zinc-100 rounded-xl" onClick={handleProgessWidth}>
      <Link to={pathName} className="flex items-center   w-6/6">
        <div className="p-3  rounded-l-xl" style={{ background: color }}>
          <span className="flex items-center justify-center w-10 h-10 rounded-full">
            {icon}
          </span>
        </div>
        <div className=" h-16 py-3 px-5 rounded-r-xl w-11/12 border-y border-r border-slate-300">
          {" "}
          <h3 className="text-xl py-1 capitalize font-semibold">{title}</h3>
        </div>
      </Link>
    </li>
  ));


  return (
    <>
      <h2 className="text-center font text-3xl font-bold max-sm:text-2xl mt-8 mb-4">
        <span>{accountHeader}</span> <span className="text-2xl">{emoji}</span>
      </h2>
      <p className="text-center font-extralight">
        You can skip if you are not sure.
      </p>
      <ul className="space-y-5 my-10 px-5">{renderCategories}</ul>
      <div className="flex justify-center mt-5">
        <Link to={pathName} className=" w-full">
        <button
          className="shadow-sm shadow-dw px-3  w-full uppercase text-sm
         text-purple  py-3 rounded-full block bg-lwhite"
        >
          skip
        </button> 
        </Link>
      </div>
    </>
  );
};

export default AccountType;
