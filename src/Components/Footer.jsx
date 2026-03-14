import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
  return (
    <footer className='bg-[#1A1A1A] text-gray-300 pt-16 pb-8 px-6 sm:px-12 lg:px-24 xl:px-40 mt-15 '>
        <div className='grid grid-cols-1 md:grid-cols-4 mb-12'>
            {/* About us */}
            <div>
            <h3 className='text-white text-lg font-semibold mb-4'>About Us</h3>
            <ul className='space-y-2'>
                <li className='hover:text-white cursor-pointer'>Organisation</li>
                <li className='hover:text-white cursor-pointer'>Partners</li>
            </ul>               
             </div>
             {/* Links  */}
             <div>
            <h3 className='text-white text-lg font-semibold mb-4'>Interesting</h3>
            <ul className='space-y-2'>
                <li className='hover:text-white cursor-pointer'>Photo Gallery</li>
                <li className='hover:text-white cursor-pointer'>Our Team</li>
            </ul>               
             </div>
             {/* Achievements */}
             <div>
            <h3 className='text-white text-lg font-semibold mb-4'>Achievements</h3>
            <ul className='space-y-2'>
                <li className='hover:text-white cursor-pointer'>Winning Awards</li>
                <li className='hover:text-white cursor-pointer'>Press</li>
            </ul>               
             </div>
             {/* Contact */}
             <div>
            <h3 className='text-white text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-white-400 text-sm leading-relaxed'>Bendum dolor eu varius. Morbi fermentum velitsodales egetonec.
            volutpat orci.</p>             
             </div>
        </div>
        {/* contact Info */}
        <div className='grid grid-cols-1 md:grid-cols-4 border-t border-gray-800 pt-8 pb-6 gap-4'>
            <div className='flex items-center gap-3'>
                <img src={assets.Phone} alt="" />
                <span>Phone: (+63) 236 6322</span>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.Mail} alt="" />
                <span>Public@news.com</span>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.Timing} alt="" />
                <span>Mon - Fri: 10am - 6pm <br />
            Sat - Sun: 10am - 6pm</span>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.Mark} alt="" />
                <span>639 Jade Valley, Washington Dc</span>
            </div>

        </div>
        <div className='text-center text-gray-500 text-sm border- border-gray-800 pt-6'>
            © Copyright 2026 Bharat Akhil Chaitanya. <span className='text-white px-2'>All Rights Reserved</span>
        </div>

    </footer>
  )
}

export default Footer
