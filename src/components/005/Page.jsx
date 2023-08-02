import React from 'react';
import Factor from './Factor';
import Question from './Question';
import { question } from '../../assets/data';


const Page = ()=>{
    const item = question.map((item,idx)=><Question key={idx} {...item}/>)
    return(
        <div>
            {/* <Factor/> */}
            {/* <Question/> */}
            {item}
        </div>
    )
}


export default Page; 