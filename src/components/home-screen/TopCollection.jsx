import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homeSlide8 from "../../images/sch-four.jpg";
import homeSlide9 from "../../images/sch-10.png";
import homeSlide10 from "../../images/sch-11.png";

const TopCollection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <TopCollectionsImages image={homeSlide8} />
        </div>
        <div>
          <TopCollectionsImages image={homeSlide9} />
        </div>
        <div>
          <TopCollectionsImages image={homeSlide10} />
        </div>
      </Slider>
    </div>
  );
};

const TopCollectionsImages = ({ image }) => {
  return (
    <div className="space-y-4 rounded-3xl overflow-hidden w-30 shadow-xl mx-3">
      <div className="h-40 w-full overflow-hidden  relative">
        <img src={image} alt="" className="h-full w-full" />
        <div className="absolute text-white px-5 font-medium text-2xl w-full bg-[#00000022] py-3 border-unset bottom-0 hover:bg-[#00000099]">
          <h2>Education</h2>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
