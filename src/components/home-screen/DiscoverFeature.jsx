import React from 'react'


const DiscoverFeature = ({image, miniImage, caption, timeAgo, played, writer}) => {
    return (
      <div className="my-5">
        <div className="flex gap-4 max-sm:gap-2 rounded-[21px] shadow-md  overflow-hidden">
          <div className="h-36 flex-1">
            <img src={image} alt="" className="h-full w-full  shrink-"/>
          </div>
          <div className="w-auto space-y-3 px-2 py-2 flex flex-col justify-between max-sm:w-2/4">
            <h2 className="text-2xl max-sm:text-sm font-bold keep-words capitalize max-sm:truncate">{caption}</h2>
            <p className='font-bold  max-sm:text-sm'><span>{timeAgo}</span>   <span>{played >=1000 ? (<small className='text-sm'>{played/1000}.k</small> ): played} <small className='text-sm font-medium'>plays</small></span></p>
            <div className="flex gap-3 capitalize items-center ">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={miniImage} alt="" className="w-full h-full" />
              </div>
              <p className="text-[15px] leading-10 font-bold">{writer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default DiscoverFeature