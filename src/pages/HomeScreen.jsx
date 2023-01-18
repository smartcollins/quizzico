import React from "react";
import CarouselSections from "../components/home-screen/CarouselSections";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import HomeCarousel from "../components/home-screen/HomeCarousel";
import TopCollection from "../components/home-screen/TopCollection";
import { homeCarouselImages as Sliders }from "../assets/data";
import { homeMiniImage as miniSliders }from "../assets/data";

const HomeScreen = () => {
  
  return (
    <div>
      <section className="flex w-full justify-center h-screen pt-5">
        <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-10">  
       <div className="w-full">
       <DiscoverHeader caption={"Discover"}/>
          <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[0]} miniImg={miniSliders[0]} />}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[1]} miniImg={miniSliders[2]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld" } image={Sliders[4]} miniImg={miniSliders[1]}/>}
          />
       </div>
       <div>
       <DiscoverHeader caption={"Top Collections"}/>
       <TopCollection/>

       </div>
        <div>
        <DiscoverHeader caption={"Trending Quiz "}/>  
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[2]} miniImg={miniSliders[3]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[5]} miniImg={miniSliders[1]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[6]} miniImg={miniSliders[4]}/>}
          />
        </div>
        <div>
        <DiscoverHeader caption={"Top Pics"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[3]} miniImg={miniSliders[0]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[7]} miniImg={miniSliders[5]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[8]} miniImg={miniSliders[2]}/>}
          />
        </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
