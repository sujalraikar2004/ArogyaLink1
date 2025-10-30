import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const[formData,setFormData]=useState({
    fullname:'',
    email:'',
    password:'',
    avatar:null,
    gender:'',
    role:'patient',
    username:""
  })

const navigate= useNavigate()
  
const handleInputchange = event => {
  const { name, value } = event.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value,
  }));
};
const handleFileChange = event => {
  setFormData(prevState => ({
    ...prevState,
    avatar: event.target.files[0], // Update avatar with the selected file
  }));
};
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create FormData object to send files
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('fullname', formData.fullName);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('role', formData.role);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('avatar', formData.avatar);
  
      try {
        const response = await axios.post('/api/v1/users/register', formDataToSend);
        console.log('File uploaded:', response.data);
        alert("user register successfull")
        navigate("/login")
      } catch (error) {
        alert("error while creating user")
      }
    };


  return (
  <section className='px-5 xl:px-8'>
    <div className="mx-auto max-w-[1170px]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div><figure><img src="" alt="" /></figure></div>

        <div className="rounded-l-lg lg:pl-16 py-10 ">
        <h3 className='text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-blue-700'>account</span></h3>
         
         <form className='py-4 md:py-0' onSubmit={handleSubmit}>
         <div className="mb-5">
          <input 
          type="text"
           name="username"
           placeholder='Full Name' 
           value={formData.username}
           onChange={handleInputchange}
           id="" 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
         <div className="mb-5">
          <input 
          type="text"
           name="fullname"
           placeholder='Full Name' 
           value={formData.fullname}
           onChange={handleInputchange}
           id="" 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
         <div className="mb-5">
          <input 
          type="email"
           name="email"
           placeholder='Enter Email..'
           value={formData.email} 
           onChange={handleInputchange}
           id="" 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
         <div className="mb-5">
          <input 
          type="password"
           name="password"
           placeholder='Enter Password..' 
           value={formData.password}
           onChange={handleInputchange}
           id="" 
            className='w-full py-3 border-b border-solid focus:outline-none focus:border-b-[blue] text-[22px] leading-7 cursor-pointer rounded-md'
            />
        </div>
        <div className='mb-5 flex items-center justify-between'>
          <label htmlFor="" className='font-bold text-[16px] leading-7'>
            Are you a:
            <select name="role" value={formData.role} onChange={handleInputchange} id="" className='font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>
          <label htmlFor="" className='font-bold text-[16px] leading-7'>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleInputchange} id="" className='font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className='mb-5 flex items-center gap-3'>
          <figure className='w-[60px] h-[60px] rounded-full border-2 border-blue-500 flex items-center justify-center'>
            <img src="" alt="" />
          </figure>
          <div>
            <input type="file" name="avatar" id="costoFile" accept="image/*"  onChange={handleFileChange} />
          </div>
        </div>
        <div className="mt-7">
          <button type='submit' className='w-full py-3   bg-blue-700 text-white text-[18px] leading-3-[13px] rounded-lg'>submit</button>
        </div>
        <p className='mt-5 text-center'>
          Allready have an account ? <Link to='/login'  className='text-blue-600 font-medium ml-1'>Login</Link>
        </p>
         </form>
          
        
        </div>



      </div>

    </div>
    <ToastContainer />
  </section>
)
    
}

export default SignUp
