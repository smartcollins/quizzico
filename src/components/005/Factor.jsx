import React from 'react';

const Factor = ({bad})=>{
    return(
        <div style={{backgroundColor: bad?'#f75959':'#25d597'}} className='h-[30vh] relative' >
            <div className='w-2/4 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4 font-medium'>
                <p className='text-white text-lg capitalize'>{bad?'Incorrect!':'correct!'}</p>
                <button style={{color: bad? '#f75959': '#25d597'}} className='bg-white py-1 px-4 rounded-2xl'>
                    {bad?'That was close':'+945'}
                </button>
            </div>
        </div>
    )
}

export default Factor; 