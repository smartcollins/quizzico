import React from 'react';
import logo from "../images/quizzo-logo.png"
import { MagnifyingGlass, Bell } from 'phosphor-react';


const Navbar = ()=>{
    return(
        <div>
            <div>
                <img src={logo} alt="logo"/>
                <p>Quizzo</p>
            </div>
            <div>
                <MagnifyingGlass size={16} color="#6949ff" />
                <Bell size={16} color="#6949ff" />
            </div>
        </div>
    )
}


export default Navbar; 