import React from 'react'
import { Link } from 'react-router-dom'
 import { BsArrowRight } from 'react-icons/bs'
const ServiceCard = ({item, index}) => {
  const{name ,desc ,bgColor,textColor}=item
  console.log
  
    return (
        <div className='py-[30px] px-3 lg:px-5'>
            <h2 className='  font-[700] text-[26px] leading-9'>{name}</h2>
            <p className='text_para text-[16px] leading-7 font-[400] mt-4'>{desc}</p>
        
            <div className="flex items-center justify-between mt-[30px]">
            <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-solid border-2 border-black mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none' >
           <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>
          <span className='h-[44px] w-[44px] font-[600] flex items-center justify-center' style={{backgroundColor:`${bgColor}`,color:`${textColor}`}}>{index+1}</span>
            </div>
        
        </div>
    
        
      
    
  )
}

export default ServiceCard
