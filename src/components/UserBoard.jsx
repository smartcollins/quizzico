import React from 'react'

const UserBoard = ({Quizzo, Plays, Players, num1, num2, num3}) => {
  return (
    <ul className='grid grid-cols-3  border-b-1 border-gray-200 py-3 shadow-sm'>
    <li className='text-center  border-r border-gray-100 my-1'>
      <span className='font-bold '>{num1}</span>
      <p className='text-gray-500 font-serif'>{Quizzo}</p>
    </li>
    <li className='text-center  border-r border-gray-100 my-1'>
      <span className='font-bold'>{num2}</span>
      <p className='text-gray-500 font-serif'>{Plays}</p>
    </li>
    <li className='text-center p-2'>
      <span className='font-bold'>{num3}</span>
      <p className='text-gray-500 font-serif'>{Players}</p>
    </li>
  </ul>
  )
}

export default UserBoard