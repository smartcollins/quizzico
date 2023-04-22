import Inputs from "../components/Inputs";
import DropDown from "../components/library/DropDown";
import AddImage from "../components/AddImage";

const NewCollection = () => {

  return (
    <div className=" w-full">
      <div className="mx-auto   w-3/6 max-sm:w-11/12">
        <AddImage header={"create new collection"} />
        <Inputs
          title={"Title"}
          placeholder={"Enter a Collection Title"}
          type={"text"}
        />
        <DropDown
          title={"Visible to"}          
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
