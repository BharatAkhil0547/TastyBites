import React from 'react'
import assets from '../assets/assets'

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full h-\[550px\] bg-yellow-100 mt-15 py-13 '>
      <h1 className='font-bold text-xl sm:text-3xl'>Subscribe To Our Newsletter</h1>
      <p className='text-lg text-gray-500 sm:text-xl'>Enter your email address here to get our most recent newsletter</p>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center mt-10'>
        <div className='flex gap-4 items-center justify-center border-[#E63946] border-2'>
        <img src={assets.email} alt=""  className='w-14 h-10 opacity-40'/>
        <input type='email' placeholder='Email Address' className='outline-none max-sm:max-w-sm w-[500px] h-[49px] placeholder:text-gray-500 placeholder:text-lg'/>
      </div>
      <button type='submit' className='w-[152px] h-[49px] text-white bg-[#E63946] font-medium text-lg'>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Subscribe
