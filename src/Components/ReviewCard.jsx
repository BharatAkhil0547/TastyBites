import React,{useState} from 'react'

const ReviewCard = ({item}) => {
    const [rating,setRating]=useState(0)
  return (
    <div  className='max-w-6xl mx-auto px-4 mt-8 sm:px-12'>
        <form className='grid grid-cols-1 gap-5 items-start justify-center'>
            {/* rating and rateproduct */}
            <div className='col-span-2 flex gap-4 items-center justify-start'>
                <p className='text-lg font-semibold'>RATE PRODUCT</p>
                <div className='flex gap-1'>
                    {
                        [1,2,3,4,5].map((item,index)=>(
                            <span key={index} className={`text-2xl cursor-pointer ${item <= rating ? 'text-[#E63946]' : 'text-gray-400'}`}
                  onClick={() => setRating(item)}>★</span>
                        ))
                    }

                </div>

            </div>
            {/* message box */}
            <div className='flex flex-col gap-5'>
                <textarea name="" id="" rows={8} placeholder='Your Message' className=' border-2 border-[#E63946] placeholder:px-2'/>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Your name' className='w-full border-2 border-[#E63946] h-10 placeholder:px-2'/>
                    <input type="emial" placeholder='Your Email' className='w-full col-span-1 border-2 border-[#E63946] h-10 placeholder:px-2'/>

                </div>
                <button type='submit' className='w-40 h-10 text-white bg-[#E63946] font-semibold'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default ReviewCard
