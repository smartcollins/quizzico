import React from 'react';


const Answer = ({idx,ans})=>{
    const case1 = 'bg-red-200 grid grid-cols-2 gap-4'
    const case2 = 'bg-red-300 grid grid-cols-1 gap-4'
    // console.log(ans.length)
    console.log(idx)
    console.log(ans)
    return(
        <div style={{textTransform:'capitalize',color:'white',height:'35vh'}} className={idx === 3 || idx === 7 ? case2 : ans.length >= 2 ? case1:'bg-red-500'}>
            {
                ans.length === 0 ?
                <p>null</p>:
                ans.map((item,id)=><div className='h-full w-full bg-orange-500 relative first:rounded-xl first:bg-blue-500 [&:nth-child(2)]:rounded-xl [&:nth-child(2)]:bg-red-500 [&:nth-child(3)]:rounded-xl [&:nth-child(3)]:bg-yellow-500 last:bg-green-500 last:rounded-xl' key={id}>
                <div className='w-full h-full relative'>
                    <p className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-3/4 text-center text-lg font-semibold'>{item}</p>
                </div>
            </div>)
            }
        </div>
    )
}


export default Answer;