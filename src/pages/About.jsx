import React from 'react'
import assets from '../assets/assets'
import PageCard from '../Components/PageCard'
import Subscribe from '../Components/Subscribe'
import Chefs from '../Components/Chefs'
import Reviews from '../Components/Reviews'
const About = () => {

  return (
    <div>
      <PageCard title='About Us' description='Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.'/>
     <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex flex-col gap-6 items-start'>
          <p className='text-md text-[#E63946] font-semibold'>Our Story</p>
          <h1 className='text-3xl sm:text-4xl font-bold mt-2'>
            Discover The Stories Behind <br /> The Flavors
          </h1>
          <p className='text-gray-800 mt-4'>
             Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
        placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies
        fringilla massa.
          </p>
          <button className='bg-[#E63946] mt-6 text-white px-6 py-2'>
            Read More
          </button>

        </div>
         <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      alt="Cooking"
      className="w-full rounded-lg"
    />

      </div>

     </div>
     
     <div className='max-w-7xl mx-auto px-4 py-12'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
    
    {/* Image */}
    <img src={assets.VideoImage} alt="" className='w-full max-h-[450px] rounded-lg' />

    {/* Text */}
    <div className='flex flex-col gap-6 items-start'>
      <p className='text-sm text-[#E63946] font-semibold'>Our Courses</p>

      <h1 className='text-3xl sm:text-4xl font-bold'>
        Watch, Learn, And Master <br /> The Art Of Cooking
      </h1>

      <p className='text-gray-800'>
        Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
        placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies
        fringilla massa.
      </p>

      <button className='bg-[#E63946] text-white px-6 py-2 mt-4'>
        Read More
      </button>
    </div>

  </div>
  </div>
      <Chefs/>
      <div className='relative w-full h-[450px] mt-15'>
        <img src={assets.AboutBgImage} alt=""  className='absolute top-0 left-0 w-full h-full object-cover z-0'/>
        <img src={assets.overlay} alt="" className='absolute top-0 left-0 w-full h-full z-10'/>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center  z-20'>
          <img src={assets.AboutImage} alt="" />
          <p className='text-sm text-white font-semibold mt-2'>By Amanda Gray</p>
          <h1 className='text-3xl sm:text-5xl mt-4 text-white '>Cookbook Authors</h1>
          <p className='text-gray-300 text-center mt-4 px-6 max-w-7xl'>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
        placerat tincidunt. Nam <br/>sem lacus, ornare non ante sed ultricies
        fringilla massa.</p>
        <button className='mt-4 text-white bg-[#E63946] px-6 py-2 font-semibold' >Check Recipes</button>

        </div>
      </div>
      <Reviews/>
      <Subscribe/>
    </div>
  )
}

export default About
