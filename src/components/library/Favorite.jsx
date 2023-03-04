import React from 'react';
import bimage from '../../images/bookbg.jpg';
import bimage2 from '../../images/sch-10.png';
import img1 from '../../images/know-1.png';
import img2 from '../../images/know-2.png';
import img3 from '../../images/know-3.png';
import img4 from '../../images/know-4.png';

const Favorite = ({image, img1, img2, img3, img4, img5, img6}) => {
  return (
    <div className="my-5 max-sm:my-1">
    <div className="flex gap-3 max-sm:gap-1 rounded-xl shadow-md h-40  overflow-hidden">
      <div className="h-full basis-1/2">
        <img src={image} alt="" className="h-full w-full  shrink-0"/>
      </div>
      <div className="w-auto space-y-3 px-2 py-3 flex flex-col justify-between max-sm:w-2/4">
        <h2 className="text-2xl max-sm:text-sm font-semibold keep-words capitalize max-sm:truncat max-sm:overflow-y-scroll">guess the name of the standard question</h2>
        <p className='font-semibold max-sm:text-sm flex items-center text-zinc-500'>5 days ago <span className='w-2 h-2 mx-3 max-sm:m-1 mt-1 rounded-full block bg-zinc-600'></span> 837 plays</p>
        <div className="flex gap-3 capitalize items-center max-sm:overflow-x-scroll">
          <div className="flex overflow-hidden">    
            <img src={img1} alt="" className="w-8 h-8 rounded-full " />
            <img src={img2} alt="" className="-ml-3 rounded-full w-8 h-8 " />
            <img src={img3} alt="" className="w-8 h-8 -ml-3 rounded-full" />
            <img src={img4} alt="" className="w-8 h-8 -ml-3 rounded-full" />
            <img src={img5} alt="" className="w-8 h-8 -ml-3 rounded-full" />
            <img src={img6} alt="" className="w-8 h-8 -ml-3 rounded-full" />
          </div>
          <p className="text-sm  font-bold max-sm:overflow-scroll">10 collaborators</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Favorite