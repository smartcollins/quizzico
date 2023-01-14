import React from 'react'
import AccountType from '../components/AccountType';
import { accountCategory } from "../assets/data";

const AccountTypePage = () => {
  return (
    <>
    <AccountType mapContent={accountCategory} accountHeader={"What type of account do you like to create?"}/>
    </>
  )
}

export default AccountTypePage