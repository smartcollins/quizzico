import React from 'react';
import values from '../../assets/values';

const Factor = ({bad})=>{
    // Deep Destructuring without dot notation
    // const {sect_5:{height}} = values
    // const {sect_5:{color:{right,wrong}}} = values

    // Accessing values content with dot notation
    const height = values.sect_5.height
    const {right,wrong} = values.sect_5.color

    console.log(height)
    // const me = 'h-[70vh]'
    // const m = '[50vh]'

    return(
        // <div style={{backgroundColor: bad?wrong:right}} className={`${me} relative`} >
        // <div style={{backgroundColor: bad?wrong:right}} className={`h-${height} relative`} >
        <div style={{backgroundColor: bad?wrong:right}} className={`${height} relative`} >
            <div className='w-2/4 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4 font-medium'>
                <p className='text-white text-lg capitalize'>{bad?'Incorrect!':'correct!'}</p>
                <button style={{color: bad? wrong: right}} className='bg-white py-1 px-4 rounded-2xl'>
                    {bad?'That was close':'+945'}
                </button>
            </div>
        </div>
    )
}

export default Factor; 