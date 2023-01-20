import React from 'react';
import Inputs from './Inputs';
import { ArrowLeft } from 'phosphor-react';


const Purpose = ({txt,txt2,input,input2,pass,forget,btn_txt})=>{
    return(
        <div>
            <ArrowLeft size={30} color="#000000" weight="light" />
            <p className=' font-medium text-lg my-4'>{txt}</p>
            {
                pass?
                <div>
                    <Inputs
                        title="Email"
                        type="email"
                    />
                    <Inputs
                        title="Password"
                        type="password"
                        option={true}
                        pass={true}
                    />
                    <div className='border-b border-gray-400 pb-4 mb-4'>
                        <input id='check' type="checkbox"/>
                        <label className='ml-2' htmlFor='check'>Remember me</label>
                    </div>
                    {forget&&<p className='text-[#694bff] text-center mx-auto font-medium'>Forgot Password?</p>}
                </div>:
                <div>
                    <Inputs
                        title="Email"
                        type="email"
                    />
                </div>
            }
            <div className='w-full text-center fixed bottom-0'>
                <button className='bg-[#6949ff] text-white text-center w-4/5 py-2 rounded-full'>{btn_txt}</button>
            </div>
        </div>
    )
}


export default Purpose; 