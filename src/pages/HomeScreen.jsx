import React from "react";
import CarouselSections from "../components/home-screen/CarouselSections";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import HomeCarousel from "../components/home-screen/HomeCarousel";

const HomeScreen = () => {
  return (
    <div>
      <section className="flex w-full justify-center h-screen pt-5">
        <div className="w-1/2  h-full max-md:w-full px-5 py-4">  
        <DiscoverHeader caption={"Discover"}/>
          <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"}/>}
          />
        <DiscoverHeader caption={"Top Collections"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"}/>}
          />
        <DiscoverHeader caption={"Top Pics"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"}/>}
          />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
