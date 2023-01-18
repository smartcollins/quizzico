import React from 'react'

const CarouselSections = () => {
  return (
    <div className='space-y-4  drop-shadow-[0_35px_35px_rgba(111,111,1,0.25)]'>
        <div className='h-40 w-60 bg-black'></div>
        <h2 className='truncate w-1/2'>Get smarter with productivity quiz</h2>
        <div className='flex gap-3 capitalize items-center'>
            <div className='w-10 h-10 rounded-full bg-red-600'></div>
            <p>Titus Katamura</p>
        </div>
    </div>
  )
}

export default CarouselSections