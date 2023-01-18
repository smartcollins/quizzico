import { CaretDown } from 'phosphor-react';
import React from 'react';


const Inputs = ({title,type,option})=>{
    return(
        <div className='my-4'>
            <p className='font-bold'>{title}</p>
            {option?
                <div className='flex items-center justify-between  border-gray-400 border-b-2'>
                    <input type={type} className=' outline-none w-full'/>
                    <CaretDown size={20} color="#7a7a7a" weight="light" />
                </div>:
                <input type={type} className=' border-gray-400 border-b-2 outline-none w-full'/>
            }
        </div>
    )
}


export default Inputs; 