import React from "react";
import { value } from "../../assets/value";
import { DotsThreeOutline } from "phosphor-react";

const Question = ({ idx, type, img, quiz }) => {
  return (
    <div className="text-xl font-semibold space-y-4">
      <div className="flex items-center justify-between my-4">
        <p>{`${idx}/10`}</p>
        <p>{type}</p>
        <DotsThreeOutline className=" border-2 border-black rounded-full p-1" size={value.md} color="#000000" weight="bold"/>
      </div>
      <img className="w-full rounded-2xl" src={img} alt="description" />
      <p className="text-center w-3/4 mx-auto">{quiz}</p>
    </div>
  );
};

export default Question;
