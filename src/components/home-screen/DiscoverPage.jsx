import { MagnifyingGlass, ArrowLeft } from "phosphor-react";
import { useState } from "react";
import useDebounce from "../../assets/useDebounce";
import SearchInput from "./SearchInput";
import { discoverData } from "../../assets/data";

const DiscoverPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue, 1000);
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
          <dov>
            <MagnifyingGlass size={24} />
          </dov>
        </nav>
        <SearchInput setSearchValue={setSearchValue} />
        {
            discoverData.map((data)=>(
                <DiscoverFeatures {...data} key={data.id}/>
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
      <div className="flex gap-4 rounded-md shadow-md">
        <div>
          <img src={image} alt="" className="h-full"/>
        </div>
        <div>
          <h2 className="text-2xl capitalize truncate">{caption}</h2>
          <p><span>{timeAgo}</span> <span>{played >=1000 ? (<i>{played/1000}.k</i> ): played} plays</span></p>
          <div className="flex gap-3 capitalize items-center  px-2">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img src={miniImage} alt="" className="w-full h-full" />
            </div>
            <p className="text-[16px] leading-10 font-light">Danny alves</p>
          </div>
        </div>
      </div>
    </div>
  );
};
