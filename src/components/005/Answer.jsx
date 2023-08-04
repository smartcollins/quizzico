import React from 'react';


const Answer = ({ans})=>{
    return(
        <div>
            {ans.map((item,idx)=><p key={idx}>{item}</p>)}
        </div>
    )
}


export default Answer;