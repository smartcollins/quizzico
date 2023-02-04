import { CaretRight} from "phosphor-react";

const ShareContacts = ({image, caption, detail}) => {
    return (
      <div className='w-full flex items-center capitalize justify-between border-b-2 border-[#f5f5f5] py-4 max-sm:gap-4'>
          <div className='pl-3 max-sm:pl-0'>
              <img src={image} alt="" />
          </div>
          <div className='space-y-2'>
              <h2 className='text-xl  font-[700]'>{caption}</h2>
              <p className='truncate w-[200px] max-sm:w-w-[190px] font-serif text-[18px] text-[grey]'>{detail}</p>
          </div>
  
          <CaretRight size={24}/>
      </div>
    )
  }
  export default ShareContacts;