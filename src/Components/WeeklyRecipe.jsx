import React from 'react'
import Title from './Title'
import { recipes } from '../assets/assets'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
import Recipes from '../pages/Recipes'
const WeeklyRecipe = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/recipes')
    }
  return (
    <div className='flex flex-col items-center justify-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-15'>
        <Title title="Weekly Recipe Roundup" description='Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed ultricies fringilla massa.'/>
        <div className='m-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                recipes.slice(0,6).map((recipe,index)=>(
                    <RecipeCard key={index} item={recipe} index={index}/>  
                ))
            }
        </div>
        <button onClick={handleNavigate} className='w-40 h-10 bg-[#E63946] text-white px-4 py-2 rounded-full '>View All</button>
      
    </div>
  )
}

export default WeeklyRecipe
