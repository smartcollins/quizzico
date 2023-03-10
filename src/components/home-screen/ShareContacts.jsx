import { CaretRight} from "phosphor-react";
import { cssValues } from "../../assets/staticValues";

const ShareContacts = ({image, caption, detail}) => {
    return (
      <div className='w-full flex items-center capitalize justify-between  max-sm:gap-4'>
          <div className='pl-3 max-sm:pl-0'>
              <img src={image} alt="" className="w-11 h-11"/>
          </div>
          <div className='space-y-2 text-left'>
              <h2 className='text-xl  font-bold'>{caption}</h2>
              <p className=' font-serif text-lg text-gray-400 truncate max-sm:w-48'>{detail}</p>
          </div>
  
          <CaretRight size={cssValues.iconSize} className="cursor-pointer"/>
      </div>
    )
  }
  export default ShareContacts;