import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex max-sm:flex-col max-sm:h-full justify-center gap-25 bg-yellow-100 h-[600px] shadow-md pt-15'>
      <div className='flex flex-col gap-9 pt-2 px-4'>
        <div className='w-40 h-10 text-white font-semibold px-4 py-2 bg-[#E63946] rounded-full'>TODAY'S RECIPE</div>
        <h1 className='max-w-lg font-bold text-5xl'>Our Delicious Spaghetti</h1>
        {/* user details */}
        <div className='flex items-center justify-between max-w-lg'>
            <div className='flex flex-col'>
                <img src={assets.user_img} alt="user-img" className='w-5 h-5 rounded-full' />
                <p className='font-bold text-sm'>By Kelly FreeMan</p>
            </div>
            <div className='flex flex-col'>
                <img src={assets.icon_clock} alt="" className='w-5 h-5'/>
                <p className='font-bold text-sm'>1 hour and 15 minutes</p>
            </div>
        </div>
        {/* description */}
        <div className='pt-4 text-gray-500 max-w-lg'>
            <p>Tasty spaghetti is a classic Italian dish that is beloved around the world.The dish can be customised with different ingredients </p>
        </div>
        {/* two details */}
        <div className='flex gap-3'>
            <div className='w-35 h-10 text-white font-semibold px-4 py-2 bg-[#E63946] '>Cooking Right</div>
            <div className='w-40 h-10 text-[#E63946] font-semibold px-4 py-2 border border-[#E63946] '>Discover Recipe</div>

        </div>

      </div>
      <div>
        <img src={assets.hero_img} alt='heroImage' className='w-[377px] h-[477px] max-sm:w-full  '/>
      </div>
      
    </div>
  )
}

export default Hero
