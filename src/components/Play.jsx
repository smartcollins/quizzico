import React from "react";
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
    <div className="relative bg-[#785bff] h-1/2 rounded-xl px-2 mx-2">
      <div className="py-2 w-2/3 h-full">
        <p className="text-white font-semibold text-xl w-full">
          Play quiz together with your friends now!
        </p>
        <button className=" text-[#6949ff] bg-white w-3/4 my-2 py-1 rounded-full">
          Find Friends
        </button>
      </div>
      {/* <p>🎈👩‍🦰👩🏾🙅🏾‍♀️🙆🏻‍♀️</p> */}
      <img className="absolute top-2 right-4" src={frd} alt="icons" />
      <img className="absolute top-4 right-[20%]" src={frd2} alt="icons" />
      <img className="absolute top-14 right-[20%]" src={frd3} alt="icons" />
      <img className="absolute top-8 right-[10%]" src={frd4} alt="icons" />
      <img className="absolute top-16 right-4" src={frd5} alt="icons" />
      <img className="absolute bottom-8 right-0" src={frd6} alt="icons" />
      <img className="absolute bottom-4 right-[20%]" src={frd7} alt="icons" />
      <img className="absolute bottom-2 right-[10%]" src={frd8} alt="icons" />
    </div>
  );
};

export default Play;
