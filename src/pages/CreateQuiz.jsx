import { DotsThreeCircle, X } from "phosphor-react";
import React from "react";
import { useState } from "react";
import AddImage from "../components/AddImage";
import Inputs from "../components/Inputs";
import DropDown from "../components/library/DropDown";

const CreateQuiz = () => {
  const [dropArrow, setDropArrow] = useState(false);
  const handleDropAction = () => setDropArrow(!dropArrow);

  return (
    <div className=" w-full">
      <div className="mx-auto w-3/6 max-sm:w-11/12 space-y-7">
      

        <AddImage header={"Create Quiizo"} icon={<DotsThreeCircle weight="light" className="text-2xl"/>}/>
        <Inputs
          title={"Title"}
          placeholder={"Enter a Collection Title"}
          type={"text"}
        />
        <Inputs
          title={"Description"}
          placeholder={"Enter Description"}
          type={"text"}
        />
        <DropDown
          title={"Select Collection"}
          handleDropAction={handleDropAction}
          dropAction={dropArrow}
          contents={["Education", "Business", "Games", "Entertainment"]}
        />
        <DropDown
          title={"Select Theme"}
          handleDropAction={handleDropAction}
          dropAction={dropArrow}
          contents={["Only Me", "Public"]}
        />
        <DropDown
          title={"Select Collection"}
          handleDropAction={handleDropAction}
          dropAction={dropArrow}
          contents={["Only Me", "Public"]}
        />
        <DropDown
          title={"Visibility of quiz questions"}
          handleDropAction={handleDropAction}
          dropAction={dropArrow}
          contents={["Only Me", "Public"]}
        />
        <Inputs
          title={"Keyword"}
          placeholder={"type keyword and enter"}
          type={"text"}
        />
        <div className="flex gap-x-4 flex-wrap gap-4">
          {[1, 2,3].map((item, index) => {
            return (
              <button
              key={index}
                className="text-center w-40 px-3 font-semibold py-2 rounded-full border-spacing-1
        capitalize text-purple bg-white border-2 border-purple shadow-md flex items-center justify-around"
              >
                <span className="text-sm">save</span>
                <span>
                  <X className="text-purple text-xl font-bold" />
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex justify-center gap-5">
          <button
            className="text-center w-40 px-3 font-semibold py-2 rounded-full border-spacing-1
        capitalize text-purple bg-white border border-purple shadow-md"
          >
            save
          </button>
          <button
            className="text-center w-40 px-3 font-semibold py-2 rounded-full 
        capitalize text-white bg-purple border-2"
          >
            Add question
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
