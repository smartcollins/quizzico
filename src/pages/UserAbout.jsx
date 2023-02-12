import { FacebookLogo, Globe, InstagramLogo, PinterestLogo, TwitchLogo } from "phosphor-react";
import React from "react";

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
      <div className="flex gap-1 shadow-md w-fit space-x-4 py-3 px-2">
        <Globe size={24} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <TwitchLogo size={24} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <InstagramLogo size={24} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <FacebookLogo size={24} color="#6949ff" weight="fill" className="cursor-pointer"/>
        <PinterestLogo size={24} color="#6949ff" weight="fill" className="cursor-pointer"/>
        
      </div>
    </div>
  );
};

export default UserAbout;
