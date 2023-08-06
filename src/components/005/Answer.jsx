import React from 'react';


const Answer = ({idx,ans})=>{
    const case1 = ''
    return(
        <div className={idx===1?'bg-red-300 grid grid-cols-2 gap-4 text-center items-center justify-center capitalize text-white h-[30vh]':'bg-red-500'}>
            {ans.map((item,id)=><div className='bg-red-400 h-full [&:nth-child(2):bg-blue-500] first:text-blue-500' key={id}>
                {idx===1&&<p className=''>{item}</p>}
            </div>)}
        </div>
    )
}


export default Answer;