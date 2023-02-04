import React from 'react';
import { User,SpinnerGap,CheckSquare } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';


const Modal = ({visible,desc,txt,btn,btn_txt,duty})=>{
    const navigate =useNavigate();

    return(
        <div>
            {
                visible&&
                <div className='bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 flex items-center justify-center'>
                    <div className='bg-white p-4 rounded-3xl w-4/5'>
                        <div className='bg-[#7355ff] rounded-full p-4 w-fit mx-auto'>
                            {btn?<CheckSquare size={40} color="#ffffff" weight="fill" />:<User size={40} color="#ffffff" weight="fill" />}
                        </div>
                        <p className=' text-center my-4 text-2xl text-[#7355ff] font-bold'>{desc}</p>
                        <p className=' text-center mb-4 mx-auto'>{txt}</p>
                        {btn?
                            <div className='w-full text-center'>
                                <button onClick={()=>{navigate(`${duty}`)}} className='bg-[#6949ff] text-white text-center w-4/5 py-2 rounded-full'>{btn_txt}</button>
                            </div>:
                            <SpinnerGap className='mx-auto animate-spin' size={40} color="#7355ff" weight="duotone" />
                        }
                    </div>
                </div>
            }
        </div>
    )
}


export default Modal; 