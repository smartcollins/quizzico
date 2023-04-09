import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { value } from '../assets/value';
import { collections } from '../assets/data';
import { ROUTE_PATHS } from "../assets/data_two";
import { ArrowLeft } from "phosphor-react";


const CollectionInfo = ()=>{
    const size = value.md

    const [info, setInfo] = useState({});
    const { infoId } = useParams();
    
    // console.log(info)
    // console.log(infoId)

    // useEffect(() => {
    //     const item = collections.filter(item => item.id === parseInt(infoId, 10))
    //     setInfo(item[0])
    //   }, [infoId])

    // useEffect(setInfo(collections[Number(infoId)]),[infoId])

    useEffect(()=>{
        const item = collections.find((item) =>  item.id === parseInt(infoId, 10))
        setInfo(item)
    },[infoId]
    )

    return(
        <div>
            <div className='flex items-center gap-4'>
                <Link to={ROUTE_PATHS.COLLECTIONS}>
                    <ArrowLeft size={size} color="#000000" />
                </Link>
                <p className=' text-lg font-medium'>Top Collections</p>
            </div>
            <div>
                <img src={info.img} alt="" />
            </div>
        </div>
    )
}


export default  CollectionInfo;