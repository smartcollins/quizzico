import { MagnifyingGlass, ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import useDebounce from "../assets/useDebounce";
import SearchInput from "../components/home-screen/SearchInput";
import { discoverData } from "../assets/data";
import { search } from "../assets/reusedFunc";
import DiscoverFeature from "../components/home-screen/DiscoverFeature";
import { cssValues } from "../assets/staticValues";


const DiscoverPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropAction, setDropAction] = useState(false);
  const debounceSearch = useDebounce(searchValue, 500);

 const keyWord = ["writer", "caption"];

 const filteredSearchValue = search(discoverData, keyWord, debounceSearch);
 
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
              <ArrowLeft size={cssValues.iconSize} />
            </div>
            <div className="text-2xl capitalize font-semibold">Discover</div>
          </div>
          <div className="cursor-pointer" onClick={handleSearchIcon}>
            {dropAction? <X size={cssValues.iconSize}/> : <MagnifyingGlass size={cssValues.iconSize} />}
            
          </div>
        </nav>
        {
            dropAction && <SearchInput setSearchValue={setSearchValue} />
        }
        {
           filteredSearchValue.length < 1 ? (<p className='text-center text-xl font-semibold '>Search Value Not Found</p>) :filteredSearchValue.map((data)=>(
                <DiscoverFeature {...data} key={data.id} className="duration-900"/>
            ))
        }
      </div>
    </section>
  );
};

export default DiscoverPage;

