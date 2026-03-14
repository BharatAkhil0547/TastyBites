import React from 'react'
import {Link} from 'react-router-dom'
const PageCard = ({title,description}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-yellow-100 w-full h-[350px] py-15 gap-7'>
        <h1 className='text-3xl sm:text-5xl font-bold'>{title}</h1>
        <p className='max-w-2xl text-center text-gray-500 mb-6'>{description}</p>
        <p><Link to='/'  className='text-sm font-medium text-[#E63946]'>HOME</Link><span> / </span> <span className='text-sm font-medium'>{title.toUpperCase()}</span></p>
    </div>
    </>
   
  )
}

export default PageCard

