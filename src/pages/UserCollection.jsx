import React from 'react';
import TopColImages from '../components/home-screen/TopColImages';

import homeSlide8 from "../images/sch-four.jpg";
import homeSlide9 from "../images/sch-10.png";
import homeSlide10 from "../images/sch-11.png";

const UserCollection = () => {
  return (
    <div className='grid grid-cols-2 space-y-3  items-center gap-0'>
        <TopColImages image={homeSlide8} caption={"Education"}/>
        <TopColImages image={homeSlide9} caption={"Business"}/>
        <TopColImages image={homeSlide10} caption={"Productivity"}/>
        <TopColImages image={homeSlide9} caption={"Finance"}/>
    </div>
  )
}

export default UserCollection