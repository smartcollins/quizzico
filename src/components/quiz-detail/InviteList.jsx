import { useState } from "react";
import { ArrowLeft, X } from "phosphor-react";
import { cssValues } from "../../assets/staticValues";
import SearchInput from "../home-screen/SearchInput";
import useDebounce from "../../assets/useDebounce";
import { search } from "../../assets/reusedFunc";
import { peopleYouMayKnow } from "../../assets/data";
import badgeImg from "../../images/red-badge.png";

const InviteList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState([]);
  // const [selected, setSelected] = useState([]);

  const debounceValue = useDebounce(searchValue);
  const itemKeyWord = ["email", "title", "contact", "id"];

  const filteredSearchValue = search(
    peopleYouMayKnow,
    itemKeyWord,
    debounceValue
  );

  const eachSelect = (item) => {
    const newItem = {
      ...item,
      isSelected: true,
    };

    selected.findIndex((item) => item.id === newItem.id) === -1
      ? setSelected([...selected, newItem])
      : setSelected((oldState) => oldState);
  };
  const removeSelected = (id) => {
    const filteredItem = selected.filter((item) => item.id !== id);
    setSelected(filteredItem);
  };

  return (
    <div className="xl:w-1/2 mx-auto space-y-8 my-6">
      <div className="flex gap-10 items-center">
        <div>
          <ArrowLeft size={cssValues.iconSize} className="cursor-pointer" />
        </div>
        <div className="text-2xl capitalize font-semibold">
          Invite friends to play
        </div>
      </div>
      <SearchInput setSearchValue={setSearchValue} />
      <div>
        {selected.length > 0 && (
          <span>Friends selected ({selected.length})</span>
        )}
        <div className="flex gap-3">
          {selected.map(({ image, id }) => (
            <div className="p-1 max-sm:pl-0 rounded-full bg-zinc-300 group max-sm:shrink-0 relative">
              <span
                onClick={() => removeSelected(id)}
                className="bg-zinc-100 hidden group-hover:block cursor-pointer rounded-full absolute z-20 top-0 right-0 "
              >
                {" "}
                <X className="text-sm" />
              </span>
              <img
                src={image}
                alt=""
                className="h-12 max-sm:h-10 max-sm:w-10 w-12 rounded-full"
              />
              <img
                src={badgeImg}
                className="absolute z-20 right-0  bottom-1"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div>{/* choosen ones */}</div>
      <div className="space-y-5">
        {filteredSearchValue.map(
          ({ verify, image, email, isSelected, title, id }) => (
            <div
              className="gap-5 flex items-center max-sm:shrink-0 cursor-pointer shadow-sm shadow-zinc-200"
              onClick={() =>
                eachSelect({ id, verify, image, email, isSelected, title })
              }
            >
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
              {isSelected && (
                <img
                  src="https://img.icons8.com/fluency/48/null/verified-badge.png"
                  className="w-5 h-5"
                  alt=""
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default InviteList;
