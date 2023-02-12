import React from 'react';
import { ArrowLeft, X, MagnifyingGlass } from 'phosphor-react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { peopleYouMayKnow } from '../assets/data';
import SearchPeople from './home-screen/SearchPeople';
import UserBoard from './UserBoard';
import { useState } from 'react';

export const EachUser = () => {
  const {title} = useParams()
  const user = peopleYouMayKnow.find(user => user.title === title.replace("-", " "))

  const userItems = [{Quizzo :"Quizico", Plays: "Plays", Players: "Players", num1:"265", num2:"35M", num3:"274M"},
  {Quizzo :"Collections", Plays: "Follows", Players: "Following", num1:"49", num2:"969.8k", num3:"128"}, ]
    
    return (
    <section className="flex w-full justify-center h-screen pt-5" >
      <div className="w-1/2  h-full max-md:w-full px-5 py-4 space-y-5">
        <nav className="flex gap-10 items-center justify-between">
          <div className="flex gap-10 items-center">
            
              <ArrowLeft size={24} />

          </div>
          <div className="cursor-pointer flex space-x-3 ">
          <X size={24} className='rounded-full w-5 h-5 hover:bg-slate-400'  />
         <MagnifyingGlass size={24} /> 
          </div>
        </nav>
        <article>
            <div className='w-full bg-slate-500 h-32 rounded-md'>
                <img src="" alt="" />
            </div>
            <div className='shadow-sm'>
            <SearchPeople {...user} key={user.id}/>
            </div>
        </article>
        <div className='shadow-md'>
          <UserBoard {...userItems[0]}/>
          <UserBoard {...userItems[1]}/>
        </div>
        <div className='grid grid-cols-3 gap-3'>
        <EachULink path={`/topAuthor/${title}/userQuizzo`} text={" Quizzico"} targetId={"quiz"}/>
        <EachULink path={`/topAuthor/${title}/userCollection`} text={"Collections"} targetId={"collection"}/>
        <EachULink path={`/topAuthor/${title}/userAbout`} text={"About"} targetId={"about"}/>
        </div>
       <div className='w-full'>
       <Outlet/>
       </div>
      </div>
    </section>
  )
}

export const EachULink = ({path, text, targetId}) => {
  const [handler, setHandler] = useState(null);
  const [btn, setBtn] = useState(null);
 
  const btnHandler = (e)=>{
  setHandler(handler === e.target.id ? null : e.target.id)
  setBtn(handler === e.target.id ? null : 'g-[#6949ff]')
  console.log(btn);
  }
  // }bg-[#6949ff] text-white
  return (
    <Link
    onClick={btnHandler}
    id = {targetId}
    to={path} 
      className={ `text-center w-content px-3 font-semibold py-1 rounded-[20px] 
       border-spacing-5 ${handler === targetId ?'bg-[#6949ff] text-white' : 'text-[#6949ff] bg-white border-2 border-[#6949ff]'}`}
    >
     {text}
    </Link>
  )
}

