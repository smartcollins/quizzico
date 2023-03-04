import React, { useState } from "react";
import Button from "./Button";
import Quiz from "./Favorite";

const Quizzo = () => {
  const [handler, setHandler] = useState("quizzo");

  const btnHandler = (targetId) => setHandler(targetId);
  return (
    <div>
     <div className="flex gap-10 max-sm:gap-6 justify-center mt-5 mb-3">
     <Button
        text={"quizzo"}
        handler={handler}
        btnHandler={() => btnHandler("quizzo")}
      />
      <Button
        text={"collections"}
        handler={handler}
        btnHandler={() => btnHandler("collections")}
      />
     </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
    
      </div>
    </div>
  );
};

export default Quizzo;
