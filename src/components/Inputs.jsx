import React from 'react';
import { CaretDown,EyeSlash } from 'phosphor-react';


const Inputs = ({title,type,option,pass})=>{
    return(
        <div className='my-4'>
            <p className='font-bold'>{title}</p>
            {option?
                <div className='flex items-center justify-between  border-gray-400 border-b-2'>
                    <input type={type} className=' outline-none w-full'/>
                    {pass?<EyeSlash size={20} color="#6949ff" weight="fill" />:<CaretDown size={20} color="#7a7a7a" weight="light" />}
                </div>:
                <input type={type} className=' border-gray-400 border-b-2 outline-none w-full'/>
            }
        </div>
    )
}


export default Inputs; 