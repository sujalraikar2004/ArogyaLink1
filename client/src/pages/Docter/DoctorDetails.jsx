import React from 'react';
 import {useState} from "react";
 import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {
 
  
  const navigate =useNavigate();
 const[value, setValue]=useState();


 const handleClick=()=>{
 navigate(`/room/${value}`)
 }
 

 



  return (
   
    <div>
      <div className='flex items-center justify-center'>
       
         <input type="text" name="teat" id="" placeholder='Enter your name' onChange={(e)=>(setValue(e.target.value))} className='border mt-4 py-2 bottom-4 ' />
         <button onClick={handleClick} className='btn mb-6'>makeCall</button>
        
      </div>
    </div>
    
  )
}

export default DoctorDetails
