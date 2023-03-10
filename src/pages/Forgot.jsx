import React from "react";
import Purpose from "../components/Purpose";

const Forgot = () => {
  return (
    <div className="px-2">
      <Purpose
        extra={true}
        place="/sign-in"
        btn_place="/confirm"
        txt="Forgot Password 🔑"
        txt2="Enter your email address to get an OTP code to reset your password."
        btn_txt="Continue"
      />
    </div>
  );
};

export default Forgot;
