import { ArrowLeft, QrCode } from "phosphor-react";
import React from "react";
import QuizBtn from "./QuizBtn";

const QuRCode = () => {
    const [bg, setBg]= useState("");
    const btnHandler = useCallback((e)=>setBg(e.target.id),[])
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
        <div className="flex max-sm:flex-col max-sm:items-center bg-white max-sm:space-y-2 justify-center capitalize font-semibold gap-x-5 max-md:fixed bottom-0 w-full right-0 left-0 z-30">
              <QuizBtn handler={bg} btnHandler={btnHandler}>play solo</QuizBtn>
              <QuizBtn handler={bg} btnHandler={btnHandler}>play with friends</QuizBtn>
            </div>
      </div>
    </div>
  );
};

export default QuRCode;
