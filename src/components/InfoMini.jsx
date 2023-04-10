import React from 'react';
import infoimg from "../images/info.jpg"
import author from "../images/author.jpg"


const InfoMini = ({ img, title, dur, play, txt }) => {
    return (
        <div className='flex gap-4 border border-gray-300 overflow-clip rounded-lg'>
            <div className=' w-2/5'>
                <img className=' h-full w-full' src={infoimg} alt="" />
            </div>
            <div className=' w-3/5 flex flex-col justify-between my-2 gap-1'>
                <p className=' uppercase font-medium text-lg truncate text-ellipsis'>Re-Train Your Brainn with knowledge</p>
                <div className='flex text-sm font-light items-center justify-between w-4/5'>
                    <p>2 weeks ago</p>
                    <span className=' p-1 rounded-full bg-black/60'></span>
                    <p>2.6k plays</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img className=' h-8' src={author} alt="avatar" />
                    <p className=' capitalize font-normal'>Thad Eddings</p>
                </div>
            </div>
        </div>
    )
}


export default InfoMini;