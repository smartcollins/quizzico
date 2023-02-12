import React from 'react';
import { ArrowLeft, X, MagnifyingGlass } from 'phosphor-react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { peopleYouMayKnow } from '../assets/data';
import SearchPeople from './home-screen/SearchPeople';
import UserBoard from './UserBoard';

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
        <button
          className={ `w-content px-4 py-1 rounded-[20px] bg-[#6949ff] text-white border-2 border-[#6949ff] `}
         
        >
          Quizzico
        </button>
        <Link
        to={`/topAuthor/${title}/userCollection`}
          className={ `w-content px-4 py-1 rounded-[20px] bg-[#6949ff] text-white border-2 border-[#6949ff] `}
         
        >
          Collections
        </Link>
        <button
          className={ `w-content px-4 py-1 rounded-[20px] bg-[#6949ff] text-white border-2 border-[#6949ff] border-none `}
         
        >
          About
        </button>
        </div>
        <Outlet/>
      </div>
    </section>
  )
}
