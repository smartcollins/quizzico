import React, { useState,useEffect } from "react";
import Inputs from "./Inputs";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import { useDispatch} from "react-redux";
import { incrementByamount } from "../redux/bar-features/barSlice";
import { GoogleLogo, AppleLogo } from "phosphor-react";



const Account = () => {
  const [account,setAccount] = useState(false);
  const [signup,setSignup] = useState(false);
  const [home,setHome] = useState(false);

  const dispatch = useDispatch();

  const onContinue = ()=>{
    setAccount(true)
    dispatch(incrementByamount())
  }

  const onSignup = ()=>{
    setSignup(true)
    dispatch(incrementByamount())
  }

  useEffect(() => {
    const timeOut = setTimeout(() => setSignup(true), 3000);
    return () => timeOut;
  }, []);

  return (
    <div className="text-center px-2">
      <div className="">
          <ProgressBar/>
      </div>
      <p className="font-bold text-2xl mb-3">Create an account✏</p>
      <div>
        {
          account?
            <p>Please enter your username, email address,and password. If you forget it, then you have to do forgot password.</p>:
            <div>
              <p>Please complete your profile.</p>
              <p>Don't worry your data will remain private and only you can see it.</p>
            </div>
        }
      </div>
      <div className="text-left">
        {
          account?
          <div>
            <Inputs title="Username" type="text" />
            <Inputs title="Email" type="email" />
            <Inputs title="Password" type="password" />
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="check"/>
              <label htmlFor="check">Remember me</label>
            </div>
            <div className="text-center">
              <p>or</p>
              <button className="flex items-center justify-around mx-auto w-3/4 my-4">
              <GoogleLogo className="" size={30} color="#6949ff" weight="fill" />
                <p className=" w-3/4 text-left font-medium">Continue with Google</p>
              </button>
              <button className="flex items-center mx-auto justify-around w-3/4 my-4" >
                <AppleLogo className="" size={30} color="#000000" weight="fill" />
                <p className=" w-3/4 text-left font-medium">Continue with Apple</p>
              </button>
            </div>
          </div>:
          <div>
            <Inputs title="Full Name" type="text" />
            <Inputs title="Date of Birth" type="date" />
            <Inputs title="Phone Number" type="text" />
            <Inputs title="Country" type="text" option={true} />
            <Inputs title="Age" type="number" option={true} />
          </div>
        }
      </div>
      {account?
        <button onClick={onSignup} className="bg-[#6949ff] text-white w-full py-2 rounded-full my-4">Sign up</button>:
        <button onClick={onContinue} className="bg-[#6949ff] text-white w-full py-2 rounded-full my-4">
          Continue
        </button>
      }
      {
        signup&&
        <Modal
          visible={true}
          desc="Sucessful!"
          txt="Please wait a moment, we are preparing for you..."
      />
      }
    </div>
  );
};

export default Account;
