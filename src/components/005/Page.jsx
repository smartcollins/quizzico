import React from 'react';
import Factor from './Factor';
import Question from './Question';
import Answer from './Answer';
import { question } from '../../assets/data';


const Page = ()=>{
    const item = question.map((item,idx)=><Question key={idx} {...item}/>)
    const item2 = question.slice(0,10).map((item,idx)=><Answer key={idx} {...item}/>)
    return(
        <div>
            {/* <Factor/> */}
            {/* <Question/> */}
            {/* {item} */}
            {item2}

        </div>
    )
}


export default Page; 