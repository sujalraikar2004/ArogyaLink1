import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className='text-center heading'>Contact Us</h2>
        <p className=' text_para mb-8 lg:mb-16 font-light text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In culpa blanditiis exercitationem cupiditate reiciendis voluptas autem. Obcaecati, non aliquid reprehenderit ullam ir exercitationem nemo?d
        </p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email">Your email</label>
             <input type="email" name="email" id=""  className='form_input' placeholder='example@gmail.com'/>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="text">Subject</label>
             <input type="subject" name="subject" id=""  className='form_input' placeholder='Enter  youre query here....'/>
          </div>
          <div>
            <label htmlFor="text">Message</label>
             <textarea name="text" id="" cols="30" rows="6" placeholder='Enter comment here' className='form_input mt-1'></textarea>
          </div>
          <button  type='submit' className='btn rounded sm:w-fit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
