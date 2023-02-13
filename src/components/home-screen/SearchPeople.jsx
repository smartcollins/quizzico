import { useState } from "react";
import { ROUTE_PATHS } from "../../assets/data_two";
import { Link } from "react-router-dom";

const SearchPeople = ({ image, title, email, verify }) => {
 const [follow, setFollow] = useState('bg-[#6949ff] text-white');
 const [isFollowing, setIsFollowing] = useState(false)

  const followUser = (e) => {
   
    if (isFollowing) { 
      setFollow('bg-[#6949ff] text-white');
      e.target.textContent = "follow";
      setIsFollowing(!isFollowing);
    } else { 
      setFollow('bg-white text-[#6949ff] border-2 border-[#6949ff]');
      e.target.textContent = "following";
      setIsFollowing(!isFollowing);
    }
     
  };
  
  const PATHNAME = title.replace(" ", "-").toLowerCase();

  return (
    <Link to={ `${ROUTE_PATHS.TOPAUTHORS}/${PATHNAME}`}> 
      <div className="w-full flex items-center capitalize justify-between my-4 py-2 max-sm:gap-2 ">
       <div className="gap-5 flex items-center max-sm:shrink-0">
       <div className="pl- max-sm:pl-0 rounded-full overflow-hidden max-sm:shrink-0">
          <img src={image} alt="" className="w-fit max-sm:w-12 "/>
        </div>
      <div>
      <div className="w-fit max-sm:w-40  grid grid-cols-2 items-center gap-1 justify-center">
          <h2 className="text-xl font-bold max-sm:text-sm">{title}</h2>
          {
             verify && <img src="https://img.icons8.com/fluency/48/null/verified-badge.png" className="w-5 h-5"/>
          }
          
        </div>
        <p className="text-gray-400">{email}</p>
      </div>
       </div>
        <button
          className={follow && `w-content px-3 py-1 rounded-full ${follow}`}
          onClick={followUser}
        >
          Follow
        </button>
      </div>
    </Link>
  );
};
export default SearchPeople;
