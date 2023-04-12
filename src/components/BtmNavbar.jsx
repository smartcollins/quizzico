import React from 'react';
import logo from '../images/quizzo-logo.png'
import {value} from '../assets/value'
import { House,SquaresFour,Plus,User } from 'phosphor-react';


const BtmNavbar = ()=>{
    const num = value.md
    
    return(
        <div className='flex items-center justify-around fixed bottom-0 w-full bg-white py-4 lg:hidden'>
            <House size={num} weight="fill" />
            <SquaresFour size={num} weight="light" />
            <img className='h-12' src={logo} alt="logo"/>
            <Plus size={num} />
            <User size={num} />
        </div>
    )
}


export default BtmNavbar; 