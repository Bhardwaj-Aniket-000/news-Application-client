import React from 'react'

const FeedbackShimmer = () => {
    const arr = Array.from({length:3})
  return (
    <div className='flex flex-col gap-2'>
        {arr.map((element,ind) =>  <div key={ind} className='w-[650px] p-3 rounded-md bg-slate-400 flex flex-col gap-2 animate-pulse'>
            <p className='bg-slate-300 p-3 w-1/3 rounded-md animate-pulse'></p>
            <p className='bg-slate-300 p-3 w-1/2 rounded-md animate-pulse'></p>
            <p className='bg-slate-300 p-3 rounded-md animate-pulse'></p>
        </div>)
        }
    </div>
  )
}

export default FeedbackShimmer
