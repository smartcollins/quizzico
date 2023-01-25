import React from 'react';
import author from '../images/author.jpg.'
import author2 from '../images/author2.jpg.'
import author3 from '../images/author3.jpg.'
import author4 from '../images/author4.jpg.'
import { ArrowRight } from 'phosphor-react';


const Authors = ()=>{
    return(
        <div>
            <div>
                <p>Top Authors</p>
                <div>
                    <p>View all</p>
                    <ArrowRight size={25} color="#6345f0" />
                </div>
            </div>
            <div>
                <img src={author} alt="user"/>
                <p>Rayford</p>
            </div>
            <div>
                <img src={author2} alt="user"/>
                <p>Willard</p>
            </div>
            <div>
                <img src={author3} alt="user"/>
                <p>Hannah</p>
            </div>
            <div>
                <img src={author4} alt="user"/>
                <p>Geoffrey</p>
            </div>
        </div>
    )
}


export default Authors; 