import React from 'react'
import PageCard from '../Components/PageCard'
import RecipeCard from '../Components/RecipeCard'
import { recipes } from '../assets/assets'
import Subscribe from '../Components/Subscribe'
const Recipes = () => {
  return (
    <div>
      <PageCard title='Recipes' description='Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.'/>
      <div className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15 space-y-4 px-4 sm:px-12 lg:px-24 xl:px-40'>
        {recipes.map((item,index)=>(
          <RecipeCard key={index} item={item} index={index}/>
        ))}
      </div>
      <Subscribe/>
    </div>
  )
}

export default Recipes
