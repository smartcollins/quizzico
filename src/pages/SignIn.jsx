import React from 'react';
import Purpose from '../components/Purpose';


const SignIn = ()=>{
    return(
        <div>
            <Purpose
                txt="Hello there 👋"
                pass={true}
                forget={true}
            />
        </div>
    )
}


export default SignIn; 