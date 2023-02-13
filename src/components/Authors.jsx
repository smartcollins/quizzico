import React from "react";

const Authors = ({ img, txt }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="avatar" />
      <p className=" font-medium">{txt}</p>
    </div>
  );
};

export default Authors;
