import { useState } from "react";
import { ROUTE_PATHS } from "../../assets/data_two";
import {useNavigate } from "react-router-dom";

const SearchPeople = ({ image, title, email, verify }) => {
  const [follow, setFollow] = useState("bg-purple text-white");
  const [isFollowing, setIsFollowing] = useState(false);

  const navigate = useNavigate();
  const followUser = (e) => {
    if (e.target.matches("button")) {
      if (isFollowing) {
        setFollow("bg-purple text-white");
        e.target.textContent = "follow";
        setIsFollowing(!isFollowing);
      } else {
        setFollow("bg-white text-purple border-2 border-purple");
        e.target.textContent = "following";
        setIsFollowing(!isFollowing);
      }
    } else {
      navigate(`${ROUTE_PATHS.TOPAUTHORS}/${PATHNAME}`);
    }
  };

  const PATHNAME = title && title.replace(" ", "-").toLowerCase();

  return (
    <div onClick={followUser} className="cursor-pointer">
      <div className="w-full flex items-center capitalize justify-between my-4 py-2 max-sm:gap-2 ">
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
        <button
          className={follow && `w-content px-3 py-1 rounded-full ${follow}`}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export default SearchPeople;
