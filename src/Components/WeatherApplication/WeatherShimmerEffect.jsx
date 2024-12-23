import React from 'react'

const WeatherShimmerEffect = () => {
  return (
    <div className='p-4 w-full'>
      <p className='p-3 w-20 bg-slate-300 rounded-sm animate-pulse'></p>
      <div className='h-24 w-24 mt-2 rounded-md bg-slate-300 animate-pulse'></div>
      <p className='p-3 w-56 mt-2 bg-slate-300 rounded-sm animate-pulse'></p>
      <p className='p-3 w-56 mt-2 bg-slate-300 rounded-sm animate-pulse'></p>
      <div className='flex w-[70%] mt-3 gap-2 p-2'>
      {Array.from({length:7}).map((item,ind) => {
        return <div key={ind} className='h-44 w-28 rounded-md bg-slate-300 animate-pulse'></div>
      })
      }
      </div>
    </div>
  )
}

export default WeatherShimmerEffect
