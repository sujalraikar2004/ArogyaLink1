import React from 'react'
import{useState,useContext} from  'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import userContext from '../contexts/userContext';



const Login = () => {

   const[username,setUsername]=useState("");
   const[password ,setPassword]=useState("");
   const{user}=useContext(userContext)
   const{setUser} = useContext(userContext)
   const navigate= useNavigate()
   console.log(user);

axios.defaults.withCredentials = true
   const handleSubmit=  async(e)=>{
    e.preventDefault()

    try {
      const response = await axios.post('/api/v1/users/login', {username,password});
       toast.success(response.data.message)
       navigate('/')
        setUser(response.data.data)
        alert(response.data.message)
   
     
      
    } catch (error) {
      toast.error(error.response.data.message)
     alert(error.response.data.message)
      
      
    }
   }






  
 
  return (
   <section className='px-5 lg:px-0'>
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="leading-9 text-[22px] font-bold mb-10">
        Hello <span className='text-primaryColor'>Welcome</span>
      </h3>
      <form className='py-4 md:py-0' onSubmit={handleSubmit}>
        <div className="mb-5">
          <input 
          type="username"
           name="username"
           placeholder='Enter username....' 
           id="" 
           value={username} 
           onChange={(e)=>(setUsername(e.target.value))} 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
        <div className="mb-5">
          <input 
          type="password"
           name="password"
           placeholder='Enter email..' 
           id="" 
           value={password} onChange={(e)=>(setPassword(e.target.value))} 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
        <div className="mt-7">
          <button type='submit' className='w-full py-3   bg-blue-700 text-white text-[18px] leading-3-[13px] rounded-lg'>submit</button>
        </div>
        <p className='mt-5 text-center'>
           Do&apos;t have an account ?<Link to='/register'  className='text-blue-600 font-medium ml-1'>Register</Link>
        </p>

      </form>
    </div>
    <ToastContainer />
     
   </section>
  )
}

export default Login
