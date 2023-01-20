import React from 'react';
import Purpose from '../components/Purpose';


const New = ()=>{
    return(
        <div className='px-2'>
            <Purpose
                txt="Create new password 🔐"
                extra={true}
                txt2="Save the new password in asafe place, if you forget it then you have to do a forgot password again."
                new_pass={true}
                btn_txt="Confirm"
            />
        </div>
    )
}


export default New; 