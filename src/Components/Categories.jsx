import React from 'react'
import Title from './Title'
import { foodCategory } from '../assets/assets'
import assets from '../assets/assets'

const Categories = () => {
    
  return (
    <div className='flex flex-col items-center justify-center pt-15 gap-10'>
      <Title title='Recipes By Categories' description='Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies fringilla massa.'/>
      <div className='flex gap-7 flex-wrap justify-center'>
        {
            foodCategory.map((item,index)=>(
                <div key={index} className='relative w-[250px] h-[250px]'>
                    <img src={item.item} className='w-full h-full object-cover z-0' />
                    <img src={assets.overlay} className='absolute top-0 left-0 w-full h-full z-10'/>
                    <p className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-semibold z-20'>
        {item.name}
      </p>
                </div>
                
                
            ))
        }

      </div>
    </div>
  )
}

export default Categories
