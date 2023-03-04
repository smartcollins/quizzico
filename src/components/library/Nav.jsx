import logo from '../../images/quizzo-logo.png'
import {MagnifyingGlass } from 'phosphor-react';

const Nav = () => {
  return (
    <div className='flex items-center justify-between  '>
    <div className='flex items-center w-2/4'>
        <img className='w-1/5 max-sm:w-1/3' src={logo} alt="logo"/>
        <p className=' text-xl font-bold capitalize'>library</p>
    </div>
    <div className='flex items-center justify-between cursor-pointer'>
        <MagnifyingGlass size={25} color="#000000" />
    </div>
</div>
  )
}

export default Nav