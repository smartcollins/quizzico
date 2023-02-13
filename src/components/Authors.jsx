import React from 'react';
import author from '../images/author.jpg'
import author2 from '../images/author2.jpg'
import author3 from '../images/author3.jpg'
import author4 from '../images/author4.jpg'
import { ArrowRight } from 'phosphor-react';


const Authors = ()=>{
    return(
        <div>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>Top Authors</p>
                <div className='flex items-center justify-around md:w-1/5'>
                    <p className=' font-medium text-[#6949ff]'>View all</p>
                    <ArrowRight size={25} color="#6345f0" />
                </div>
            </div>
            <div className='flex items-center justify-between my-4'>
                <div className='flex flex-col items-center md:gap-2'>
                    <img  className=' w-3/4 md:w-full' src={author} alt="user"/>
                    <p className=' md:text-lg md:font-medium'>Rayford</p>
                </div>
                <div className='flex flex-col items-center md:gap-2'>
                    <img  className=' w-3/4 md:w-full' src={author2} alt="user"/>
                    <p className=' md:text-lg md:font-medium'>Willard</p>
                </div>
                <div className='flex flex-col items-center md:gap-2'>
                    <img  className=' w-3/4 md:w-full' src={author3} alt="user"/>
                    <p className=' md:text-lg md:font-medium'>Hannah</p>
                </div>
                <div className='flex flex-col items-center md:gap-2'>
                    <img  className=' w-3/4 md:w-full' src={author4} alt="user"/>
                    <p className=' md:text-lg md:font-medium'>Geoffrey</p>
                </div>
            </div>
        </div>
    )
}


export default Authors; 