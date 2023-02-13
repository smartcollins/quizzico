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
        <Globe size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <TwitchLogo size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <InstagramLogo size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <FacebookLogo size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <PinterestLogo size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <DiscordLogo size={cssValues.iconSize} color="#6949ff" weight="fill" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserAbout;
