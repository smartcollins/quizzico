import React from 'react';
import { House,SquaresFour,Plus,User } from 'phosphor-react';


const BtmNavbar = ()=>{
    return(
        <div>
            <House size={16} weight="fill" />
            <SquaresFour size={16} weight="light" />
            <Plus size={16} />
            <User size={16} />
        </div>
    )
}


export default BtmNavbar; 