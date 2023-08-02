import React from 'react';
import img1 from '../../images/q-1.jpg'
import { value } from '../../assets/value';
import { DotsThreeOutline } from 'phosphor-react';

const Question = ()=>{
    return(
        <div className='text-xl font-semibold space-y-4'>
            <div className='flex items-center justify-between my-4'>
                <p>1/10</p>
                <p>Qiuz</p>
                <DotsThreeOutline className=' border-2 border-black rounded-full p-1' size={value.md} color="#000000" weight="bold" />
            </div>
            <img className='w-full rounded-2xl' src={img1} alt="description" />
            <p className='text-center w-3/4 mx-auto'>.... do you get to school? By bus?</p>
        </div>
    )
}


export default Question; 