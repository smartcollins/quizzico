import React from 'react';
import logo from "../images/quizzo-logo.png"
import author from '../images/author.jpg'
import { ChartBar, ChatText, CheckSquare, ClipboardText, Gear, Horse, House, MagnifyingGlass, Newspaper, SignOut, Tray } from 'phosphor-react';

// link to the figma design sidebar

// https://www.figma.com/file/cmry3u8WTZy0wiG6RIpd86/Sidebar-Navigate---MingCute-Icon-(Community)?node-id=41-138&t=t9c6u8EBFzTp0GnO-0


const SideNav = ()=>{
    return(
        <div className=' relative z-50 h-screen bg-red-200'>
            <div className='flex items-center gap-2'>
                <img className='h-16' src={logo} alt="logo" />
                <p className='text-lg font-medium'>Quizzo</p>
            </div>
            <div className='flex items-center gap-2 bg-[#f2f4f6] my-4 py-2 px-4 rounded-lg'>
                <MagnifyingGlass color='#000000' size={20} />
                <input className=' outline-none bg-transparent' type="text" placeholder='Search' />
            </div>
            <div className=' space-y-4 mx-4 my-8 text-lg capitalize'>
                <div className='flex items-center gap-2'>
                    <House color='#000000' size={20} />
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-2'>
                    <ClipboardText color='#000000' size={20} />
                    <p>Orders</p>
                </div>
                <div className='flex items-center gap-2'>
                    <CheckSquare color='#000000' size={20} />
                    <p>Schedule</p>
                </div>
                <div className='flex items-center gap-2'>
                    <ChatText color='#000000' size={20} />
                    <p>Messages</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Tray color='#000000' size={20} />
                    <p>inbox</p>
                </div>
                <div className='flex items-center gap-2'>
                    <ChartBar color='#000000' size={20} />
                    <p>analytics</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Newspaper color='#000000' size={20} />
                    <p>news</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Gear color='#000000' size={20} />
                    <p>settings</p>
                </div>
            </div>
            <div className='flex items-center justify-between absolute bottom-0 bg-red-500 w-full'>
                <div className='flex items-center gap-4'>
                    <img className=' h-16' src={author} alt="avatar" />
                    <div>
                        <p className=' font-medium'>Richard</p>
                        <p>9394lay@gmail.com</p>
                    </div>
                </div>
                <SignOut color='#000000' size={20} />
            </div>
        </div>
    )
}


export default SideNav; 