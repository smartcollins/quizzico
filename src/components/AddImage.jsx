import React from 'react';
import { useNavigate } from "react-router-dom";
import { Image, X } from "phosphor-react";
import { cssValues } from "../assets/staticValues";


const AddImage = ({header, icon}) => {
    const navigate = useNavigate();

  return (
    <div className='w-full space-y-4'>
        <div className='flex justify-between'>
        <div className="flex items-center gap-2 ">
          <X
            size={cssValues.iconSize}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className=" capitalize text-xl max-sm:text-base">
            {header}
          </span>
        </div>
        {
          icon && <span className='pr-4 cursor-pointer'>{icon}</span>
        }
        </div>
    <div className="w-full  h-48 rounded-xl border-2 border-purple flex items-center justify-center flex-col shadow-md bg-purple-100">
    <input type="file" name="image" id="image" className="hidden" />
    <label htmlFor="image">
      <Image
        size={cssValues.iconSize}
        className="text-purple cursor-pointer"
      />
    </label>
    <span className="capitalize text-purple font-normal text-clip">
      add cover image
    </span>
  </div>
  </div>
  )
}

export default AddImage