import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import PageCard from '../Components/PageCard'
import {recipes} from '../assets/assets'
import assets from '../assets/assets'
import ReviewCard from '../Components/ReviewCard'
import CommentCard from '../Components/CommentCard'
import Subscribe from '../Components/Subscribe'
const RecipeDetails = () => {
    const {id}=useParams()
    const item=recipes.find((item)=>item.id===Number(id))
  return (
    <div>
        <PageCard title='Recipe' description='Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.'/>
        <p className='max-w-6xl mx-auto px-6 text-gray-400 text-center pt-10'>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit. Phasellus a porta tellus. Suspendisse sagittis metus enim. Sed molestie libero id sem pulvinar, quis euismod mauris suscipit.</p>
        <div className='max-w-6xl mx-auto relative w-full h-[650px] mt-10'>
            <img src={item.image} alt="" className='absolute top-0 left-0 w-full h-full z-0'/>
            <img src={assets.overlay} alt="" className='absolute top-0 left-0 w-full h-full z-10' />
            <div className='absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center'>
                <h1 className='text-3xl sm:text-5xl text-white font-semibold'>{item.title}</h1>
            </div>
            
        </div>
        <div className='max-w-6xl mx-auto px-6 gap-8 flex flex-wrap justify-evenly mt-5'>
                <div className='flex flex-col w-[150px]'>
                    <img src={assets.serving} alt="" className='w-10 h-10'/>
                    <p className='font-semibold'>Servings</p>
                    <p className='text-[#E63946]'>5 Servings</p>
                </div>
                <div className='flex flex-col w-[150px]'>
                    <img src={assets.preptime} alt="" className='w-10 h-10'/>
                    <p className=''>Prep Time</p>
                    <p className='text-[#E63946]'>20 minutes</p>
                </div>
                <div className='flex flex-col w-[150px]'>
                    <img src={assets.cooktime} alt="" className='w-10 h-10'/>
                    <p className=''>Cooking Time</p>
                    <p className='text-[#E63946]'>45 Minutes</p>
                </div>
                <div className='flex flex-col w-[150px]'>
                    <img src={assets.calories} alt="" className='w-10 h-10'/>
                    <p className=''>Calories</p>
                    <p className='text-[#E63946]'>750 Kcal</p>
                </div>


            </div>
            {/* Ingredients */}
                <div className='max-w-6xl mx-auto px-6 mt-8'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-center'>Ingredients</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-3 mt-5 space-x-25 space-y-5 items-start justify-center mt-5'>
                        {
                            item.ingredients.map((ingredient,index)=>(

                                <div key={index} className='group text-md sm:text-lg flex gap-1 items-center hover:text-[#E63946]'>
                                    <img src={assets.ellipse} alt="" className='w-5 h-5 transition group-hover:bg-[#E63946] rounded-full' />
                                    <span className='font-semibold transition group-hover:text-[#E63946] font-[40px]'>
                                        {ingredient}
                                    </span>
                                </div>
                            ))
                        }

                    </div>

                    </div>

                </div>

                {/* Directions */}
                <div className='max-w-6xl mx-auto px-6 mt-8'>
                    <div className='flex flex-col gap-4  justify-center'>
                        <h1 className='text-3xl sm:tex-4xl font-bold text-center'>Directions</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-3 mt-5 space-x-25 space-y-5 items-start justify-center mt-5'>
                        {
                            item.instructions.map((instructions,index)=>(

                                <div key={index} className='group text-md sm:text-lg flex gap-2 items-center hover:text-[#E63946]'>
                                    <img src={assets.ellipse} alt="" className='w-5 h-5 transition group-hover:bg-[#E63946] rounded-full' />
                                    <span className='font-semibold transition group-hover:text-[#E63946] font-[40px]'>
                                        {instructions}
                                    </span>
                                </div>
                            ))
                        }

                    </div>

                    </div>

                </div>

                {/* Reviews */}
                <CommentCard item={item}/>
                {/* Review Card */}
                <ReviewCard item={item}/>
                {/* subscribe */}
                <Subscribe/>
    </div>
  )
}

export default RecipeDetails
