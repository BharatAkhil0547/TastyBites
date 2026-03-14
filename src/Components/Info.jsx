import React from 'react'
import assets from '../assets/assets'

const Info = () => {
  return (
    <div className='relative mt-15 w-full h-[450px]'>
       <img src={assets.bgImage1} alt="Info"  className='absolute w-full h-full object-center z-0'/>
       <img src={assets.overlay} alt="blur" className='absolute top-0 left-0 w-full h-full z-10'/>
       <div className='absolute top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-full gap-7'> 
        <p className='text-md text-white font-semibold'>FIND COOKS FROM AROUND THE GLOBE</p>
        <h1 className='text-3xl sm:text-4xl font-bold text-white text-center max-w-6xl'>Join a Worldwide Network of Influencers and Like-Minded Individuals </h1>
        <div className='flex flex-wrap items-center justify-center gap-15'>
           <div className='flex flex-col gap-2'>
            <h1 className='text-[#E63946]  text-xl sm:text-3xl font-bold text-center'>1500</h1>
            <p className='text-white font-semibold'>Original Recipes</p>
           </div>
           <div className='flex flex-col gap-2'>
            <h1 className='text-[#E63946]  text-xl sm:text-3xl font-bold text-center'>2000</h1>
            <p className='text-white font-semibold'>Fantastic Participants</p>
           </div>
           <div className='flex flex-col gap-2'>
            <h1 className='text-[#E63946]  text-xl sm:text-3xl font-bold text-center'>2000</h1>
            <p className='text-white font-semibold'>Contentment Level</p>
           </div>
        </div>
       </div>
        
      
    </div>
  )
}

export default Info
