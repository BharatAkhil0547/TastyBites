import React,{useState} from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <nav className='shadow-md px-6 py-4 sticky top-0'>
        <div className='flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 '>
            <img src={assets.logo} alt="logo" className='sm:w-32 w-40'/>
            <ul className='max-sm:hidden sm:flex gap-6'>
                <li><Link to="/" className='hover:text-rose-600 font-semibold'>Home</Link></li>
                <li><Link to="/recipes" className='hover:text-rose-600 font-semibold'>Recipes</Link></li>
                <li><Link to="/about" className='hover:text-rose-600 font-semibold'>About</Link></li>
                <li><Link to="/contact" className='hover:text-rose-600 font-semibold'>Contact</Link></li>
            </ul>
            <div>
                <a href="" className='text-sm text-white font-semibold max-sm:hidden flex gap-3 items-center bg-rose-600 px-6 py-3 rounded-full hover:scale-105 transition-all'>Submit Recipe <img src={assets.arrow_icon} alt="" /></a>
            </div>
            <button onClick={()=>setOpen(!open)} className='sm:hidden text-xl'>☰</button>
        </div>
        {
            open &&
            <ul className='flex flex-col mt-2 gap-2 sm:hidden'>
                <li><Link to="/" onClick={()=>setOpen(false)} className='hover:text-rose-600 font-semibold'>Home</Link></li>
                <li><Link to="/recipes" onClick={()=>setOpen(false)} className='hover:text-rose-600 font-semibold'>Recipes</Link></li>
                <li><Link to="/about" onClick={()=>setOpen(false)} className='hover:text-rose-600 font-semibold'>About</Link></li>
                <li><Link to="/contact" onClick={()=>setOpen(false)} className='hover:text-rose-600 font-semibold'>Contact</Link></li>
            </ul>
        }

    </nav>
  )
}

export default Navbar
