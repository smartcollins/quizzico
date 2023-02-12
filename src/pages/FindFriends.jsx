import React, { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import DiscoverHeader from "../components/home-screen/DiscoverHeader";
import useDebounce from "../assets/useDebounce";
import ShareContacts from "../components/home-screen/ShareContacts";
import bookImg from "../images/book.png";
import featherImg from "../images/feather.png";
import fbImg from "../images/fbook.png";

import { peopleYouMayKnow } from "../assets/data";
import SearchPeople from "../components/home-screen/SearchPeople";
import SearchInput from "../components/home-screen/SearchInput";
import { search } from "../assets/reusedFunc";

const FindFriends = () => {
  const [searchValue, setSearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue, 600);
  const keys = ["contact", "email", "title"];

  const filteredSearchValue = search(peopleYouMayKnow, keys, debounceSearch)

  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <div className="flex gap-10 items-center">
          <div>
            <ArrowLeft size={24} />
          </div>
          <div className="text-2xl capitalize font-[600]">find friends</div>
        </div>
        <SearchInput setSearchValue={setSearchValue} />
        <article className="p-4  rounded-[25px] space-y-5 shadow-lg">
          <div className="border-b-2 border-[#f5f5f5] py-4">
          <ShareContacts
            image={bookImg}
            caption={"search contact"}
            detail={"find friends by phone number"}
          />
          </div>
          
         <div className="border-b-2 border-[#f5f5f5] py-4">
         <ShareContacts
            image={fbImg}
            caption={"search contact"}
            detail={"find contacts via facebook"}
          />
         </div>
         <div className="py-4">
          <ShareContacts
            image={featherImg}
            caption={"search contact"}
            detail={"invite friends to play together"}
          />
         </div>
        </article>
        <div>
          <DiscoverHeader caption={"People You may Know"} page={"/"} />
        </div>
        <div className="">

          {filteredSearchValue.length < 1 ? (
            <p className="text-center text-xl font-[600] ">User Not Found</p>
          ) : (
            filteredSearchValue.map((data) => (
              <SearchPeople {...data} key={data.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FindFriends;
