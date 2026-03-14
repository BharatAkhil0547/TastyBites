import React from 'react'
import {recipes} from '../assets/assets'
const CommentCard = ({item}) => {
    const recipe=recipes.find((temp)=>temp.id===item.id)
    console.log(recipe)
  return (
    <div className='max-w-6xl mx-auto px-4 pb-6 mt-8 sm:px-12'>
        <div className='flex flex-wrap flex-col'>
        <h1 className='text-3xl sm:tex-4xl font-bold text-center'>Reviews</h1>
        {/* comment section */}
        <div className='flex flex-col gap-4 pt-4'>
            {
                recipe?.review.map(items=>(
                    <div className='flex gap-4 items-start'>
                        <img src={items.image} alt="" className='w-6 h-6 rounded-full' />
                        <div className='flex flex-col gap-3'>
                            {/* section 1*/}
                            <div className='flex gap-2 justify-evenly'>
                                <p><span className='font-semibold'>{items.name}</span> <span className='text-gray-400'>/ {items.Date.split(',')[0]}</span> </p>
                                <img src={items.rating} alt=""  className='w-25'/>
                            </div>
                            {/* section 2 */}
                            <div className='text-md tex-gray-400'>
                                {items.Comment}
                            </div>

                        </div>

                    </div>
                ))
            }


        </div>

        </div>
    </div>
  )
}

export default CommentCard
