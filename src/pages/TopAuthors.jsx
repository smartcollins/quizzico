  import React, { useState } from "react";
  import useDebounce from "../assets/useDebounce";
  import { search } from "../assets/reusedFunc";
  import { ArrowLeft, X, MagnifyingGlass } from "phosphor-react";
  import SearchInput from "../components/home-screen/SearchInput";
  import { peopleYouMayKnow } from "../assets/data";
  import SearchPeople from "../components/home-screen/SearchPeople";
  import { cssValues } from "../assets/staticValues";

const TopAuthors = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropAction, setDropAction] = useState(false);

  const debounceSearch = useDebounce(searchValue, 500);
  const keyWord = ["contact", "email", "title"];
  const filteredSearchValue = search(peopleYouMayKnow, keyWord, debounceSearch);

  const handleSearchIcon = () => {
    setSearchValue("");
    setDropAction(!dropAction);
  };


  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <nav className="flex gap-10 items-center justify-between max-sm:fixed max-sm:top-0 
        max-sm:w-full bg-white max-sm:left-0 max-sm:right-0 max-sm:p-3 ">
          <div className="flex gap-10 items-center">
            <div>
              <ArrowLeft size={cssValues.iconSize} className="cursor-pointer" />
            </div>
            <div className="text-2xl capitalize font-[600]">Discover</div>
          </div>
          <div className="cursor-pointer" onClick={handleSearchIcon}>
            {dropAction ? (
              <X size={cssValues.iconSize} />
            ) : (
              <MagnifyingGlass size={cssValues.iconSize} />
            )}
          </div>
        </nav>
        {dropAction && <SearchInput setSearchValue={setSearchValue} />}
        {filteredSearchValue.length < 1 ? (
          <p className="text-center text-xl font-semibold">User Not Found </p>
        ) : (
          filteredSearchValue.map((data) => (
            <SearchPeople {...data} key={data.id} />
          ))
        )}{
          filteredSearchValue.map((data) => (
            <SearchPeople {...data} key={data.id} />
          ))
        }
      </div>
    </section>
  );
};

export default TopAuthors;
