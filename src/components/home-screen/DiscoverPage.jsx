import { MagnifyingGlass, ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import useDebounce from "../../assets/useDebounce";
import SearchInput from "./SearchInput";
import { discoverData } from "../../assets/data";


const DiscoverPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropAction, setDropAction] = useState(false);
  const debounceSearch = useDebounce(searchValue, 1000);

 const keyWord = ["writer", "caption"];

  const search = (data)=>{   
    return data.filter((items)=>
    keyWord.some((key)=> items[key].toLowerCase().includes(debounceSearch.trim().toLowerCase()))
    )
   };
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
          <dov className="cursor-pointer" onClick={handleSearchIcon}>
            {dropAction? <X size={24}/> : <MagnifyingGlass size={24} />}
            
          </dov>
        </nav>
        {
            dropAction && <SearchInput setSearchValue={setSearchValue} />
        }
        {
            search(discoverData).length < 1 ? (<p className='text-center text-xl font-[600] '>Serach Value Not Found</p>) : search(discoverData).map((data)=>(
                <DiscoverFeatures {...data} key={data.id} className="duration-[900ms]"/>
            ))
        }
      </div>
    </section>
  );
};

export default DiscoverPage;

const DiscoverFeatures = ({image, miniImage, caption, timeAgo, played}) => {
  return (
    <div className="my-5">
      <div className="flex gap-4 rounded-[21px] shadow-md  overflow-hidden">
        <div className="h-40">
          <img src={image} alt="" className="h-full w-full shrink-0"/>
        </div>
        <div className="w-1/2 space-y-3 px-2">
          <h2 className="text-2xl max-sm:text-xl font-bold capitalize truncate">{caption}</h2>
          <p><span>{timeAgo}</span> <span>{played >=1000 ? (<i>{played/1000}.k</i> ): played} plays</span></p>
          <div className="flex gap-3 capitalize items-center ">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img src={miniImage} alt="" className="w-full h-full" />
            </div>
            <p className="text-[16px] leading-10 font-bold">Danny alves</p>
          </div>
        </div>
      </div>
    </div>
  );
};
