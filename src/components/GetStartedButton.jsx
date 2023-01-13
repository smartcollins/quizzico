import React from 'react'

const GetStartedButton = () => {
  return (
    <div className='uppercase text-white space-y-4 mt-16 w-full flex items-center flex-col justify-center'>
        <button className='px-3 w-[270px] uppercase text-sm bg-[#6949ff] block py-3 rounded-[30px] max-sm:w-[90%]'>get started</button>
        <button className='px-3 w-[270px] uppercase text-sm text-[#6949ff]  py-3 rounded-[30px] block max-sm:w-[90%] bg-[#f0edff]'>i already have an account</button>
    </div>
  )
}

export default GetStartedButton