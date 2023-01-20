import React from 'react';
import Inputs from './Inputs';


const Purpose = ({txt,txt2,input,input2,pass,forget,btn_txt})=>{
    return(
        <div>
            <p>{txt}</p>
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
                    />
                    <div>
                        <input id='check' type="checkbox"/>
                        <label htmlFor='check'>Remember me</label>
                    </div>
                    {forget&&<p>Forgot Password</p>}
                </div>:
                <div>
                    <Inputs
                        title="Email"
                        type="email"
                    />
                </div>
            }
            <button>{btn_txt}</button>
        </div>
    )
}


export default Purpose; 