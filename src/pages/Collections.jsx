import React from 'react';
import { collections } from '../assets/data';
import { value } from '../assets/value';
import { MagnifyingGlass, ArrowLeft } from 'phosphor-react';

const Collection = ()=>{
    
    const items = collections.map((item,idx) => <img key={idx} className="md:object-cover md:w-4/5" src={item.img} alt="collections"/>)
    const size = value.md

    return(
        <div className='p-2'>
            <div className='flex items-center justify-between my-4'>
                <div className='flex items-center gap-4'>
                    <ArrowLeft size={size} color="#000000" />
                    <p className=' text-lg font-medium'>Top Collections</p>
                </div>
                <MagnifyingGlass size={size} color="#000000" />
            </div>
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:items-center md:gap-4">{items}</div>
        </div>
    )
}


export default Collection; 