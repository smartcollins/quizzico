import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderData } from "../assets/data";
import GetStartedButton from "./GetStartedButton";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToScroll: true,
  };

  return (
    <div className="w-full flex justify-center py-3 px-5 flex-col items-center bg-zinc-300 h-full">
      <div className="w-[34%] bg-white max-md:w-full mt-10">
        <Slider {...settings}>
          {sliderData.length > 0 &&
            sliderData.map((slider) => (
              <div key={slider.id} className="overflow-hidden">
                <div className="w-full overflow-hidden">
                  <div className="flex justify-center">
                    {" "}
                    <img src={slider.image} alt="" className="w-[auto]" />
                  </div>
                  <h2 className="first-letter:capitalize text-3xl text-center px-5 font-normal my-10">
                    {slider.caption}
                  </h2>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <GetStartedButton/>
    </div>
  );
};

export default Carousel;
