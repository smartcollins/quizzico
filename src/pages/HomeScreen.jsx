import React from "react";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import HomeCarousel from "../components/home-screen/HomeCarousel";

const HomeScreen = () => {
  return (
    <div>
      <section className="flex w-full justify-center h-screen pt-5">
        <div className="w-1/2  h-full max-md:w-full px-5 py-4 ">
          <DiscoverHeader />
          <HomeCarousel/>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
