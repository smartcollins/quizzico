import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { value } from "../../assets/value";
import { category, peopleYouMayKnow, collections, discoverData } from "../../assets/data"
import SearchPeople from './SearchPeople';
import DiscoverFeatures from './DiscoverFeatures';
import { ArrowLeft, MagnifyingGlass, X } from 'phosphor-react';

const Search = () => {
    const sm = value.sm
    const md = value.md

    const [cat, setCat] = useState(false);
    const [qz, setQz] = useState(false);
    const [ple, setPle] = useState(false);
    const [lt, setLt] = useState(false);

    const onCat = () => {
        setCat(true)
        setQz(true)
    }
    const onQz = () => {
        setQz(true)
        setPle(false)
        setLt(false)
    }
    const onPle = () => {
        setPle(true)
        setQz(false)
        setLt(false)
    }
    const onLt = () => {
        setLt(true)
        setPle(false)
        setQz(false)
    }

    const item = category.map((item, idx) => (<div key={idx} className={item.bold ? ' border-b border-[#757575] flex items-center justify-between my-4 py-2' : 'flex items-center justify-between my-4'}><p onClick={onCat} className=' capitalize text-[#757575] font-medium text-lg'>{item.txt}</p><X size={sm} color="#757575" /></div>))
    const item2 = peopleYouMayKnow.map((item, idx) => <SearchPeople key={idx} {...item} />)
    // const item3 = collections.map((item,idx)=><div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:items-center md:gap-4"><img key={idx} className="md:object-cover md:w-4/5" src={item.img} alt="collections"/></div>)
    const item3 = collections.map((item, idx) => <img key={idx} className="md:object-cover md:w-4/5" src={item.img} alt="collections" />)
    const item4 = discoverData.map((item,idx)=><DiscoverFeatures key={idx} {...item}/>)



    return (
        <div className='py-4 px-2'>
            <div className='flex gap-4 items-center'>
                <Link to={"/home"}>
                    <ArrowLeft size={md} color="#000000" />
                </Link>
                <div className="flex items-center bg-[#f4f2ff] w-full p-2 rounded-lg border focus-within:border-[#6a4aff] ">
                    <MagnifyingGlass size={md} color="#6a4aff" />
                    <input className=' bg-transparent outline-none ml-2 w-full' placeholder='Category' />
                    <X size={sm} color="#000000" weight='bold' />
                </div>
            </div>
            <div>
                {cat && <div className='flex justify-between items-center gap-4 my-4'>
                    <button onClick={onQz} className={qz ? "bg-[#6949ff] text-white rounded-3xl w-2/4" : " bg-transparent text-[#6949ff] border border-[#6949ff] rounded-3xl w-2/4"}>Quiz</button>
                    <button onClick={onPle} className={ple ? "bg-[#6949ff] text-white rounded-3xl w-2/4" : " bg-transparent text-[#6949ff] border border-[#6949ff] rounded-3xl w-2/4"}>People</button>
                    <button onClick={onLt} className={lt ? "bg-[#6949ff] text-white rounded-3xl w-2/4" : " bg-transparent text-[#6949ff] border border-[#6949ff] rounded-3xl w-2/4"}>Collections</button>
                </div>}
                {!cat && <div>{item}</div>}
                {ple && <div>{item2}</div>}
                {lt && <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:items-center md:gap-4">{item3}</div>}
                {qz && <div>{item4}</div>}
            </div>
        </div>
    )
}


export default Search; 