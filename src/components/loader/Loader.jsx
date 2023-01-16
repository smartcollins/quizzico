import React from "react";
import logo from "../../images/quizzo-logo.png";
import "./loader.css";

const Loader = () => {

  return (
    <div className="container  h-screen grid grid-rows-1 place-items-center bg-white items-center">
      <div>
        <div className="grid">
          <img src={logo} alt="logo" className="block" />
          <h1 className="text-center text-4xl tracking-wider ">
              Quizzo
            </h1>
        </div>
        <div className="h-40  grid justify-center place-items-end">
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
