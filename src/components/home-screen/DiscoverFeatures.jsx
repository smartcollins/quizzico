const DiscoverFeatures = ({image, miniImage, caption, timeAgo, played, writer}) => {
    return (
      <div className="my-5">
        <div className="flex gap-4 max-sm:gap-2 rounded-[21px] shadow-md  overflow-hidden">
          <div className="h-40">
            <img src={image} alt="" className="h-full w-full shrink-0"/>
          </div>
          <div className="w-1/2 space-y-3 px-2 py-2">
            <h2 className="text-2xl max-sm:text-xl font-bold capitalize truncate">{caption}</h2>
            <p><span>{timeAgo}</span> <span>{played >=1000 ? (<i>{played/1000}.k</i> ): played} plays</span></p>
            <div className="flex gap-3 capitalize items-center ">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={miniImage} alt="" className="w-full h-full" />
              </div>
              <p className="text-[16px] leading-10 font-bold">{writer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default DiscoverFeatures;