import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/quizzo-logo.png"
import { MagnifyingGlass, Bell } from 'phosphor-react';


const Navbar = ()=>{
    // #6949ff
    return(
        <div className='flex items-center justify-between lg:hidden'>
            <div className='flex items-center w-2/4'>
                <img className='w-1/5' src={logo} alt="logo"/>
                <p className=' text-xl font-medium'>Quizzo</p>
            </div>
            <div className='flex items-center justify-between w-1/5'>
                <Link to={"/search"}>
                    <MagnifyingGlass size={25} color="#000000" />
                </Link>
                <Bell size={25} color="#000000" />
            </div>
        </div>
    )
}


export default Navbar; 