import { MagnifyingGlass  } from "phosphor-react";



const SearchInput = ({setSearchValue}) => {
   
  return (
    <form className='flex items-center bg-red-500 w-full max-md:w-full  bg-[#f5f5f5] px-2 rounded-md overflow-hidden'>
    <MagnifyingGlass size={24} weight="light" />
        <input type="text" placeholder='Search email, name, or phone number' className='w-full bg-inherit p-3 outline-none' onChange={(e)=>setSearchValue(e.target.value)}/>
    </form>
  )
}

export default SearchInput