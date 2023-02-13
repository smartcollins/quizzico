import { MagnifyingGlass  } from "phosphor-react";
import { cssValues } from "../../assets/staticValues";



const SearchInput = ({setSearchValue}) => {
   
  return (
    <form className={`flex items-center  w-full max-md:w-full  bg-[${cssValues.bgsearch}] px-2 rounded-md overflow-hidden`}>
    <MagnifyingGlass size={cssValues.iconSize} weight="light" />
        <input type="text" placeholder='Search email, name, or phone number' className='w-full bg-inherit p-3 outline-none' onChange={(e)=>setSearchValue(e.target.value)}/>
    </form>
  )
}

export default SearchInput