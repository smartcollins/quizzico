import React from "react";
import CarouselSections from "../components/home-screen/CarouselSections";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import HomeCarousel from "../components/home-screen/HomeCarousel";
import { homeCarouselImages as Sliders }from "../assets/data";

const HomeScreen = () => {
  return (
    <div>
      <section className="flex w-full justify-center h-screen pt-5">
        <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-10">  
       <div className="w-full">
       <DiscoverHeader caption={"Discover"}/>
          <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[0]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[3]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld" } image={Sliders[8]}/>}
          />
       </div>
        <div>
        <DiscoverHeader caption={"Top Collections"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[9]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[5]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[6]}/>}
          />
        </div>
        <div>
        <DiscoverHeader caption={"Top Pics"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[2]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[7]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[8]}/>}
          />
        </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
