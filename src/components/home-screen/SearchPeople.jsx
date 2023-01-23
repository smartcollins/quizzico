const SearchPeople = ({ image, title, id }) => {
  const followUser = (e) => {
    e.target.classList.toggle("bg-purple-400");
    e.target.classList.contains("bg-purple-400")
      ? (e.target.textContent = "following")
      : (e.target.textContent = "follow");
  };
  return (
    <div>
      <div className="w-full flex items-center capitalize justify-between  py-2">
        <div className="pl-3 max-sm:pl-0 rounded-full overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl  font-[700]">{title}</h2>
        </div>
        <button
          className="bg-[#6949ff] w-content px-3 py-1 rounded-[20px] text-white"
          onClick={followUser}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export default SearchPeople;
