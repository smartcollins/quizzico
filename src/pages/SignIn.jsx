import React from "react";
import Purpose from "../components/Purpose";

const SignIn = () => {
  return (
    <div className="px-2">
      <Purpose
        pass={true}
        forget={true}
        place="/"
        btn_place="/home"
        txt="Hello there 👋"
        place2="/forgot"
        btn_txt="SIGN IN"
      />
    </div>
  );
};

export default SignIn;
