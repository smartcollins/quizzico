import { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { cssValues } from "../../assets/staticValues";
import SearchInput from "../home-screen/SearchInput";
import useDebounce from "../../assets/useDebounce";
import { search } from "../../assets/reusedFunc";
import { peopleYouMayKnow } from "../../assets/data";

const InviteList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState([]);
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

    if (selected.findIndex((item) => item.id === newItem.id) === -1) {
      setSelected([...selected, newItem]);
    } else {
      setSelected((oldState) => {
        return oldState.map((items) => {
          return items.id === newItem.id ? { ...items } : { ...items };
        });
      });
    }
    console.log(selected);
  };
  return (
    <div className="xl:w-1/2 mx-auto space-y-8 my-6">
      <div className="flex gap-10 items-center">
        <div>
          <ArrowLeft size={cssValues.iconSize} className="cursor-pointer" />
        </div>
        <div className="text-2xl capitalize font-[600]">
          Invite friends to play
        </div>
      </div>
      <SearchInput setSearchValue={setSearchValue} />
      <div>
        {selected.length > 0 && (
          <span>Friends selected ({selected.length})</span>
        )}
        <div className="flex gap-3">
          {selected.map(({ image }) => (
            <div className="pl- max-sm:pl-0 rounded-full overflow-hidden max-sm:shrink-0 relative">
              <img src={image} alt="" className="w max-sm:w-10 w-12" />
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fred-verified-badge-18763.html&psig=AOvVaw0ResNGZMZnDCLCaRKlUYvN&ust=1684538087276000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPipgsX___4CFQAAAAAdAAAAABAE"
                className="w-5 h-5 absolute z-10 right-0  bottom-0 filter brightness-0 saturate-3"
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
              className="gap-5 flex items-center max-sm:shrink-0"
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
