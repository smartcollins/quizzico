import React from "react";
import TopColImages from "../home-screen/TopColImages";
import homeSlide8 from "../../images/sch-four.jpg";
import homeSlide9 from "../../images/sch-10.png";
import homeSlide10 from "../../images/sch-11.png";
import { Plus, } from "phosphor-react";
import { cssValues } from "../../assets/staticValues";


const Collection = () => {
  return (
    <div className="grid grid-cols-3 space-y-3  items-center gap-0 max-sm:grid-cols-2 relative mb-10">
      <TopColImages image={homeSlide8} caption={"Education"} />
      <TopColImages image={homeSlide9} caption={"Business"} />
      <TopColImages image={homeSlide10} caption={"Productivity"} />
      <TopColImages image={homeSlide8} caption={"Education"} />
      <TopColImages image={homeSlide10} caption={"Productivity"} />
      <TopColImages image={homeSlide9} caption={"Finance"} />
      <div className="w-10 h-10 rounded-full bg-purple  flex items-center cursor-pointer fixed  bottom-0 right-16">
        <Plus size={cssValues.iconSize} className="text-white mx-auto my-auto"/>
      </div>
    </div>
  );
};

export default Collection;
