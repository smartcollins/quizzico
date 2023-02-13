import React from "react";
import { authors } from "../assets/data";
import Authors from "./Authors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Author_slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };
  const items = authors.map((item, idx) => <Authors key={idx} {...item} />);
  return (
    <div className="w-full">
        <Slider {...settings}>
            {items}
        </Slider>
    </div>
  );
};

export default Author_slides;
