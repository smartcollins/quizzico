import React from 'react';
import { ArrowLeft, CaretRight, MagnifyingGlass  } from "phosphor-react";
import DiscoverHeader from '../components/home-screen/DiscoverHeader';

import bookImg from '../images/book.png';
import featherImg from '../images/feather.png';
import fbImg from '../images/fbook.png';

import followImg1 from '../images/know-1.png';
import followImg2 from '../images/know-2.png';
import followImg3 from '../images/know-3.png';
import followImg4 from '../images/know-4.png';
 
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
    <form className='flex items-center bg-red-500 w-full max-md:w-full  bg-[#f5f5f5] px-2 rounded-md overflow-hidden'>
    <MagnifyingGlass size={24} weight="light" />
        <input type="text" placeholder='Search email, name, or phone number' className='w-full bg-inherit p-3 outline-none'/>
    </form>
    <article className='shadow-md p-4   rounded-md space-y-5'>
    <ShareContacts image={bookImg} caption={"search contact"} detail={"find friends by phone number"}/>
    <ShareContacts image={fbImg} caption={"search contact"} detail={"find contacts via facebook"}/>
    <ShareContacts image={featherImg} caption={"search contact"} detail={"invite friends to play together"}/>
    </article>
    <div>
        <DiscoverHeader caption={"People You may Know"} page={"/"}/>
    </div>
    <div className=''>
        < PeopleYouMayKnow image={followImg1} name={"Daron Kulikoski"}/>
        < PeopleYouMayKnow image={followImg2} name={"Maryland Winkles"}/>
        < PeopleYouMayKnow image={followImg3} name={"Lauralee Quintero"}/>
        < PeopleYouMayKnow image={followImg4} name={"Alfonzo Schuessler"}/>
    </div>
  </div>
  </section>
  )
}

export default FindFriends;


const ShareContacts = ({image, caption, detail}) => {
  return (
    <div className='w-full flex items-center capitalize justify-between border-b-2 border-[#f5f5f5] py-4 max-sm:gap-4'>
        <div className='pl-3 max-sm:pl-0'>
            <img src={image} alt="" />
        </div>
        <div className='space-y-2'>
            <h2 className='text-xl  font-[700]'>{caption}</h2>
            <p className='truncate w-[200px] max-sm:w-w-[190px] font-serif text-[18px] text-[grey]'>{detail}</p>
        </div>

        <CaretRight size={24}/>
    </div>
  )
}

const PeopleYouMayKnow = ({image, name}) => {
  return (
    <div className='w-full flex items-center capitalize justify-between  py-2'>
        <div className='pl-3 max-sm:pl-0 rounded-full overflow-hidden'>
            <img src={image} alt="" />
        </div>
        <div className='space-y-2'>
            <h2 className='text-xl  font-[700]'>{name}</h2>
        </div>
     <button className='bg-[#6949ff] w-content px-3 py-1     rounded-[20px] text-white'>Follow</button>
    </div>
  )
}

