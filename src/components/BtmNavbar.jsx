import React from 'react';
import logo from '../images/quizzo-logo.png'
import { House,SquaresFour,Plus,User } from 'phosphor-react';


const BtmNavbar = ()=>{
    return(
        <div className='flex items-center justify-around inset-0 fixed bottom-0'>
            <House size={30} weight="fill" />
            <SquaresFour size={30} weight="light" />
            <img className='h-12' src={logo} alt="logo"/>
            <Plus size={30} />
            <User size={30} />
        </div>
    )
}


export default BtmNavbar; 