import React from "react";
import { discoverData } from "../../assets/data";
import DiscoverFeature from "../home-screen/DiscoverFeature";

const Quiz = () => {
  return (
    <div>
      {discoverData.length < 1 ? (
        <p className="text-center text-xl font-semibold max-sm:pt-20 overflow-hidden">
          Search Value Not Found
        </p>
      ) : (
        discoverData.map((data) => (
          <DiscoverFeature {...data} key={data.id} className="duration-900" />
        ))
      )}
    </div>
  );
};

export default Quiz;
