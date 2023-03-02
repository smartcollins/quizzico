import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/library/Header";
import Menu from "../components/library/Menu";
import Nav from "../components/library/Nav";

const Library = () => {
  const [active, setActive] = useState("Quizzo");
  const handler = (id) => {
    setActive(id);
  };
  return (
    <main className="w-full flex justify-center">
      <div
        className="w-11/12 max-sm:fixed max-sm:top-0 
    max-sm:w-full max-sm:px-2 bg-white  max-sm:left-0 max-sm:right-0 max-sm:mx-auto"
      >
        <Nav />

        <nav className="grid grid-cols-3 w-full py-2 ">
          <Menu
            title={"my quizzo"}
            id={"Quizzo"}
            handler={() => handler("Quizzo")}
            active={active}
          />
          <Menu
            title={"favorites"}
            id={"Favorites"}
            handler={() => handler("Favorites")}
            active={active}
          />
          <Menu
            title={"collaboration"}
            id={"Collaboration"}
            handler={() => handler("Collaboration")}
            active={active}
          />
        </nav>
        <Header/>
        <Outlet/>
      </div>
    </main>
  );
};

export default Library;
