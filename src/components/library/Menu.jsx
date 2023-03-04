import React from "react";
import { Link } from "react-router-dom";


const Menu = ({ title, id, handler, active }) => {
  return (
    <Link to={id}>
      
      <h3
        onClick={handler}
        className={
          active === id
            ? "py-3 capitalize cursor-pointer text-center select-none border-b-4 border-purple text-purple text-xl font-semibold"
            : "py-3 capitalize cursor-pointer text-center select-none border-b-4 border-gray-100 font-semibold"
        }
      >
        {title}
      </h3>
    </Link>
  );
};

export default Menu;
