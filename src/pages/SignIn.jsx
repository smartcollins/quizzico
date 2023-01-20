import React from 'react';
import Purpose from '../components/Purpose';


const SignIn = ()=>{
    return(
        <div>
            <Purpose
                txt="Hello there 👋"
                pass={true}
                forget={true}
                btn_txt="SIGN IN"
            />
        </div>
    )
}


export default SignIn; 