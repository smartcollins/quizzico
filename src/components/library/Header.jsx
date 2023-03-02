import { ArrowsDownUp } from 'phosphor-react'
import React from 'react'
import { cssValues } from '../../assets/staticValues'

const Header = () => {
  return (
    <div className='capitalize font-semibold flex justify-between w-full my-5'>
        <h2>12 collaborations</h2>
        <h2 className='text-purple flex items-center gap-2 cursor-pointer'>newest <ArrowsDownUp weight="bold" size={cssValues.iconSize}/></h2>
    </div>
  )
}

export default Header