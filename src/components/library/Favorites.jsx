import React from "react";
import Header from "./Header";
import { discoverData } from "../../assets/data";
import DiscoverFeature from "../home-screen/DiscoverFeature";

const Favorites = () => {
  return (
    <div>
      <Header caption={"38 favorites"} iconText={"default"} />
      <div className="max-sm:pt-1 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {discoverData.length < 1 ? (
          <p className="text-center text-xl font-semibold max-sm:pt-20 overflow-hidden">
            Search Value Not  Found
          </p>
        ) : (
          discoverData.map((data) => (
            <DiscoverFeature {...data} key={data.id} className="duration-900" />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
