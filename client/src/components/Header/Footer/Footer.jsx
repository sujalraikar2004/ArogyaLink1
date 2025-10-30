import React from 'react'
import { Link } from 'react-router-dom'


const quickLinks=[
  {
    path:"/",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:"/",
    display:"Blog",
  }
]
const quickLinks01=[
  {
    path:"/doctor",
    display:"find a Doctor",
  },
  {
    path:"/",
    display:"Request an Appoinment",
  },
  {
    path:"/",
    display:"Get a opinion",
  }
  
]

const quickLinks02=[
  {
    path:"/",
    display:"Donate",
  },
  {
    path:"/contact",
    display:"Contact Us",
  }
  
]

const Footer = () => {
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <p className='text-[16px] leading-7 font-[400] mt-4'>Copyright All right reserve </p>
          </div>

          <div>
            <h2 className='text-[20px] font-[700] mb-6'>Quick Links</h2>
          <ul>
            {quickLinks.map((item,index)=>(
              <li key={index} className='mb-4'><Link to={item.path}>{item.display}</Link></li>
            ))}
            </ul>
            </div>
          <div>
            <h2 className='text-[20px] font-[700] mb-6'>I Want To:</h2>
          <ul>
            {quickLinks01.map((item,index)=>(
              <li key={index} className='mb-4'><Link to={item.path} className='text-textColor'>{item.display}</Link></li>
            ))}
            </ul>
            </div>
          <div>
            <h2 className='text-[20px] font-[700] mb-6'>I Want To:</h2>
          <ul>
            {quickLinks02.map((item,index)=>(
              <li key={index} className='mb-4'><Link to={item.path}>{item.display}</Link></li>
            ))}
            </ul>
            </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
