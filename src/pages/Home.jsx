import React from 'react';
import Authors from '../components/Authors';
import BtmNavbar from '../components/BtmNavbar';
import Navbar from '../components/Navbar';
// import Play from '../components/Play';


const Home = ()=>{
    return(
        <div>
            <Navbar/>
            {/* <Play/> */}
            <Authors/>
            <BtmNavbar/>
        </div>
    )
}


export default Home; 