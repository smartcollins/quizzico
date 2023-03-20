import { useState } from "react";
import { Image, X } from "phosphor-react";
import { cssValues } from "../assets/staticValues";
import Inputs from "../components/Inputs";
import DropDown from "../components/library/DropDown";
import { useNavigate } from "react-router-dom";

const NewCollection = () => {
  const [dropArrow, setDropArrow] = useState(false);

  const handleDropAction = () => setDropArrow(!dropArrow);
  const navigate = useNavigate();

  return (
    <div className=" w-full">
      <div className="mx-auto space-y-4  w-3/6 max-sm:w-11/12">
        <div className="flex items-center gap-2 ">
          <X
            size={cssValues.iconSize}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className=" capitalize text-xl max-sm:text-base">
            create new collection
          </span>
        </div>
        <div className="w-full  h-48 rounded-xl border-2 border-purple flex items-center justify-center flex-col shadow-md bg-purple-100">
          <input type="file" name="image" id="image" className="hidden" />
          <label htmlFor="image">
            <Image
              size={cssValues.iconSize}
              className="text-purple cursor-pointer"
            />
          </label>
          <span className="capitalize text-purple font-normal text-clip">
            add cover image
          </span>
        </div>
        <Inputs
          title={"Title"}
          placeholder={"Enter a Collection Title"}
          type={"text"}
        />
        <DropDown
          title={"Visible to"}
          handleDropAction={handleDropAction}
          dropAction={dropArrow}
          contents={["Only Me", "Public"]}
        />
        <div>
          <button className="w-full bg-purple rounded-full text-xl text-purple-100 flex items-center justify-center capitalize mt-20 py-1">
            create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
