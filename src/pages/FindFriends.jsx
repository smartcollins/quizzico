import React from 'react';
import {ArrowArcRight, ArrowLeft, CaretRight, MagnifyingGlass  } from "phosphor-react";
import bookImg from '../images/book.png';
import featherImg from '../images/feather.png';
import fbImg from '../images/fbook.png';
import DiscoverHeader from '../components/home-screen/DiscoverHeader';

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
    <article className='shadow-md p-4   rounded-md space-y-5'>
    <ShareContacts image={bookImg} caption={"search contact"} detail={"find friends by phone number"}/>
    <ShareContacts image={fbImg} caption={"search contact"} detail={"find friends by phone number"}/>
    <ShareContacts image={featherImg} caption={"search contact"} detail={"find friends by phone number"}/>
    </article>
    <div>
        <DiscoverHeader caption={"People You may Know"}/>
    </div>
  </div>
  </section>
  )
}

export default FindFriends;


const ShareContacts = ({image, caption, detail}) => {
  return (
    <div className='w-full flex items-center capitalize justify-between border-b-2 border-[#f5f5f5] py-4'>
        <div className='pl-3 max-sm:pl-0'>
            <img src={image} alt="" />
        </div>
        <div className='space-y-2'>
            <h2 className='text-xl  font-[700]'>{caption}</h2>
            <p className='truncate w-40 font-mono text-[18px]'>{detail}</p>
        </div>

        <CaretRight size={24}/>
    </div>
  )
}

