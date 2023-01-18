import React from 'react';
import Inputs from './Inputs';
import ProgressBar from './ProgressBar';


const Account = ()=>{
    return(
        <div className='text-center px-2'>
            {/* <div>
                <ProgressBar/>
            </div> */}
            <p className='font-bold text-3xl'>Create an account✏</p>
            <p>Please complete your profile.</p>
            <p>Don't worry your data will remain private and only you can see it.</p>
            {/* <p>Please enter your username, email address,and password. If you forget it, then you have to do forgot password.</p> */}
            <div className='text-left'>
                <Inputs/>
                {/* <p className='font-bold'>Full Name</p>
                <input className=' border-gray-400 border-b-2 b-2' type="text"/>
                <p>Full Name</p>
                <input type="date"/>
                <p>Full Name</p>
                <input type="number"/>
                <p>Full Name</p>
                <input type="number"/> */}
            </div>
            <button>Continue</button>
        </div>
    )
}


export default Account; 