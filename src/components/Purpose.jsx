import React from 'react';
import Inputs from './Inputs';
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';


const Purpose = ({place,txt,extra,txt2,pass,forget,mail,mail_txt,mail_txt2,btn_txt,new_pass})=>{
    return(
        <div>
            <Link to={place}>
                <ArrowLeft  size={30} color="#000000" weight="light" />
            </Link>
            <p className=' font-medium text-lg my-4'>{txt}</p>
            {extra&&<p>{txt2}</p>}
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
                new_pass?
                <div>
                    <Inputs
                        title="Create a new password"
                        type="password"
                        option={true}
                        pass={true}
                    />
                    <Inputs
                        title="Confirm a new password"
                        type="password"
                        option={true}
                        pass={true}
                    />
                    <div>
                        <input id='check' type="checkbox"/>
                        <label className='ml-2' htmlFor='check'>Remember me</label>
                    </div>
                </div>:
                <div>
                    {mail?null:<Inputs
                        title="Email"
                        type="email"
                    />}
                </div>
            }
            {mail&&
                <div className='text-center'>
                    <div className='flex items-center justify-between mx-auto w-11/12 my-4'>
                        <button className='border-transparent bg-gray-100 rounded-md w-12 h-12'>4</button>
                        <button className='border-transparent bg-gray-100 rounded-md w-12 h-12'>6</button>
                        <button className='border-transparent bg-gray-100 rounded-md w-12 h-12'>7</button>
                        <button className='border-transparent bg-gray-100 rounded-md w-12 h-12'></button>
                    </div>
                    <p className='my-4 mt-8'>{mail_txt}</p>
                    <p>{mail_txt2} <span className='text-[#694bff]'>55</span> s</p>
                </div>
            }
            <div className='w-full text-center fixed bottom-0'>
                <button className='bg-[#6949ff] text-white text-center w-4/5 py-2 rounded-full'>{btn_txt}</button>
            </div>
        </div>
    )
}


export default Purpose; 