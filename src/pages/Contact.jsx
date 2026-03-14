import React from 'react'
import PageCard from '../Components/PageCard'
import assets from '../assets/assets'
import Title from '../Components/Title'
const Contact = () => {
  return (
    <div>
      <PageCard title='Contact Us' description='Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.'/>
      <div className='max-w-5xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-15'>
          {/* location */}
          <div className=' flex flex-col items-center justify-center gap-4 border-2 border-[#E63946] bg-yellow-100'>
            <img src={assets.LocationRed} alt="location"  className='mt-4'/>
            <p className='text-md font-bold'>Our Location</p>
            <div className='pb-6'>
              <p className=' text-gray-400 mb-0'>1234 NW Bobcat Lane, St. </p>
            <p className='text-gray-400'>Robert, MO 65584-5678</p>
            </div>
          </div>
          {/* mail */}
          <div className=' flex flex-col items-center justify-center gap-4 border-2 border-[#E63946] bg-yellow-100'>
            <img src={assets.MailRed} alt="location"  className='mt-4'/>
            <p className='text-md font-bold'>Our Mail</p>
            <div className='pb-6'>
              <p className=' text-gray-400 mb-0 text-center'>best@shop.com</p>
            <p className='text-gray-400'>info@bestshop.com</p>
            </div>
          </div>
          {/* phone */}
          <div className=' flex flex-col items-center justify-center gap-4 border-2 border-[#E63946] bg-yellow-100'>
            <img src={assets.PhoneRed} alt="location"  className='mt-4'/>
            <p className='text-md font-bold'>Call Us</p>
            <div className='pb-6'>
              <p className=' text-gray-400 mb-0'>(268)142-8413</p>
            <p className='text-gray-400'>(760)265-2917</p>
            </div>
          </div>

        </div>
        {/* form  */}
        <div className='mt-15'>
          <form className='grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center h-[450px]'>
            <img src={assets.formImage} alt="form" className='max-sm:hidden w-full h-[450px] pr-4' />
            <div className='flex flex-grow flex-col items-start h-[450px]'>
              <div className='flex flex-col gap-2 w-full'>
                <p className='text-sm font-semibold'>Your Name</p>
                <input type="text" className='border-2 border-[#E63946] w-full bg-yellow-100' />

              </div>
              <div className='flex flex-col gap-1 w-full pt-2'>
                <p className='text-sm font-semibold'>Your Email Address</p>
                <input type="text" className='border-2 border-[#E63946] w-full bg-yellow-100' />

              </div>
              <div className='flex flex-col gap-1 w-full pt-2'>
                <p className='text-sm font-semibold'>Topic</p>
                <input type="text" className='border-2 border-[#E63946] w-full bg-yellow-100' />

              </div>
              <div className='flex flex-col gap-2 w-full pt-2 pb-3'>
                <p className='text-sm font-semibold'>Your Message</p>
                <textarea rows={8} className='border-2 border-[#E63946] bg-yellow-100'/>

              </div>
               <button className='w-40 h-10 bg-[#E63946] text-white font-medium'>SEND MESSAGE</button>

            </div>

          </form>

        </div>

      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Title title="Companies That Trust Us" description='Donec dapibus mauris id odio ornare tempusuis sit amet accumsan.'/>


        <div className='w-full  sm:h-[20] max-sm:h-[40] bg-[#E63946]'>
          <ul className='flex flex-wrap items-center justify-center gap-5 sm:gap-20 px-4 py-4'>
            <li className='flex gap-2'>
              <img src={assets.Logo1} alt="" />
              <p className='text-white font-bold text-md'>Logoipsum</p>
            </li>
            <li className='flex gap-2'>
              <img src={assets.Logo2} alt="" />
              <p className='text-white font-bold text-md'>Logoipsum</p>
            </li>
            <li className='flex gap-2'>
              <img src={assets.Logo3} alt="" />
              <p className='text-white font-bold text-md'>Logoipsum</p>
            </li>
            <li className='flex gap-2'>
              <img src={assets.Logo4} alt="" />
              <p className='text-white font-bold text-md'>Logoipsum</p>
            </li>
            <li className='flex gap-2'>
              <img src={assets.Logo5} alt="" />
              <p className='text-white font-bold text-md'>Logoipsum</p>
            </li>
            

          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default Contact
