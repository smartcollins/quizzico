import React from 'react';
import { Link } from 'react-router-dom';
import {value} from "../../assets/value";
import {category} from "../../assets/data"
import { ArrowLeft, MagnifyingGlass, X } from 'phosphor-react';

const Search = ()=>{
    const sm = value.sm
    const md = value.md
    const items = category.map((item,idx)=>(<div key={idx} className={item.bold?' border-b border-[#757575] flex items-center justify-between my-4 py-2':'flex items-center justify-between my-4'}><p className=' capitalize text-[#757575] font-medium text-lg'>{item.txt}</p><X size={sm} color="#757575" /></div>))
    return(
        <div className='py-4 px-2'>
            <div className='flex gap-4 items-center'>
                <Link to={"/home"}>
                    <ArrowLeft size={md} color="#000000" />
                </Link>
                <div className="flex items-center bg-[#f4f2ff] w-full p-2 rounded-lg border focus-within:border-[#6a4aff] ">
                    <MagnifyingGlass size={md} color="#6a4aff" />
                    <input className=' bg-transparent outline-none ml-2 w-full' placeholder='Category'/>
                    <X size={sm} color="#000000" weight='bold' />
                </div>
            </div>
            <div>
                {items}
            </div>
        </div>
    )
}


export default Search; 