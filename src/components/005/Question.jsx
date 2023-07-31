import React from 'react';
import { DotsThreeOutline } from 'phosphor-react';
import img1 from '../../images/q-1.jpg'

const Question = ()=>{
    return(
        <div>
            <div>
                <p>1/10</p>
                <p>Qiuz</p>
                <DotsThreeOutline size={32} color="#25d597" weight="bold" />
            </div>
            <img src={img1} alt="description" />
            <p>.... do you get to school? By bus?</p>
        </div>
    )
}


export default Question; 