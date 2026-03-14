import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
const Reviews = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-15'>
        <Title title='From Our Customers' description='Aenean sed nibh a magna posuere tempor nunc '/>
        <div className='flex flex-wrap flex-grwo items-center justify-center gap-5'>
            <div className='flex flex-col items-center justify-center bg-yellow-100 gap-4 pt-4 pb-4'>
                <p>⭐⭐⭐⭐</p>
                <p className='text-center px-8 max-w-md'>Nunciato ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non.</p>

                <div className='flex flex-col items-center justify-center pt-4'>
                    <img src={assets.Reviewer1} alt="review1" className='w-12 h-12 rounded-full'/>
                    <p className='font-bold '>Alice Holland</p>
                    <p className='text-gray-500'>Emard LLC, DC</p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center bg-yellow-100 gap-4 pt-4 pb-4'>
                <p>⭐⭐⭐⭐</p>
                <p className='text-center px-8 max-w-md'>Nunciato ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non.</p>

                <div className='flex flex-col items-center justify-center pt-4'>
                    <img src={assets.Reviewer2} alt="review1" className='w-12 h-12 rounded-full'/>
                    <p className='font-bold '>Kevin Fisher</p>
                    <p className='text-gray-500'>Russel Music, LA</p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center bg-yellow-100 gap-4 pt-4 pb-4'>
                <p>⭐⭐⭐⭐</p>
                <p className='text-center px-8 max-w-md'>Nunciato ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non.</p>

                <div className='flex flex-col items-center justify-center pt-4'>
                    <img src={assets.Reviewer3} alt="review1" className='w-12 h-12 rounded-full'/>
                    <p className='font-bold '>Marilyn Hughes</p>
                    <p className='text-gray-500'>Grant Hessel Inc, TX</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Reviews
