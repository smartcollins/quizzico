import React from 'react';
import {ArrowLeft, MagnifyingGlass  } from "phosphor-react";

const FindFriends = () => {
  return (
    <section  className="flex w-full justify-center h-screen pt-5">
    <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
    <div className="flex gap-10 items-center">
      <div>
        <ArrowLeft size={24} />
      </div>
      <div className='text-2xl capitalize font-[600]'>find friends</div>
    </div>
    <form className='flex items-center bg-red-500 w-[70%] max-md:w-full  bg-[#f5f5f5] px-2 rounded-md overflow-hidden'>
    <MagnifyingGlass size={24} weight="light" />
        <input type="text" placeholder='Search email, name, or phone number' className='w-full bg-inherit p-3 outline-none'/>
    </form>

  </div>
  </section>
  )
}

export default FindFriends;