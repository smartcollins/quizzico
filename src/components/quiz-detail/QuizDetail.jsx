import { DotsThreeCircle, EyeSlash, Pen, Star } from "phosphor-react";
import React from "react";
import Nav from "./Nav";
import img1 from "../../images/sch-10.png";
import UserBoard from "../UserBoard"
import SearchPeople from "../home-screen/SearchPeople";

const QuizDetails = ({description}) => {
    const details = [
        {
            Quizzo: "Questions",
            Plays: "Played",
            Players: "Favorited",
            quest4 :" shared",
            num1: "265",
            num2: "35M",
            num3: "274M",
            num4: "274M",
          },
    ]
  return (
    <div className="flex justify-center">
      <div className="md:w-9/12 xl:w-1/2 w-11/12">
        <Nav
          icon2={
            <DotsThreeCircle className="text-2xl font-bold cursor-pointer" />
          }
          icon1={<Star className="text-2xl font-bold cursor-pointer"/>}
        />
        <div>
            <img src={img1} alt="" className="w-full h-60 object-fit rounded-xl"/>
            <span className="text-xl font-semibold px-2 py-2 block">Having fun and always smile</span>
        </div>
        <div className="shadow-sm shadow-zinc-200">
            <UserBoard {...details[0]}/>
        </div>
        <SearchPeople image={img1} email={"city@gmail.com"} title={"john doe"} verify={true}/>
        <div>
            <span className="text-2xl font-semibold block py-4">Description</span>
            <div>
            {
                !description ? (
                    <>
                    <p className="text-lg text-zinc-700 py-2 font-semibold">Invite your friends to play quiz together</p>
                    <div className="text-center py-5 bg-zinc-200 w-10/12 text-sm space-y-2 mx-auto max-md:w-11/12 rounded-xl">
                        <EyeSlash className="mx-auto text-2xl" />
                        Question content is hidden by the creator
                    </div>
                    </>
                ) : <>
                    <p>This ia a bac</p>
                </>
            }
            </div>
        </div>
      </div>
    </div>
  );
};
export default QuizDetails;
