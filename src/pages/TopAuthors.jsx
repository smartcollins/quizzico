import React, {useState} from 'react';
import useDebounce from '../assets/useDebounce';
import { search } from '../assets/reusedFunc';
import { ArrowLeft, X, MagnifyingGlass } from 'phosphor-react';
import SearchInput from '../components/home-screen/SearchInput';
import { peopleYouMayKnow } from '../assets/data';
import SearchPeople from '../components/home-screen/SearchPeople';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { EachUser } from '../components/EachUser';

const TopAuthors = () => {
    const [searchValue, setSearchValue] = useState("");
  const [dropAction, setDropAction] = useState(false);
  
  const debounceSearch = useDebounce(searchValue, 500);
  const keyWord = ["contact", "email", "title"];
 const filteredSearchValue = search(peopleYouMayKnow, keyWord, debounceSearch);
 


    const handleSearchIcon = ()=>{
        setSearchValue("")
        setDropAction(!dropAction)
       }
     
  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <nav className="flex gap-10 items-center justify-between">
          <div className="flex gap-10 items-center">
            <div>
              <ArrowLeft size={24} />
            </div>
            <div className="text-2xl capitalize font-[600]">Discover</div>
          </div>
          <div className="cursor-pointer" onClick={handleSearchIcon}>
            {dropAction? <X size={24}/> : <MagnifyingGlass size={24} />}
            
          </div>
        </nav>
        {
            dropAction && <SearchInput setSearchValue={setSearchValue} />
        }
       {filteredSearchValue.length < 1 ? (
            <p className="text-center text-xl font-[600] ">User Not Found </p>
          ) : (
            filteredSearchValue.map((data) => (
              <SearchPeople {...data} key={data.id} />
            ))
          )}
      </div>
    </section>
  )
}

export default TopAuthors