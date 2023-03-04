import React from 'react'
import Header from './Header';
import Collab from './Collab'
import image from '../../images/bookbg.jpg';
// import bimage2 from '../../images/sch-10.png';
import img1 from '../../images/know-1.png';
import img2 from '../../images/know-2.png';
import img3 from '../../images/know-3.png';
import img4 from '../../images/know-4.png';
import img5 from '../../images/mini-img2.png';
import img6 from '../../images/mini-img4.png';
const miniImage = {image, img1, img2, img3, img4, img5, img6}

const Collabo = () => {
  return (
    <div>
      <Header caption={"20 collaboration"} iconText={"newest"}/>
      <section className='grid grid-cols-2 max-md:grid-cols-1 gap-3 max-sm:gap-1'>
        <Collab {...miniImage}/>
        <Collab {...miniImage}/>
        <Collab {...miniImage}/>
        <Collab {...miniImage}/>
        <Collab {...miniImage}/>
        <Collab {...miniImage}/>
      </section>
    </div>
  )
}

export default Collabo