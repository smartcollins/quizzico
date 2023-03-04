import React from 'react'


const DiscoverFeature = ({image, miniImage, caption, timeAgo, played, writer}) => {
    return (
      <div className="my-5 max-sm:my-0">
        <div className="flex gap-4 max-sm:gap-2 rounded-xl shadow-md  overflow-hidden h-40">
          <div className="h-full basis-1/2">
            <img src={image} alt="" className="h-full w-full  shrink-0"/>
          </div>
          <div className="w-auto space-y-3 px-2 pt-3 flex flex-col justify-between max-sm:w-2/4">
            <h2 className="text-xl max-sm:text-sm font-semibold keep-words capitalize max-sm:truncate">{caption}</h2>
            <p className='font-bold  max-sm:text-sm'><span>{timeAgo}</span>   <span>{played >=1000 ? (<small className='text-sm'>{played/1000}.k</small> ): played} <small className='text-sm font-medium'>plays</small></span></p>
            <div className="flex gap-3 capitalize items-center ">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={miniImage} alt="" className="w-full h-full" />
              </div>
              <p className="text-sm leading-10 font-bold">{writer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default DiscoverFeature