import React from 'react';
import ProgressBar from './ProgressBar';


const Account = ()=>{
    return(
        <div>
            <div>
                <ProgressBar/>
            </div>
            <p>Create an account</p>
            <p>Please complete your profile.</p>
            <p>Don't worry your data will remain private and only you can see it.</p>
            {/* <p>Please enter your username, email address,and password. If you forget it, then you have to do forgot password.</p> */}
            <div>
                <p>Full Name</p>
                <input type="text"/>
                <p>Full Name</p>
                <input type="date"/>
                <p>Full Name</p>
                <input type="number"/>
                <p>Full Name</p>
                <input type="number"/>
            </div>
            <button>Continue</button>
        </div>
    )
}


export default Account; 