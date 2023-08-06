import React from 'react';


const Answer = ({idx,ans})=>{
    const case1 = 'capitalize text-white bg-red-200 h-[30vh] grid grid-cols-2 place-items-center gap-4'
    // console.log(ans.length)
    return(
        <div className={ans.length >= 2 ?case1:'bg-red-500'}>
            {ans.map((item,id)=><div className='h-full w-full bg-orange-500 relative first:rounder first:bg-blue-500 [&:nth-child(2)]:bg-red-500 [&:nth-child(3)]:bg-yellow-500 last:bg-green-500' key={id}>
                <div className='w-full h-full relative'>
                    <p className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-2/4 text-center bg-red-500'>{item}</p>
                </div>
            </div>)}
        </div>
    )
}


export default Answer;