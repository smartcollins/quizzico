import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSections from "./CarouselSections";

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
        {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplaySpeed: 2500,
            }
          }
    ]
  };
  return (
    <div >
      <Slider {...settings}>
        <div>
          <CarouselSections />
        </div>
        <div>
          <CarouselSections />
        </div>
        <div>
          <CarouselSections />
        </div>
        
      </Slider>
    </div>
  );
};

export default HomeCarousel;
