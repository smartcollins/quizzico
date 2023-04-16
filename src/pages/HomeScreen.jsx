import React from "react";
import CarouselSections from "../components/home-screen/CarouselSections";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import HomeCarousel from "../components/home-screen/HomeCarousel";
// import TopCollection from "../components/home-screen/TopCollection";
import BtmNavbar from "../components/BtmNavbar";
import { homeCarouselImages as Sliders, collections}from "../assets/data";
import { homeMiniImage as miniSliders }from "../assets/data";
import { ROUTE_PATHS } from "../assets/data_two";
import Navbar from '../components/Navbar'
import Play from '../components/Play';
import AuthorSlides from '../components/AuthorSlides'
import My from "../components/My";
import SideNav from "../components/SideNav";



const HomeScreen = () => {
 
  return (
    <div>
      {/* <section className="flex w-full justify-center h-screen pt-5"> */}
      <section className="w-full flex">
        {/* <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-10">   */}
        <div className="w-1/4 hidden lg:block">
          <SideNav/>
        </div>
        <div className=" h-full w-full lg:w-[85%] lg:h-screen lg:overflow-scroll">
        <Navbar/>
       <div className="w-full">
        <Play/>
       <DiscoverHeader caption={"Discover"} page={ROUTE_PATHS.DISCOVER}/>
          <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[0]} miniImg={miniSliders[0]} />}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[1]} miniImg={miniSliders[2]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld" } image={Sliders[4]} miniImg={miniSliders[1]}/>}
          />
       </div>
       <div>
       <div>
       <DiscoverHeader caption={"Top Authors"} page={"/discover"}/>
       <AuthorSlides/>
       </div>
       <DiscoverHeader caption={"Top Collections"} page={ROUTE_PATHS.COLLECTIONS}/>
       {/* <TopCollection/> */}
       <My
        sm={1}
        md={2}
        item={collections.slice(0,5).map((item, idx) => <img key={idx} className="md:object-cover md:w-4/5" src={item.img} alt="collections"/>)}
       />
       </div>
        <div>
        <DiscoverHeader caption={"Trending Quiz "} page={"/"}/>  
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[2]} miniImg={miniSliders[3]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[5]} miniImg={miniSliders[1]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[6]} miniImg={miniSliders[4]}/>}
          />
        </div>
        <div>
        <DiscoverHeader caption={"Top Picks"} page={"/"}/>
        <HomeCarousel 
          slide1={<CarouselSections headerOne={"Get smater with"} headerTwo={"productive quizzico"} title={"Titus Katmura"} image={Sliders[3]} miniImg={miniSliders[0]}/>}
          slide2={<CarouselSections headerOne={"Great Ideas comes"} headerTwo={"from brilliant mindset"} title={"Alfonzo Schuesster"} image={Sliders[7]} miniImg={miniSliders[5]}/>}
          slide3={<CarouselSections headerOne={"up ideas, worth"} headerTwo={"greater height to attain"} title={"John Romauld"} image={Sliders[8]} miniImg={miniSliders[2]}/>}
          />
        </div>
        </div>
      </section>
        <BtmNavbar/>
    </div>
  );
};

export default HomeScreen;