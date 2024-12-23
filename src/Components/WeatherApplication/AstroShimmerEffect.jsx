import React from 'react'

const AstroShimmerEffect = () => {
  return (
    <div className='w-100% h-full px-10 flex gap-10 rounded-md'>
    <div className='w-[20%] h-full p-1 flex flex-col gap-4'>
        <div className='flex flex-col justify-center gap-2 bg-slate-400 p-1 items-start rounded-md'>
          <p className='p-3 bg-slate-300 w-[80%] rounded-sm'></p>
          <div className='h-24 w-24 bg-slate-300 rounded-md'></div>
          <p className='p-3 bg-slate-300 w-[70%] rounded-sm'></p>
        </div>
        <div className='flex flex-col justify-center gap-2 bg-slate-400 p-1 items-start rounded-md'>
          <p className='p-3 bg-slate-300 w-[80%] rounded-sm'></p>
          <div className='h-24 w-24 bg-slate-300 rounded-md'></div>
          <p className='p-3 bg-slate-300 w-[70%] rounded-sm'></p>
        </div>
        <div className='flex flex-col justify-center gap-2 bg-slate-400 p-1 items-start rounded-md'>
          <p className='p-3 bg-slate-300 w-[80%] rounded-sm'></p>
          <div className='h-24 w-24 bg-slate-300 rounded-md'></div>
          <p className='p-3 bg-slate-300 w-[70%] rounded-sm'></p>
        </div>
        <div className='flex flex-col justify-center gap-2 bg-slate-400 p-1 items-start rounded-md'>
          <p className='p-3 bg-slate-300 w-[80%] rounded-sm'></p>
          <div className='h-24 w-24 bg-slate-300 rounded-md'></div>
          <p className='p-3 bg-slate-200 w-[70%] rounded-sm'></p>
        </div>
    </div>
    <div className='flex flex-col justify-start gap-5 items-center'>
      <div>
        <p className='p-3 bg-slate-300 w-40 rounded-sm mt-36'></p>
        <p className='p-3 bg-slate-300 w-36 rounded-sm mt-2'></p>
        <div className='h-24 w-24 bg-slate-300 rounded-md mt-2'></div>
      </div>
    </div>
</div>
  )
}

export default AstroShimmerEffect
