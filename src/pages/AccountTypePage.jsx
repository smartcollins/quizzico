import React from "react";
import AccountType from "../components/AccountType";
import { accountCategory } from "../assets/data";
import { useDispatch} from "react-redux";
import { increment } from "../redux/bar-features/barSlice";

const AccountTypePage = () => {
  const dispatch = useDispatch();
  
  const handleProgessWidth =()=>{
    dispatch(increment())
  }
  return (
    <>
      <AccountType
        mapContent={accountCategory}
        accountHeader={"What type of account do you like to create?"}
        emoji={"👨"}
        pathName={'workplace'}
        handleProgessWidth={handleProgessWidth}
      />
    </>
  );
};

export default AccountTypePage;
