import React from "react";
import user from "../images/user.jpg";
import check from "../images/check.jpg";
import spin from "../images/spinner.jpg";
import { useNavigate } from "react-router-dom";

const Modal = ({ desc, txt, btn, btn_txt, duty }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 flex items-center justify-center">
      <div
        onClick={
          btn
            ? undefined
            : () => {
                navigate(`${duty}`);
              }
        }
        className="bg-white p-4 rounded-3xl w-4/5 md:w-2/4 md:h-[45%] md:flex  md:flex-col md:justify-center"
      >
        <div className="bg-[#7355ff] rounded-2xl p-4 w-fit mx-auto">
          {btn ? <img src={check} alt="user" /> : <img src={user} alt="user" />}
        </div>
        <p className=" text-center my-4 text-2xl text-[#7355ff] font-bold">
          {desc}
        </p>
        <p className=" text-center mb-4 mx-auto font-medium">{txt}</p>
        {btn ? (
          <div className="w-full text-center">
            <button
              onClick={() => {
                navigate(`${duty}`);
              }}
              className="bg-[#6949ff] text-white text-center w-4/5 py-2 rounded-full"
            >
              {btn_txt}
            </button>
          </div>
        ) : (
          <img className="mx-auto animate-spin" src={spin} alt="spinner" />
        )}
      </div>
    </div>
  );
};

export default Modal;
