import React from 'react'
import { Link } from 'react-router-dom'
//  import { Link } from 'react-router-dom'
//  import { FaGoogle,FaGithub } from "react-icons/fa";

const Login = () => {
  return (

    
    <div className='flex items-center justify-center  px-4 h-[120vh] bg-[#1a1a2e]'>
      <div className='bg-[#1f1f38] text-white rounded max-w-sm p-8 pt-15 h-[70vh]'>
        <h2 className='text-white text-left font-bold font-primary font- text-4xl mb-8'>LOGIN</h2>
        <form className='space-y-6'>
          <input
            type="email"
            placeholder='USERNAME'
            className='w-full border-0 bg-[#46467469] rounded px-4 py-2'
            name=''
            id=''

          />

           <input
            type="password"
            placeholder='PASSWORD'
            className='w-full border-0 bg-[#46467469] rounded px-4 py-2 '
            name=''
            id=''

          />

          <button 
          type="submit"
          className='w-full border-0 bg-[#46467469] rounded px-4 py-2 font-secondary hover:bg-[#6867a7] cursor-pointer'
          >
          SUBMIT
          </button>
         <div className='flex justify-between font-primary'>
           <p> <a href="#">REGISTER</a> </p>
          <p> <a href="#">FORGOT PASSWORD</a> </p>
         </div>
         </form>
       
      </div>
    </div>

  )
}

export default Login
