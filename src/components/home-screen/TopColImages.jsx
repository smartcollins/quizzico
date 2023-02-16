import React from 'react'

const TopColImages = ({ image, caption }) => {
    return (
      <div className="h-40 space-y-4 rounded-3xl overflow-hidden w-30 shadow-xl mx-3">
        <div className="h-full w-full overflow-hidden  relative">
          <img src={image} alt="" className="h-full w-full" />
          <div className="absolute text-white px-5 font-medium text-2xl w-full bg-maxblack py-3 border-unset bottom-0 hover:bg-minblack">
            <h2>{caption}</h2>
          </div>
        </div>
      </div>
    );
  };

export default TopColImages