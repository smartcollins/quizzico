import React from "react";
import AccountType from "../components/AccountType";
import { workplaceCategory } from "../assets/data";
import { useDispatch } from "react-redux";
import { incrementByamount } from "../redux/bar-features/barSlice";
import { ROUTE_PATHS } from "../assets/data_two";

const WorkPlace = () => {
  const dispatch = useDispatch();

  const handleProgessWidth = () => {
    dispatch(incrementByamount());
  };

  return (
    <>
      <AccountType
        mapContent={workplaceCategory}
        accountHeader={"Describe a workplace that suits you"}
        emoji={"💼"}
        pathName={ROUTE_PATHS.ACCOUNT}
        handleProgessWidth={handleProgessWidth}
      />
    </>
  );
};

export default WorkPlace;
