import React from "react";
import AccountType from "../components/AccountType";
import { accountCategory } from "../assets/data";
import { useDispatch } from "react-redux";
import { increment } from "../redux/bar-features/barSlice";
import { ROUTE_PATHS } from "../assets/data_two";

const AccountTypePage = () => {
  const dispatch = useDispatch();

  const handleProgessWidth = () => {
    dispatch(increment());
  };

  return (
    <>
      <AccountType
        mapContent={accountCategory}
        accountHeader={"What type of account do you like to create?"}
        emoji={"👨"}
        pathName={ROUTE_PATHS.WORKPLACE}
        handleProgessWidth={handleProgessWidth}
      />
    </>
  );
};

export default AccountTypePage;
