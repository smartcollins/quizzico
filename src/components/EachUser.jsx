import React from "react";
import bgImage from "../images/bookbg.jpg"
import { ROUTE_PATHS } from "../assets/data_two";
import { ArrowLeft, CloudArrowUp, DotsThreeCircle } from "phosphor-react";
import { Outlet, useParams, Link } from "react-router-dom";
import { peopleYouMayKnow } from "../assets/data";
import SearchPeople from "./home-screen/SearchPeople";
import UserBoard from "./UserBoard";
import { useState } from "react";
import { details, iconsHover } from "../assets/data_two";
import useShareApi from "../assets/useShareApi";


export const EachUser = () => {
  const { title } = useParams();
  const [handler, setHandler] = useState("quizzo");

  const user = peopleYouMayKnow.find(
    (user) => user.title === title.replace("-", " ")
  );

  const btnHandler = (targetId) => setHandler(targetId);

  const userItems = [
    {
      Quizzo: "Quizico",
      Plays: "Plays",
      Players: "Players",
      num1: "265",
      num2: "35M",
      num3: "274M",
    },
    {
      Quizzo: "Collections",
      Plays: "Follows",
      Players: "Following",
      num1: "49",
      num2: "969.8k",
      num3: "128",
    },
  ];

  const  btnShare = useShareApi({
    title: "Quizzo",
    text: "Join quizzo - the fun, free way to learn",
    url: "https://github.com/Elochukwu3",
  });

  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <nav className="flex gap-10 items-center justify-between
        max-sm:fixed max-sm:top-0 
        max-sm:w-full bg-white max-sm:left-0 max-sm:right-0 max-sm:p-3 max-sm:py-3">
          <Link
            to={ROUTE_PATHS.TOPAUTHORS}
            className={` flex gap-10 items-center${iconsHover}`}
          >
            <ArrowLeft size={24} className="z-10" />
          </Link>

          <div className="cursor-pointer flex space-x-3 ">
            <div className={iconsHover} onClick={btnShare}>
              <CloudArrowUp size={24} />
            </div>
            <div className={iconsHover}>
              <DotsThreeCircle size={24} weight="light" />
            </div>
          </div>
        </nav>
        <article>
          <div className="w-full h-32 rounded-md overflow-hidden">
            <img src={bgImage} alt="" className="w-full h-full" />
          </div>
          <div className="shadow-sm">
            <SearchPeople {...user} key={user.id} />
          </div>
        </article>
        <div className="shadow-md">
          <UserBoard {...userItems[0]} />
          <UserBoard {...userItems[1]} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[...details(title)].map((data) => (
            <EachULink
              {...data}
              key={data.targetId}
              handler={handler}
              btnHandler={() => btnHandler(data.targetId)}
            />
          ))}
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export const EachULink = ({ path, text, targetId, btnHandler, handler }) => {
  return (
    <Link
      onClick={btnHandler}
      to={path}
      className={`text-center w-content px-3 font-semibold py-1 rounded-full
       border-spacing-5 ${
         handler === targetId
           ? "bg-purple text-white"
           : "text-purple bg-white border-2 border-purple"
       }`}
    >
      {text}
    </Link>
  );
};
