import React from 'react'
import {useNavigate} from 'react-router-dom'
const RecipeCard = ({item,index}) => {
    const navigate=useNavigate()
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-[300px] flex flex-col overflow-hidden'>
        {/* image */}
        <img src={item.image} alt={item.title} className='w-full object-cover hover:scale-110 transition-all'/>
        {/* content */}
        <div className='flex flex-col flex-grow p-5 gap-3 text-center'>
            <h2 className='text-lg font-bold text-gray-800'>{item.title}</h2>
            <p className='text-sm text-gray-500 '>{item.description}</p>
            <p className='text-sm text-gray-600'> <span>{item.name}</span>
            <span className='mx-2'>.</span>
            <span>{item.date}</span>
            {/* button */}
            
            </p>
            <button onClick={()=>navigate(`/recipes/${item.id}`)} className='mt-auto bg-[#E63946] text-white text-sm font-semibold py-2 rounded-full hover:bg-red-600 transition-all'>Recipe</button>

        </div>
        
      
    </div>
  )
}

export default RecipeCard
