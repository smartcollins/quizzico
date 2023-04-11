import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const My = ({item,sm,md}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: md,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: sm,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };
  
  // console.log(settings.responsive[0].settings.slidesToShow)

  return (
    <div>
        <Slider {...settings}>
            {item}
        </Slider>
    </div>
  )
}
export default My;