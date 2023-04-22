import React from 'react'
import AddImage from '../components/AddImage'
import Inputs from '../components/Inputs'

const CreateQuiz = () => {
  return (
    <div className=" w-full">
    <div className="mx-auto   w-3/6 max-sm:w-11/12">
    <AddImage/>
    <Inputs 
    title={"Title"}
    placeholder={"Enter a Collection Title"}
    type={"text"}
    />
    <Inputs 
    title={"Description"}
    placeholder={"Enter Description"}
    type={"text"}
    />
    <DropDown
     title={"Select Collection"}
    //  handleDropAction={handleDropAction}
    //  dropAction={dropArrow}
     contents={["Only Me", "Public"]}
    />
    <DropDown
     title={"Select Theme"}
    //  handleDropAction={handleDropAction}
    //  dropAction={dropArrow}
     contents={["Only Me", "Public"]}
    />
    <DropDown
     title={"Select Collection"}
    //  handleDropAction={handleDropAction}
    //  dropAction={dropArrow}
     contents={["Only Me", "Public"]}
    />
    <DropDown
     title={"Visibility of quiz questions"}
    //  handleDropAction={handleDropAction}
    //  dropAction={dropArrow}
     contents={["Only Me", "Public"]}
    />
     <Inputs 
    title={"Keyword"}
    placeholder={"Enter Description"}
    type={"text"}
    />
    </div>
    </div>
  )
}

export default CreateQuiz