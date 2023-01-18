import { CaretDown } from 'phosphor-react';
import React from 'react';


const Inputs = ({title,type,option})=>{
    return(
        <div>
            <p className='font-bold'>{title}</p>
            <input type={type} className=' border-gray-400 border-b-2 outline-none'/>
            {option&&
                <div>
                    <input type={type} className=' border-gray-400 border-b-2 outline-none'/>
                    <CaretDown size={16} color="#7a7a7a" weight="light" />
                </div>}
        </div>
    )
}


export default Inputs; 