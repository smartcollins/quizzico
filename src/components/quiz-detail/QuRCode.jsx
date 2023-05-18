import { ArrowLeft, QrCode } from "phosphor-react";
import React from "react";

const QuRCode = () => {
  return (
    <div className="l">
      <div className="flex items-center flex-col">
        <span className="items-center gap-2  w-full hidden max-md:flex">
          <span>
            <ArrowLeft className="cursor-pointer text-xl" />
          </span>
          <span>Generate PIN & QR Code</span>
        </span>
        <div className="h-48 w-10/12"><QrCode className="w-full text-3xl" size={200}/></div>
        <span className="block font-bold text-2xl my-5">
          {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)}
        </span>
        <span>
            Tap code to copy
        </span>
        <div className="text-center opacity-70 font-semibold my-5 w-10/12 max-sm:w-11/12">
          PIN & QRCode are unique and for each player, you can invite your
          friends to play quizzes on one server with the code above
        </div>
      </div>
    </div>
  );
};

export default QuRCode;
