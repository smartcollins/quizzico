import React from "react";
import Inputs from "./Inputs";
import ProgressBar from "./ProgressBar";

const Account = () => {
  return (
    <div className="text-center px-2">
      {/* <div>
                <ProgressBar/>
            </div> */}
      <p className="font-bold text-3xl">Create an account✏</p>
      <p>Please complete your profile.</p>
      <p>Don't worry your data will remain private and only you can see it.</p>
      {/* <p>Please enter your username, email address,and password. If you forget it, then you have to do forgot password.</p> */}
      <div className="text-left">
        <Inputs title="Full Name" type="text" />
        <Inputs title="Date of Birth" type="date" />
        <Inputs title="Phone Number" type="text" />
        <Inputs title="Country" type="text" option={true} />
        <Inputs title="Age" type="number" option={true} />
      </div>
      <button className="bg-[#6949ff] text-white w-full py-2 rounded-full my-4">
        Continue
      </button>
    </div>
  );
};

export default Account;
