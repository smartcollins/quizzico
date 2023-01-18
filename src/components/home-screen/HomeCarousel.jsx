import React from 'react'
import Slider from 'react-slick';
import CarouselSections from './CarouselSections';

const HomeCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
  return (
    <div>
        <Slider {...settings}>
            <div>
                <CarouselSections/>
            </div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </Slider>
    </div>
  )
}

export default HomeCarousel