import React, { useEffect } from "react"; 
import {ArrowLeft } from "phosphor-react";
import {  useSelector } from "react-redux";
import {barSelection} from "../redux/bar-features/barSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { decrementByamount } from "../redux/bar-features/barSlice";
import Layout from "./Layout";
import { cssValues } from "../assets/staticValues";

const ProgressBar = () => {
const progressWidth = useSelector(barSelection);   
const dispatch = useDispatch();
  const navigate = useNavigate();

 const handlePrev = ()=>{
  dispatch(decrementByamount())
  navigate(-1)
 }
 
useEffect(() => {
window.onpopstate=(()=>{
  dispatch(decrementByamount())
})
}, [navigate])

    const progressStyle = () => {
        return {
          width: `${progressWidth}%`,
          transition: "width 600ms",
        };
      };

  return (
  <Layout>
    <section className="flex w-full justify-center h-full">
      <div className="w-3/6  h-full max-md:w-full py-4 ">
      <div className="flex gap-10 items-center">
        <div onClick={handlePrev}>
          <ArrowLeft size={cssValues.iconSize} className='cursor-pointer'/>
        </div>
        <div className="h-4 w-1/2 bg-ibg rounded-full max-sm:w-4/6">
          <p
            className="w-0 h-full bg-sbg rounded-full"
            style={progressStyle()}
          ></p>
        </div>
      </div>
      
      <Outlet/>
    </div>
    </section>
  </Layout>

  );
};

export default ProgressBar;
