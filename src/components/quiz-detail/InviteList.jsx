import {useState} from "react";
import { ArrowLeft } from "phosphor-react";
import { cssValues } from "../../assets/staticValues";
import SearchInput from "../home-screen/SearchInput";
import useDebounce from "../../assets/useDebounce";
import { search } from "../../assets/reusedFunc";
import { peopleYouMayKnow } from "../../assets/data";

const InviteList = () => {
    const [searchValue, setSearchValue] = useState("");
    const debounceValue = useDebounce(searchValue);
    const itemKeyWord = ["email", "title", "contact", "id"];
    const filteredSearchValue = search(peopleYouMayKnow, itemKeyWord, debounceValue);
  return (
    <div>
        <div className="flex gap-10 items-center">
            <div>
              <ArrowLeft size={cssValues.iconSize} className="cursor-pointer" />
            </div>
            <div className="text-2xl capitalize font-[600]">Invite friends to play</div>
          </div>
          <SearchInput setSearchValue={setSearchValue}/>
          <div>
            <span>Friends selected (10)</span>
          </div>
          <div>
            {/* choosen ones */}
          </div>
          <div>
          {
            filteredSearchValue.map(({verify})=>(
                <div className="gap-5 flex items-center max-sm:shrink-0">
          <div className="pl- max-sm:pl-0 rounded-full overflow-hidden max-sm:shrink-0">
            <img src={image} alt="" className="w max-sm:w-12 w-16" />
          </div>
          <div>
            <div className="w-fit max-sm:w-40  grid grid-cols-2 items-center gap-1 justify-center">
              <h2 className="text-xl font-bold max-sm:text-sm">{title}</h2>
              {verify && (
                <img
                  src="https://img.icons8.com/fluency/48/null/verified-badge.png"
                  className="w-5 h-5"
                  alt=""
                />
              )}
            </div>
            <p className="text-gray-400">{email}</p>
          </div>
        </div>
            ))
          }
          </div>
    </div>
  )
}

export default InviteList