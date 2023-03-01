import React from "react";

import { NavLink } from "react-router-dom";

const Menu = ({ title, id, handler, active }) => {
  return (
    <div>
      <h3
        onClick={handler}
        className={
          active === id
            ? "py-3 capitalize cursor-pointer text-center select-none border-b-4 border-purple text-purple text-xl font-semibold"
            : "py-3 capitalize cursor-pointer text-center select-none text-gray-500 text-xl font-semibold"
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default Menu;
