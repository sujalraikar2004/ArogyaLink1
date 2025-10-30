import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
         <div className="container mt-[50px]">
            <div className="flex justify-between gap-[50px] lg:hap-[130px] xl:gap-0 flex-col lg:flex-row">
               <div className="relative w-3/4 lg:w1/2 xl:e-[770px] z-10 order-2 lg:order-1">
                <img src="https://img.freepik.com/premium-photo/surgeon-doctor-woman-isolated-yellow-background-surprised-pointing-side_1368-234235.jpg" alt="" />
                <div className="absolute"><img src="" alt="" /></div>
               </div>
               {/* about contents start here */}
               <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className='heading'>
                   About Doctors:-
                </h2>
                <p className='text_para'> Interested in learning more about our doctors? We're proud to introduce you to our team of dedicated healthcare professionals. Each doctor on our platform is highly qualified, with expertise in their respective specialties. From their educational background and professional experience to patient reviews and areas of expertise, you'll find detailed information to help you choose the right doctor for your needs. Your health is our priority, and we're committed to connecting you with the best possible care</p>
                <p className='text_para mt-[30px]'> </p>
                 <Link to='/'><button className='btn'>lern More</button></Link>
               </div>
            </div>
         </div>
    </section>
  
  )
}

export default About
