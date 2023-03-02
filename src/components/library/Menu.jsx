import React from "react";


const Menu = ({ title, id, handler, active }) => {
  return (
    <div>
      <h3
        onClick={handler}
        className={
          active === id
            ? "py-3 capitalize cursor-pointer text-center select-none border-b-4 border-purple text-purple text-xl font-semibold"
            : "py-3 capitalize cursor-pointer text-center select-none border-b-4 border-gray-100"
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default Menu;
