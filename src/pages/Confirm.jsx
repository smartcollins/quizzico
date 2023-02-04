import React from 'react';
import Purpose from '../components/Purpose';


const Confirm = ()=>{
    return(
        <div className='px-2'>
            <Purpose
                txt="You've got mail 📩"
                extra={true}
                txt2="We have the OTP verification code to your email address. Check your email and enter the code below."
                mail={true}
                mail_txt="Didn't receive email?"
                mail_txt2="You can resend code in"
                btn_txt="Confirm"
            />
        </div>
    )
}


export default Confirm; 