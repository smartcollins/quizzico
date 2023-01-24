import React from 'react';
import logo from '../images/quizzo-logo.png'
import { House,SquaresFour,Plus,User } from 'phosphor-react';


const BtmNavbar = ()=>{
    return(
        <div>
            <House size={16} weight="fill" />
            <SquaresFour size={16} weight="light" />
            <img src={logo} alt="logo"/>
            <Plus size={16} />
            <User size={16} />
        </div>
    )
}


export default BtmNavbar; 