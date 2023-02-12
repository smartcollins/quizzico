import React from "react";
import DiscoverFeature from "../components/home-screen/DiscoverFeature";
import { discoverData } from "../assets/data";

const UserQuizzo = () => {
  return (
    <div>
      {discoverData.map((data) => (
        <DiscoverFeature {...data} key={data.id}/>
      ))}
    </div>
  );
};

export default UserQuizzo;
