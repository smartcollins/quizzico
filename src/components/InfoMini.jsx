import React from 'react';
// import infoimg from "../images/info.jpg"
// import author from "../images/author.jpg"


const InfoMini = ({ img, title, dur, play, avt, txt }) => {
    return (
        <div className='flex gap-4 border border-gray-300 overflow-clip rounded-lg'>
            <div className=' w-2/5'>
                <img className=' h-full w-full' src={img} alt="" />
            </div>
            <div className=' w-3/5 flex flex-col justify-between my-2 gap-1'>
                <p className=' capitalize font-medium text-lg truncate text-ellipsis'>{title}</p>
                <div className='flex text-sm font-light items-center justify-between w-4/5'>
                    <p>{dur}</p>
                    <span className=' p-1 rounded-full bg-black/60'></span>
                    <p>{play}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img className=' h-8' src={avt} alt="avatar" />
                    <p className=' capitalize font-normal truncate'>{txt}</p>
                </div>
            </div>
        </div>
    )
}


export default InfoMini;