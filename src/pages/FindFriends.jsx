import React, { useState } from 'react';
import { ArrowLeft, CaretRight, MagnifyingGlass  } from "phosphor-react";
import DiscoverHeader from '../components/home-screen/DiscoverHeader';
import useDebounce from '../assets/useDecounce';

import bookImg from '../images/book.png';
import featherImg from '../images/feather.png';
import fbImg from '../images/fbook.png';
import { peopleYouMayKnow } from '../assets/data';
import SearchPeople from '../components/home-screen/SearchPeople';


 
const FindFriends = () => {
  const [searchValue, setSearchValue] = useState('')
  const debounceSearch = useDebounce (searchValue , 1000);
 const keys = ["contact", "email", "title"];

 const search = (data)=>{
  return data.filter((items)=>
  keys.some((key)=> items[key].toLowerCase().includes(debounceSearch))
  )
 }


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
        <input type="text" placeholder='Search email, name, or phone number' className='w-full bg-inherit p-3 outline-none' onChange={(e)=>setSearchValue(e.target.value)}/>
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
      {
        search(peopleYouMayKnow).length < 1 ? (<p className='text-center text-xl font-[600] '>User Not Found</p>): search(peopleYouMayKnow).map((data)=>(
          <SearchPeople {...data} key={data.id}/>
         ))
      }
       
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



