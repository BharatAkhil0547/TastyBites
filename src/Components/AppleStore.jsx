import React from 'react'
import assets from '../assets/assets'

const AppleStore = () => {
  return (
    <div className='grid grid-cols-2 items-center justify-center bg-yellow-100 w-full min-h-[450px] mt-15 max-sm:gap-4'>
        <div className='max-sm:col-span-2 sm:col-span-1 flex flex-col gap-4  text-left px-4 sm:px-12 lg:p-24 xl:px-40 pt-10'>
            <h4 className='font-semibold text-[#E63946] '> TOP MOBILE APPLICATION</h4>
            <h2 className='text-3xl sm:text-5xl font-bold'>DOWNLOAD OUR APP</h2>
            <p className='text-gray-500'>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies fringilla massa.</p>
            <img src={assets.apple} alt="" className='w-[125px] h-[50px]'/>
        </div>
        <img src={assets.making} alt="ok" className='max-sm:col-span-2 sm:col-span-1 w-full h-full object-cover' />
    </div>
  )
}

export default AppleStore
