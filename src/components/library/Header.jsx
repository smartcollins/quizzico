import { ArrowsDownUp } from 'phosphor-react'
import React from 'react'
import { cssValues } from '../../assets/staticValues'

const Header = ({caption, iconText}) => {
  return (
    <div className='capitalize font-semibold flex justify-between w-full my-5 max-sm:mt-30 max-sm:pt-32'>
        <h2>{caption}</h2>
        <h2 className='text-purple flex items-center gap-2 cursor-pointer'>{iconText} <ArrowsDownUp weight="bold" size={cssValues.iconSize}/></h2>
    </div>
  )
}

export default Header