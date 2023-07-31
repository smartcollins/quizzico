import React from "react";
import { Link } from "react-router-dom";
import frd from "../images/frd.jpg";
import frd2 from "../images/frd2.jpg";
import frd3 from "../images/frd3.jpg";
import frd4 from "../images/frd4.jpg";
import frd5 from "../images/frd5.jpg";
import frd6 from "../images/frd6.jpg";
import frd7 from "../images/frd7.jpg";
import frd8 from "../images/frd8.jpg";


const Play = () => {
  return (
    // <div className="relative bg-[#785bff] h-[30vh]  rounded-xl px-2 mx-2 md:h-[15vh]">
    <div className="relative bg-[#785bff] h-[30vh]  rounded-xl px-2 mx-2 md:h-[30vh] lg:h-[45vh]">
      <div className="py-2 w-2/3 h-full flex flex-col justify-between bg-red-500">
        {/* <p className="text-white font-semibold text-xl w-full md:text-2xl"> */}
        <p className="text-white font-semibold text-xl w-full md:text-3xl md:w-[55%] lg:text-4xl bg-red-400">
          Play quiz together with your friends now!
        </p>
        <Link to="/find-friends">
          {/* <button className=" text-[#6949ff] bg-white w-3/4 my-4 py-1 rounded-full"> */}
          <button className=" text-[#6949ff] bg-white w-3/4 my-4 py-1 rounded-full md:w-[60%] md:py-2">
            Find Friends
          </button>
        </Link>
      </div>
      <img className="absolute top-2 right-4 lg:h-12" src={frd} alt="icons" />
      <img className="absolute top-4 right-[20%] lg:h-12" src={frd2} alt="icons" />
      <img className="absolute top-14 right-[20%] lg:h-12" src={frd3} alt="icons" />
      <img className="absolute top-10 right-[10%] lg:h-12" src={frd4} alt="icons" />
      <img className="absolute top-20 right-5 lg:h-12" src={frd5} alt="icons" />
      <img className="absolute bottom-8 right-0 lg:h-12" src={frd6} alt="icons" />
      <img className="absolute bottom-4 right-[20%] lg:h-12" src={frd7} alt="icons" />
      <img className="absolute bottom-2 right-[10%] lg:h-12" src={frd8} alt="icons" />
    </div>
  );
};

export default Play;
