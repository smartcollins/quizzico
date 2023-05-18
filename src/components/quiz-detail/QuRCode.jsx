import  { useState, useCallback, useRef } from "react";
import { ArrowLeft, Download, QrCode, Share } from "phosphor-react";
import QuizBtn from "./QuizBtn";
import { copyText } from "../../assets/reusedFunc";

const QuRCode = () => {
    const [bg, setBg]= useState();
    const btnHandler = useCallback((e)=>setBg(e.target.id),[]);
   const spanElem = useRef(null);
   const handleCopy = ()=>{
    copyText(spanElem?.current.textContent)
   }
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col xl:w-1/2 mt-5 py-2 bg-white shadow-md shadow-zinc-400 xl:rounded-none">
      <span className="hidden xl:block lg:block md:block text-2xl font-serif underline">Generate PIN & QR Code</span>
        <span className="items-center gap-2 w-full hidden max-md:flex">
          <span>
            <ArrowLeft className="cursor-pointer text-xl" />
          </span>
          <span>Generate PIN & QR Code</span>
        </span>
        <div className="h-48 w-10/12"><QrCode className="w-full text-3xl" size={200}/></div>
        <span className="block font-bold text-2xl my-5" ref={spanElem}>
          {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)}
        </span>
        <span onClick={handleCopy}>
            Tap code to copy
        </span>
        <div className="text-center opacity-70 font-semibold my-5 w-10/12 max-sm:w-11/12">
          PIN & QRCode are unique and for each player, you can invite your
          friends to play quizzes on one server with the code above
        </div>
        <div className="flex max-sm:flex-col w-full max-sm:items-center bg-white max-sm:space-y-2 justify-center capitalize font-semibold gap-x-5">
              <QuizBtn handler={bg} btnHandler={btnHandler}><Download weight="fill"  className="mx-1"/> save</QuizBtn>
              <QuizBtn handler={bg} btnHandler={btnHandler}><Share  className="mx-1" weight="fill" /> share</QuizBtn>
            </div>
      </div>
    </div>
  );
};

export default QuRCode;
