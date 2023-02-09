import React from 'react';
import Modal from '../components/Modal';
import Purpose from '../components/Purpose';


const New = ()=>{
    return(
        <div className='px-2'>
            <Purpose
                txt="Create new password 🔐"
                extra={true}
                txt2="Save the new password in asafe place, if you forget it then you have to do a forgot password again."
                new_pass={true}
                btn_txt="Continue"
            />
            <Modal
                desc="Welcome Back!"
                txt="You have successfully reset and created a new password."
                btn={true}
                btn_txt="Go to Home"
                duty="/new"
            />
        </div>
    )
}


export default New; 