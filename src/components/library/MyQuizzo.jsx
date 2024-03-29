import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Button from "./Button";
import { ROUTE_PATHS } from "../../assets/data_two";

const MyQuizzo = () => {
  const [handler, setHandler] = useState("quizzo");
  const btnHandler = (targetId) => {return setHandler(targetId);}
  

  return (
    <div>
      <div className="flex gap-10 max-sm:gap-6 justify-center mt-5 mb-3">
        <Button
          text={"quizzo"}
          handler={handler}
          btnHandler={() => btnHandler("quizzo")}
          path={ROUTE_PATHS.LIBRARY_QUIZ}
        />
        <Button
          text={"collections"}
          handler={handler}
          btnHandler={() => btnHandler("collections")}
          path={ROUTE_PATHS.LIBRARY_QUIZ_COLLECTION}
        />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MyQuizzo;
