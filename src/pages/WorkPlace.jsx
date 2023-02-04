import React from "react";
import AccountType from "../components/AccountType";
import { workplaceCategory } from "../assets/data";
import { useDispatch } from "react-redux";
import { incrementByamount } from "../redux/bar-features/barSlice";

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
        pathName={"/account"}
        handleProgessWidth={handleProgessWidth}
      />
    </>
  );
};

export default WorkPlace;
