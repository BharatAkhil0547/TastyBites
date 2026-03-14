import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Chefs = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-15 gap-10' >
      <Title title='We Have Skilled Cooks' description='Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies fringilla massa.'/>
      {/* chef  */}
      <div className='grid grid-cols-1 sm:grid-cols-3 mt-1 gap-10'>
        
            <div className='max-sm:col-span-3 flex flex-col item-center justify-center gap-4'>
                <img src={assets.chef1} alt="chef1" className='w-[298px] h-[247px]'/>
                <p className='text-md font-semibold text-center'>MARLON MCDONALD</p>
                <p className='text-sm text-gray-700 text-center font-semibold'>chef</p>
                <div className='flex items-center justify-center gap-4'>
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.twitter} alt="" />

                </div>

            </div>
            <div className='max-sm:col-span-3 flex flex-col item-center justify-center gap-4'>
                <img src={assets.chef2} alt="chef1" className='w-[298px] h-[247px]'/>
                <p className='text-md font-semibold text-center'>REBECCA GRAND</p>
                <p className='text-sm text-gray-700 text-center font-semibold'>chef</p>
                <div className='flex items-center justify-center gap-4'>
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.twitter} alt="" />

                </div>

            </div>
            <div className='max-sm:col-span-3 flex flex-col item-center justify-center gap-4'>
                <img src={assets.chef3} alt="chef1" className='w-[298px] h-[247px]'/>
                <p className='text-md font-semibold text-center'>JOHN BAILEY</p>
                <p className='text-sm text-gray-700 text-center font-semibold'>chef</p>
                <div className='flex items-center justify-center gap-4'>
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.twitter} alt="" />

                </div>

            </div>
        
      </div>
    </div>
  )
}

export default Chefs
