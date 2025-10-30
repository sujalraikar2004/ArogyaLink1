import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
const DocterCard = ({doctors}) => {

    const{name,avgRating ,id,totalRating,photo, totalPiatent,hospital, specialization}=doctors
    
 const doctId = `/doctor/${id}`
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} alt=""  className='rounded-md'/>
        </div>
        <h2 className='text-[18px] lg:text-[26px] leading-[30px] font-[700] mt-3 lg:mt-5'>{name}</h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
            <span className='text-irisBlueColor py-1 px-2 lg:px-6 lg:py-2 bg-[#CCF0F3] text-[12px] left-4 lg:text-16px'>{ specialization}</span>
        
           <div>
            <span>{avgRating}</span>
           </div>
          
        
        </div> <Link to ={doctId} className='w-[44px] h-[44px] rounded-full border-solid border-2 border-black mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none' >
           <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>
    </div>
  )
}

export default DocterCard
