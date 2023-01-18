import React from "react";

const CarouselSections = ({ image, miniImg, headerOne, headerTwo, title }) => {
  return (
    <div className="space-y-4 rounded-3xl overflow-hidden w-30 shadow-xl mx-3">
      <div className="h-40 w-full bg-black">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="px-2 space-y-1">
        <h2 className="word-wrap capitalize  text-[1.16rem] font-[700] font-serif">
          {headerOne}{" "}
        </h2>
        <h2 className="truncate capitalize text-[1.4rem] font-[700] w-[85%] font-serif">
          {headerTwo}
        </h2>
      </div>
      <div className="flex gap-3 capitalize items-center my-10 py-4 px-2">
        <div className="w-10 h-10 rounded-full">
          <img src={miniImg} alt="" className="w-full h-full" />
        </div>
        <p className="text-[16px] leading-10 font-light">{title}</p>
      </div>
    </div>
  );
};

export default CarouselSections;
