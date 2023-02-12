import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import homeSlide8 from "../../images/sch-four.jpg";
import homeSlide9 from "../../images/sch-10.png";
import homeSlide10 from "../../images/sch-11.png";
import TopCollectionsImages from "./TopColImages";

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
          <TopCollectionsImages image={homeSlide8} caption={"Education"}/>
        </div>
        <div>
          <TopCollectionsImages image={homeSlide9} caption={"Productivity"}/>
        </div>
        <div>
          <TopCollectionsImages image={homeSlide10} caption={"Business"}/>
        </div>
        <div>
          <TopCollectionsImages image={homeSlide10} caption={"Finance"}/>
        </div>
      </Slider>
    </div>
  );
};



export default TopCollection;
