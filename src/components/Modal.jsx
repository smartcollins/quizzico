import React from 'react';
import { User,SpinnerGap } from 'phosphor-react';


const Modal = ({visible,desc,txt})=>{
    return(
        <div>
            {
                visible&&
                <div className='bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 flex items-center justify-center'>
                    <div className='bg-white p-4 rounded-3xl w-4/5'>
                        <div className='bg-[#7355ff] rounded-full p-4 w-fit mx-auto'>
                            <User size={40} color="#ffffff" weight="fill" />
                        </div>
                        <p className=' text-center my-4 text-2xl text-[#7355ff] font-bold'>{desc}</p>
                        <p className=' text-center mb-4 mx-auto'>{txt}</p>
                        <SpinnerGap className='mx-auto animate-spin' size={40} color="#7355ff" weight="duotone" />
                    </div>
                </div>
            }
        </div>
    )
}


export default Modal; 