import { FacebookLogo, Globe, InstagramLogo, PinterestLogo, TwitchLogo, DiscordLogo } from "phosphor-react";
import React from "react";
import { cssValues } from "../assets/staticValues";

const UserAbout = () => {
  return (
    <div className="space-y-5 text-base">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        expedita magnam eius et ipsa error id, iusto totam animi doloremque eum
        cum molestiae voluptates quia, debitis illo est nulla! Temporibus?
      </p>
      <p>
        {" "}
        magnam eius et ipsa error id, iusto totam animi doloremque eum cum
        molestiae voluptates quia, debitis illo est nulla! Temporibus?
      </p>
      <div className="flex shadow-md w-fit space-x-3 py-3 px-2">
        <Globe size={cssValues.iconSize}  weight="fill" className="cursor-pointer text-purple"/>
        <TwitchLogo size={cssValues.iconSize} weight="fill" className="cursor-pointer text-purple"/>
        <InstagramLogo size={cssValues.iconSize} weight="fill" className="cursor-pointer text-purple"/>
        <FacebookLogo size={cssValues.iconSize} weight="fill" className="cursor-pointer text-purple"/>
        <PinterestLogo size={cssValues.iconSize} weight="fill" className="cursor-pointer text-purple"/>
        <DiscordLogo size={cssValues.iconSize} weight="fill" className="cursor-pointer text-purple" />
      </div>
    </div>
  );
};

export default UserAbout;
