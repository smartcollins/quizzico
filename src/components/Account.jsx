import React from "react";
import Inputs from "./Inputs";
import ProgressBar from "./ProgressBar";
import { useDispatch} from "react-redux";
import { incrementByamount } from "../redux/bar-features/barSlice";

const Account = () => {
  const dispatch = useDispatch();
  
  const handleProgessWidth =()=>{
    dispatch(incrementByamount())
  }

  return (
    <div className="text-center px-2">
      <div className="">
          <ProgressBar/>
      </div>
      <p className="font-bold text-2xl mb-3">Create an account✏</p>
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
      <button onClick={handleProgessWidth} className="bg-[#6949ff] text-white w-full py-2 rounded-full my-4">
        Continue
      </button>
    </div>
  );
};

export default Account;
