import React from 'react';
import logo from "../images/quizzo-logo.png"
import author from '../images/author.jpg'
import { value } from '../assets/value'
import { sideNavAry } from '../assets/data'

import { MagnifyingGlass, SignOut } from 'phosphor-react';

// link to the figma design sidebar

// https://www.figma.com/file/cmry3u8WTZy0wiG6RIpd86/Sidebar-Navigate---MingCute-Icon-(Community)?node-id=41-138&t=t9c6u8EBFzTp0GnO-0

const item = sideNavAry.map((item, idx) => <div key={idx} className='flex items-center gap-2'>
    {
        React.createElement(item.icon, {
            color: '#000000', size: 20
        })
    }
    <p>{item.txt}</p>
</div>)


const SideNav = () => {
    return (
        <div className='relative h-screen ml-4'>
            <div className='flex items-center gap-2'>
                <img className=' h-12' src={logo} alt="logo" />
                <p className='text-lg font-medium'>Quizzo</p>
            </div>
            <div className='flex items-center gap-2 bg-[#f2f4f6] my-4 py-2 px-4 rounded-lg'>
                <MagnifyingGlass color='#000000' size={value.md} />
                <input className=' outline-none bg-transparent' type="text" placeholder='Search' />
            </div>
            {/* <div className=' space-y-3 m-4 text-lg capitalize bg-red-500 h-[70%]'> */}
            <div className=' flex flex-col justify-between m-4 text-lg capitalize h-3/5 xl:h-[70%] 2xl:h-4/5'>
                {item}
            </div>
            <div className='flex items-center justify-between w-full absolute bottom-2'>
                <div className='flex items-center gap-2'>
                    <img className=' h-12' src={author} alt="avatar" />
                    <div>
                        <p className=' font-medium'>Richard</p>
                        <p className=' w-11/12 truncate'>9394lay@gmail.com</p>
                    </div>
                </div>
                <SignOut color='#000000' size={value.md} />
            </div>
        </div>
    )
}


export default SideNav; 