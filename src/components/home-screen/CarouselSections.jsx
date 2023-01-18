import React from 'react'

const CarouselSections = () => {
  return (
    <div className='space-y-4 rounded-3xl overflow-hidden w-30 shadow-xl mx-3'>
        <div className='h-40 w-full bg-black'></div>
        <div className='px-2 space-y-1'>
        <h2 className='word-wrap capitalize  text-[1.26rem] font-[700]'>Get smarter with </h2>
        <h2 className='truncate capitalize text-[1.5rem] font-[700] w-[85%]'> productivity quizzical</h2>
        </div>
        <div className='flex gap-3 capitalize items-center my-10 py-4 px-2'>
            <div className='w-10 h-10 rounded-full bg-red-600'></div>
            <p className='text-xl'>Titus Katamura</p>
        </div>
    </div>
  )
}

export default CarouselSections