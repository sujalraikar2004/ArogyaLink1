import React from 'react'
import {Link,NavLink} from "react-router-dom"
import {BiMenu} from 'react-icons/bi';
import userContext from '../../contexts/userContext';
import {useContext} from "react"



const navLinks=[
    {
        path:"/home",
        display:"Home"
    },
    {
        path:"/doctor",
        display:"Doctor"
    }
 
]

const Header = () => {
  const{user}=useContext(userContext)
  console.log(user)


  
  return (
    <>
  <header className=' header flex items-center'>
    <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            <img src="data:image/jpeg;base64,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" alt="uuuiu"  className='w-[80px]'/>
          </div>
         <div className="navigation">
         <ul className='menu flex items-center gap-[2.7rem]'>
          {
            navLinks.map((links,index)=>(
            <li key={index}><NavLink to={links.path} className={navClass=>navClass.isActive? ' text-orange-600 border-black border-b-2 text-[16px] leading-7 font-[600]':'text-textColor text-[16px] leading-7 font-[500] hover:text-blue-500'}>{links.display}</NavLink></li>
          ))
          }
          </ul>
         </div>

         <div className="flex items-center gap-4">

          <div>
            <Link>
            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
              <img src={user.avatar} alt="" />

            </figure>
            </Link>
          </div>
         {
          user? <Link to="/admin"><button  className='btn'>Admin</button></Link>: <Link to='/admin'>
          <button className='bg-cyan-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>login</button>
        </Link>
         }
          <span className='md:hidden'>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>

         </div>
           
        </div>
    </div>

  </header>
 <div className="google_translate_element">
<script src="https://translate.google.com/transalate_a/element.js?cb=googleTranslateElementInit"></script>
 </div>
 </>
  )
}

export default Header
