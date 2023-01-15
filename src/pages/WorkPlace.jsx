import React from 'react'
import AccountType from '../components/AccountType';
import { workplaceCategory } from "../assets/data";

const WorkPlace = () => {
  return (
    <>
    <AccountType mapContent={workplaceCategory} accountHeader={"Describe a workplace that suits you"} emoji={"💼"}/>
    </>
  )
}

export default WorkPlace