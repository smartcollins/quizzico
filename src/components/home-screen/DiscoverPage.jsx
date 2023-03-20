import { MagnifyingGlass, ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import useDebounce from "../../assets/useDebounce";
import SearchInput from "./SearchInput";
import { discoverData } from "../../assets/data";
import { search } from "../../assets/reusedFunc";
import { Link } from "react-router-dom";
import DiscoverFeatures from "./DiscoverFeatures";

const DiscoverPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropAction, setDropAction] = useState(false);
  const debounceSearch = useDebounce(searchValue, 500);

  const keyWord = ["writer", "caption"];

  const filteredSearchValue = search(discoverData, keyWord, debounceSearch);

  const handleSearchIcon = () => {
    setSearchValue("");
    setDropAction(!dropAction);
  };

  return (
    <section className="flex w-full justify-center h-screen pt-5">
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <nav className="flex gap-10 items-center justify-between">
          <div className="flex gap-10 items-center">
            <Link to="/home">
              <ArrowLeft size={24} />
            </Link>
            <div className="text-2xl capitalize font-[600]">Discover</div>
          </div>
          <div className="cursor-pointer" onClick={handleSearchIcon}>
            {dropAction ? <X size={24} /> : <MagnifyingGlass size={24} />}
          </div>
        </nav>
        {dropAction && <SearchInput setSearchValue={setSearchValue} />}
        {filteredSearchValue.length < 1 ? (
          <p className="text-center text-xl font-[600] ">
            Search Value Not Found
          </p>
        ) : (
          filteredSearchValue.map((data) => (
            <DiscoverFeatures
              {...data}
              key={data.id}
              className="duration-[900ms]"
            />
          ))
        )}
      </div>
    </section>
  );
};

export default DiscoverPage;

