import React from "react";
import TopColImages from "../home-screen/TopColImages";
import homeSlide8 from "../../images/sch-four.jpg";
import homeSlide9 from "../../images/sch-10.png";
import homeSlide10 from "../../images/sch-11.png";

const Collection = () => {
  return (
    <div className="grid grid-cols-3 space-y-3  items-center gap-0 max-sm:grid-cols-2">
      <TopColImages image={homeSlide8} caption={"Education"} />
      <TopColImages image={homeSlide9} caption={"Business"} />
      <TopColImages image={homeSlide10} caption={"Productivity"} />
      <TopColImages image={homeSlide8} caption={"Education"} />
      <TopColImages image={homeSlide10} caption={"Productivity"} />
      <TopColImages image={homeSlide9} caption={"Finance"} />
    </div>
  );
};

export default Collection;
